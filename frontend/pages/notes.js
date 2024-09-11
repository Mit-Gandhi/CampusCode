// pages/notes.js
import { useState } from 'react';

const Notes = () => {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);

  const getResponse = async () => {
    if (text.trim() === "") return; // Prevent empty messages

    try {
      // Use environment variable for backend URL
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/${encodeURIComponent(text)}`);
      const data = await response.json();
      
      setMessages([
        ...messages,
        { sender: "user", text },
        { sender: "bot", text: data.message },
      ]);
      setText(""); // Reset input
    } catch (error) {
      console.error("Error communicating with chatbot server:", error);
    }
  };

  return (
    <div>
      <h1>AI Chatbot</h1>
      <div>
        {messages.map((msg, idx) => (
          <p key={idx}><strong>{msg.sender}:</strong> {msg.text}</p>
        ))}
      </div>
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Type your message..."
      />
      <button onClick={getResponse}>Send</button>
    </div>
  );
};

export default Notes;
