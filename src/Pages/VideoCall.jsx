import { useEffect, useRef, useState } from "react";
import Peer from "simple-peer/simplepeer.min.js";
import { useLocation } from "react-router-dom";
import getSocket from "../services/socket";

const socket = getSocket();

const VideoCall = () => {
  const location = useLocation();

  const roomId = location.state?.roomId;
  const isCaller =
    location.state?.isCaller ?? location.state?.iscaller ?? false;
  const incomingSignal = location.state?.callerSignal;

  const [stream, setStream] = useState(null);
  const [callerSignal, setCallerSignal] = useState(incomingSignal || null);

  const myVideo = useRef(null);
  const userVideo = useRef(null);
  const connectionRef = useRef(null);

  // CAMERA + MIC
  useEffect(() => {
    if (!roomId) return;

    navigator.mediaDevices
      .getUserMedia({
        video: true,
        audio: true,
      })
      .then((currentStream) => {
        setStream(currentStream);

        if (myVideo.current) {
          myVideo.current.srcObject = currentStream;
        }

        socket.emit("join_room", roomId);
      })
      .catch((err) => {
        console.log("MEDIA ERROR:", err);
      });
  }, [roomId]);

  // RECEIVER SIDE — signal from navigation or socket
  useEffect(() => {
    if (!isCaller && incomingSignal) {
      setCallerSignal(incomingSignal);
    }
  }, [isCaller, incomingSignal]);

  useEffect(() => {
    const handleIncomingCall = (data) => {
      setCallerSignal(data.signal);
    };

    socket.on("incoming-call", handleIncomingCall);

    return () => {
      socket.off("incoming-call", handleIncomingCall);
    };
  }, []);

  // CALL ACCEPTED
  useEffect(() => {
    const handleCallAccepted = (signal) => {
      console.log("CALL ACCEPTED");

      if (connectionRef.current) {
        connectionRef.current.signal(signal);
      }
    };

    socket.on("call-accepted", handleCallAccepted);

    return () => {
      socket.off("call-accepted", handleCallAccepted);
    };
  }, []);

  // CALLER
  const callUser = () => {
    if (!stream) return;

    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream,
    });

    peer.on("signal", (data) => {
      console.log("SENDING OFFER");

      socket.emit("call-user", {
        roomId,
        signal: data,
      });
    });

    peer.on("stream", (remoteStream) => {
      console.log("REMOTE STREAM RECEIVED");

      if (userVideo.current) {
        userVideo.current.srcObject = remoteStream;
      }
    });

    peer.on("error", (err) => {
      console.log("PEER ERROR:", err);
    });

    connectionRef.current = peer;
  };

  // RECEIVER
  const answerCall = () => {
    if (!stream || !callerSignal) return;

    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream,
    });

    peer.on("signal", (data) => {
      socket.emit("answer-call", {
        roomId,
        signal: data,
      });
    });

    peer.on("stream", (remoteStream) => {
      if (userVideo.current) {
        userVideo.current.srcObject = remoteStream;
      }
    });

    peer.on("error", (err) => {
      console.log("ANSWER ERROR:", err);
    });

    peer.signal(callerSignal);

    connectionRef.current = peer;
  };

  if (!roomId) {
    return (
      <div className="bg-black min-h-screen flex items-center justify-center">
        <h1 className="text-white text-2xl">No Room Found</h1>
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen text-white flex flex-col items-center justify-center">
      <h1 className="text-3xl mb-6 font-bold">Video Call</h1>

      <div className="flex gap-5">
        <video
          ref={myVideo}
          autoPlay
          playsInline
          muted
          className="w-80 h-60 border rounded-xl"
        />

        <video
          ref={userVideo}
          autoPlay
          playsInline
          className="w-80 h-60 border rounded-xl"
        />
      </div>

      <div className="mt-6">
        {isCaller ? (
          <button
            onClick={callUser}
            className="bg-green-500 px-6 py-3 rounded-xl"
          >
            Start Call
          </button>
        ) : callerSignal ? (
          <button
            onClick={answerCall}
            className="bg-blue-500 px-6 py-3 rounded-xl"
          >
            Answer Call
          </button>
        ) : (
          <p>Waiting for call...</p>
        )}
      </div>
    </div>
  );
};

export default VideoCall;
