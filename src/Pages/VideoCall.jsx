import React, { useEffect, useRef, useState } from "react";
import Peer from "simple-peer";
import io from "socket.io-client";
import { useLocation } from "react-router-dom";

const socket = io("http://localhost:4000");

const VideoCall = () => {
  const location = useLocation();
  const { roomId, isCaller } = location.state;

  const [stream, setStream] = useState();
  const [callerSignal, setCallerSignal] = useState();

  const myVideo = useRef();
  const userVideo = useRef();
  const connectionRef = useRef();

  useEffect(() => {

    navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    }).then((stream) => {
      setStream(stream);
      myVideo.current.srcObject = stream;
    });

    socket.emit("join_room", roomId);

    socket.on("incoming-call", (data) => {
      setCallerSignal(data.signal);
    });

  }, []);

  // CALL USER
  const callUser = () => {
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
  
    peer.on("stream", (stream) => {
      userVideo.current.srcObject = stream;
    });
  
    socket.on("call-accepted", (signal) => {
      peer.signal(signal);
    });
  
    connectionRef.current = peer;
  };
  // ANSWER CALL
  const answerCall = () => {
    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream,
    });
  
    peer.on("signal", (data) => {
      socket.emit("answer-call", {
        signal: data,
        roomId,
      });
    });
  
    peer.signal(callerSignal);
  
    peer.on("stream", (stream) => {
      userVideo.current.srcObject = stream;
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

        {!callerSignal ? (
          <button
            onClick={callUser}
            className="bg-green-500 px-5 py-2 rounded-xl"
          >
            Start Call
          </button>
        ) : (
          <button
            onClick={answerCall}
            className="bg-blue-500 px-5 py-2 rounded-xl"
          >
            Answer Call
          </button>
        )}

      </div>

    </div>
  );
};

export default VideoCall;