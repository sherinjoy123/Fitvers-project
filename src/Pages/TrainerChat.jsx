import { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import getSocket from "../services/socket";
import { saveMessageAPI, getMessagesAPI } from "../services/chatApi";
import { getUserByIdAPI } from "../services/userApi";
import { FaTimes } from "react-icons/fa";

const socket = getSocket();

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
    if (!trainer?._id || !userId) return;

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

    loadMessages();
  }, [trainer?._id, userId]);

  // =========================
  // JOIN ROOM
  // =========================
  useEffect(() => {
    if (room) {
      console.log(room);
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

  // INCOMING VIDEO CALL
  useEffect(() => {
    const handleIncomingCall = (data) => {
      if (window.confirm("Incoming video call from user. Answer?")) {
        navigate("/videocall", {
          state: {
            roomId: room,
            isCaller: false,
            callerSignal: data.signal,
            trainer,
            user,
          },
        });
      }
    };

    socket.on("incoming-call", handleIncomingCall);
    return () => socket.off("incoming-call", handleIncomingCall);
  }, [room, trainer, user, navigate]);

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

  if (!trainer?._id) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center text-xl">
        Please log in as a trainer to access chat.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">

      {/* HEADER */}
      <div className="bg-zinc-900 border-b border-zinc-800 p-5 flex items-center gap-4">

      <button
  onClick={() =>
    navigate("/videocall", {
      state: {
        roomId: room,
        isCaller: true,
        trainer,
        user,
      },
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