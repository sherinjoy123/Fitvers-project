import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import io from "socket.io-client";
import { saveMessageAPI, getMessagesAPI } from "../services/chatApi";
import { getUserByIdAPI } from "../services/userApi";
import { useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

const socket = io("http://localhost:4000");

function TrainerChat() {
  const navigate = useNavigate()
  const { userId } = useParams();

  const trainer = JSON.parse(localStorage.getItem("trainer"));

  const room = trainer?._id ? `room-${trainer._id}` : null;

  console.log("TRAINER ROOM =", room);

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [user, setUser] = useState(null);

  const bottomRef = useRef(null);

  // =========================
  // FETCH USER
  // =========================
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await getUserByIdAPI(userId);

        if (res.data.success) {
          setUser(res.data.user);
        }
      } catch (err) {
        console.log(err);
      }
    };

    if (userId) fetchUser();
  }, [userId]);

  // =========================
  // LOAD MESSAGES
  // =========================
  useEffect(() => {
    const loadMessages = async () => {
      try {
        const res = await getMessagesAPI(trainer._id, userId);

        if (res.data.success) {
          setMessages(res.data.messages || []);
        }
      } catch (error) {
        console.log(error);
      }
    };

    if (trainer?._id && userId) {
      loadMessages();
    }
  }, [trainer?._id, userId]);

  // =========================
  // JOIN ROOM
  // =========================
  useEffect(() => {
    if (room) {
      socket.emit("join_room", room);
    }
  }, [room]);

  // =========================
  // ONLINE STATUS
  // =========================
  useEffect(() => {
    if (trainer?._id) {
      socket.emit("user_online", trainer._id);
    }
  }, [trainer?._id]);

  useEffect(() => {
    const handleOnlineUsers = (users) => {
      setOnlineUsers(users);
    };

    socket.on("online_users", handleOnlineUsers);

    return () => {
      socket.off("online_users", handleOnlineUsers);
    };
  }, []);

  const isUserOnline =
    userId && onlineUsers.includes(userId);

  // =========================
  // RECEIVE MESSAGE
  // =========================
  useEffect(() => {
    const receiveMessage = (data) => {
      setMessages((prev) => [...prev, data]);
    };

    socket.on("receive_message", receiveMessage);

    return () => {
      socket.off("receive_message", receiveMessage);
    };
  }, []);

  // =========================
  // AUTO SCROLL
  // =========================
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // =========================
  // SEND MESSAGE
  // =========================
  const sendMessage = async () => {
    if (!message.trim()) return;

    const messageData = {
      room,
      author: "Trainer",
      senderId: trainer._id,
      message,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    try {
      await saveMessageAPI({
        senderId: trainer._id,
        receiverId: userId,
        message,
      });

      socket.emit("send_message", messageData);

      setMessages((prev) => [...prev, messageData]);
      setMessage("");
    } catch (error) {
      console.log(error);
    }
  };
  socket.on("incoming-call", (data) => {
    setCallerSignal(data.signal);
  });
  // =========================
  const answerCall = () => {
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
      userVideo.current.srcObject = remoteStream;
    });
  
    // 🔥 IMPORTANT LINE
    peer.signal(callerSignal);
  
    connectionRef.current = peer;
  };
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">

      {/* HEADER */}
      <div className="bg-zinc-900 border-b border-zinc-800 p-5 flex items-center gap-4">

      <button
  onClick={() =>
    navigate("/videocall", {
      state: {
       roomId:room,
       iscaller:true,
       trainer,
       user,
      }
    })
  }
  className="bg-red-500 px-4 py-2 rounded-xl"
>
  Start Call
</button>

        <img
          src={
            user?.profilePic ||
            "https://cdn-icons-png.flaticon.com/512/149/149071.png"
          }
          className="w-14 h-14 rounded-full object-cover border-2 border-red-500"
        />

        <div>
          <h2 className="text-xl font-bold">
            {user?.name || "User"}
          </h2>

          <p
            className={`text-sm font-semibold ${
              isUserOnline ? "text-green-500" : "text-gray-500"
            }`}
          >
            {isUserOnline ? "🟢 Online" : "⚫ Offline"}
          </p>
        </div>

      </div>

      {/* MESSAGES */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">

        {messages.length === 0 ? (
          <div className="text-center text-gray-500 mt-10">
            No messages yet
          </div>
        ) : (
          messages.map((msg, index) => {
            const isTrainer =
              msg.senderId === trainer._id ||
              msg.author === "Trainer";

            return (
              <div
                key={index}
                className={`flex ${
                  isTrainer ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[70%] px-4 py-3 rounded-2xl shadow-md ${
                    isTrainer
                      ? "bg-red-500 text-white"
                      : "bg-zinc-800 text-white"
                  }`}
                >
                  <p className="text-sm font-semibold mb-1">
                    {isTrainer ? "You" : user?.name || "User"}
                  </p>

                  <p>{msg.message}</p>

                  <p className="text-xs opacity-70 mt-2">
                    {msg.time || ""}
                  </p>
                </div>
              </div>
            );
          })
        )}

        <div ref={bottomRef}></div>
      </div>

      {/* INPUT */}
      <div className="bg-zinc-900 border-t border-zinc-800 p-4 flex gap-3">

        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 bg-black border border-zinc-700 rounded-xl px-4 py-3 outline-none focus:border-red-500"
          onKeyDown={(e) => {
            if (e.key === "Enter") sendMessage();
          }}
        />

        <button
          onClick={sendMessage}
          className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-xl font-semibold transition"
        >
          Send
        </button>

        <button
          onClick={() => navigate("/trainer-dashboard")}
          className="bg-gray-700 px-4 py-3 rounded-xl"
        >
          <FaTimes />
        </button>

      </div>

    </div>
  );
}

export default TrainerChat;