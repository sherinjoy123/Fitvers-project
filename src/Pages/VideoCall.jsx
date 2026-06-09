import React, { useEffect, useRef, useState } from "react";
import Peer from "simple-peer/simplepeer.min.js";
import io from "socket.io-client";
import { useLocation } from "react-router-dom";

const socket = io("http://localhost:4000");

const VideoCall = () => {
  const location = useLocation();

  console.log(location.state);

  const roomId = location.state?.roomId;
  const isCaller = location.state?.isCaller;

  const [stream, setStream] = useState(null);
  const [callerSignal, setCallerSignal] = useState(null);

  const myVideo = useRef();
  const userVideo = useRef();
  const connectionRef = useRef();

  if (!roomId) {
    return <h1>No Room Found</h1>;
  }

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    })
    .then((stream) => {
      setStream(stream);
  
      if (myVideo.current) {
        myVideo.current.srcObject = stream;
      }
  
      socket.emit("join_room", roomId);
  
      // AUTO CALL START (ONLY FOR CALLER)
      if (isCaller) {
        startCall(stream);
      }
    });
  }, []);

  // CALL USER
  const callUser = () => {
    try {
      console.log("START CALL CLICKED");
      console.log("STREAM BEFORE PEER =", stream);
      console.log("Peer =", Peer);
  
      const peer = new Peer({
        initiator: true,
        trickle: false,
        stream,
      });
  
      console.log("PEER CREATED", peer);
  
      peer.on("signal", (data) => {
        console.log("SENDING SIGNAL", data);
  
        socket.emit("call-user", {
          roomId,
          signal: data,
        });
      });
  
      peer.on("error", (err) => {
        console.log("PEER ERROR =", err);
      });
  
      peer.on("stream", (remoteStream) => {
        console.log("REMOTE STREAM RECEIVED");
  
        if (userVideo.current) {
          userVideo.current.srcObject = remoteStream;
        }
      });
  
      socket.on("call-accepted", (signal) => {
        console.log("CALL ACCEPTED");
        peer.signal(signal);
      });
  
      connectionRef.current = peer;
    } catch (err) {
      console.log("CALL USER ERROR =", err);
    }
  };
  // ANSWER CALL
  const startCall = (stream) => {
    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream,
    });
  
    peer.on("signal", (data) => {
      socket.emit("call-user", {
        roomId,
        signal: data,
      });
    });
  
    peer.on("stream", (remoteStream) => {
      userVideo.current.srcObject = remoteStream;
    });
  
    socket.on("call-accepted", (signal) => {
      peer.signal(signal);
    });
  
    connectionRef.current = peer;
  };
  return (
    <div className="bg-black min-h-screen text-white flex flex-col items-center justify-center">
      <div className="flex gap-5">
        <video
          playsInline
          muted
          ref={myVideo}
          autoPlay
          className="w-72 rounded-xl border"
        />

        <video
          playsInline
          ref={userVideo}
          autoPlay
          className="w-72 rounded-xl border"
        />
      </div>

      <div className="mt-5 flex gap-4">
        {isCaller ? (
          <button
            onClick={callUser}
            className="bg-green-500 px-5 py-2 rounded-xl"
          >
            Start Call
          </button>
        ) : callerSignal ? (
          <button
            onClick={answerCall}
            className="bg-blue-500 px-5 py-2 rounded-xl"
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