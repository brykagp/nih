import { useState, useEffect, useRef } from "react";

export default function Chatbot() {
  type Message = { sender: "user" | "bot"; text: string };

  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  type APIResponse = { reply: string };

  const sendPredefinedMessage = async (message: string) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "user", text: message },
    ]);
    await fetchBotResponse(message);
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "user", text: input },
    ]);
    await fetchBotResponse(input);
    setInput("");
  };

  const fetchBotResponse = async (message: string) => {
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const data = (await res.json()) as APIResponse;

      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "bot", text: data.reply },
      ]);
    } catch (error) {
      console.error("Error fetching chat response:", error);
    }
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between mb-4">
      
        <div className="flex space-x-2">
          <button
            onClick={() => sendPredefinedMessage("CDC Assistance")}
            className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition text-sm"
          >
            CDC
          </button>
          <button
            onClick={() => sendPredefinedMessage("Institute Support")}
            className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 transition text-sm"
          >
            Institute
          </button>
        </div>
      </div>

      <div
        className="flex-1 overflow-y-auto border border-gray-700 p-4 rounded-lg bg-gray-800 space-y-3"
        style={{
          height: "300px",
          minHeight: "200px",
        }}
      >
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`p-3 rounded-lg max-w-[75%] ${
              msg.sender === "user"
                ? "bg-blue-500 text-white ml-auto text-right"
                : "bg-gray-600 text-white"
            }`}
          >
            {msg.text}
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>

      <div className="flex mt-4 space-x-2">
        <input
          className="flex-1 p-3 border border-gray-700 rounded-lg bg-gray-800 text-white outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={sendMessage}
          className="bg-blue-500 text-white px-5 py-3 rounded-lg hover:bg-blue-600 transition text-sm"
        >
          Send
        </button>
      </div>
    </div>
  );
}
