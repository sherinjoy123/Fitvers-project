import React, { useEffect, useState, useRef } from "react";
import { FaPaperPlane, FaVideo, FaTimes } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import io from "socket.io-client";

import { getMessagesAPI, saveMessageAPI } from "../services/chatApi";

const socket = io("http://localhost:4000");

const Chat = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const trainer = location.state?.trainer;
  const user = JSON.parse(localStorage.getItem("user"));

  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const [onlineUsers, setOnlineUsers] = useState([]);
 

  const bottomRef = useRef(null);

  const room = trainer?._id ? `room-${trainer._id}` : null;

  console.log("TRAINER =", trainer);
console.log("ROOM =", room);


  // SCROLL TO BOTTOM
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messageList]);

  // LOAD OLD MESSAGES
  useEffect(() => {
    const loadMessages = async () => {
      try {
        if (!user?._id || !trainer?._id) return;

        const res = await getMessagesAPI(user._id, trainer._id);
        console.log(res.data);

        if (res.data.success) {
          setMessageList(res.data.messages || []);
        }
      } catch (err) {
        console.log(err);
      }
    };

    loadMessages();
  }, [user?._id, trainer?._id]);

  // ONLINE STATUS
  useEffect(() => {
    if (user?._id) {
      socket.emit("user_online", user._id);
    }
  }, [user?._id]);

  useEffect(() => {
    const handleOnlineUsers = (users) => {
      setOnlineUsers(users);
    };

    socket.on("online_users", handleOnlineUsers);

    return () => {
      socket.off("online_users", handleOnlineUsers);
    };
  }, []);

  const isTrainerOnline =
    trainer?._id && onlineUsers.includes(trainer._id);

  // JOIN ROOM
  useEffect(() => {
    if (room) {
      socket.emit("join_room", room);
    }
  }, [room]);

  // RECEIVE MESSAGE
  useEffect(() => {
    const handleReceive = (data) => {
      setMessageList((prev) => [...prev, data]);
    };

    socket.on("receive_message", handleReceive);

    return () => {
      socket.off("receive_message", handleReceive);
    };
  }, []);

  // SEND MESSAGE
  const sendMessage = async () => {
    if (!message.trim() || !user || !trainer) return;

    const messageData = {
      room,
      author: user.name,
      message,
      senderId: user._id,
      time: new Date().getHours() + ":" + new Date().getMinutes(),
    };

    try {
      await saveMessageAPI({
        senderId: user._id,
        receiverId: trainer._id,
        message,
      });

      socket.emit("send_message", messageData);

      setMessageList((prev) => [...prev, messageData]);
      setMessage("");
    } catch (err) {
      console.log(err);
    }
  };
  const startVideoCall = () => {
    console.log("VIDEO CALL STATE =", {
      trainer,
      user,
      roomId: room,
    });
  
    navigate("/videocall", {
      state: {
        trainer,
        user,
        roomId: room,
        isCaller:true,
      },
    });
  };

  if (!trainer) {
    return (
      <div className="bg-black min-h-screen flex items-center justify-center text-white text-2xl">
        No Trainer Found
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen text-white flex flex-col">

      {/* TOP BAR */}
      <div className="bg-[#111] border-b border-gray-800 px-6 py-5 flex justify-between items-center">

        <div className="flex items-center gap-4">
          <img
            src={trainer.profilePic}
            alt={trainer.name}
            className="w-14 h-14 rounded-full object-cover border-2 border-red-500"
          />

          <div>
            <h1 className="text-xl font-bold">{trainer.name}</h1>
            <p className={isTrainerOnline ? "text-green-500" : "text-gray-500"}>
              {isTrainerOnline ? "🟢 Online" : "⚫ Offline"}
            </p>
          </div>
        </div>

        <button
  onClick={startVideoCall}
  className="bg-red-500 hover:bg-red-600 px-5 py-3 rounded-xl flex items-center gap-2"
>
  <FaVideo />
  Call
</button>
      </div>

      {/* CHAT */}
      <div className="flex-1 overflow-y-auto p-5 space-y-3">
        {messageList.map((msg, index) => {
          const isMine =
            msg.senderId === user?._id || msg.author === user?.name;

          return (
            <div
              key={index}
              className={`flex ${isMine ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[70%] px-4 py-3 rounded-2xl ${
                  isMine ? "bg-red-500" : "bg-zinc-800"
                }`}
              >
                <p className="text-sm font-bold">
                  {isMine ? "You" : trainer.name}
                </p>
                <p>{msg.message}</p>
                <p className="text-xs opacity-60 mt-1">
                  {msg.time}
                </p>
              </div>
            </div>
          );
        })}
        <div ref={bottomRef}></div>
      </div>

      {/* INPUT */}
      <div className="bg-[#111] border-t border-gray-800 p-4 flex gap-3">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-1 bg-black border border-gray-700 rounded-xl px-4 py-3"
          placeholder="Type message..."
        />

        <button
          onClick={sendMessage}
          className="bg-red-500 px-5 py-3 rounded-xl"
        >
          <FaPaperPlane />
        </button>

        <button
          onClick={() => navigate("/trainers")}
          className="bg-gray-700 px-4 py-3 rounded-xl"
        >
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Chat;