// pages/notes.js

import { useState } from "react";

const NotesPage = () => {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);

  const getResponse = async () => {
    if (text.trim() === "") return; // Prevent empty messages
    const response = await fetch(`http://localhost:8000/${text}`);
    const data = await response.json();
    setMessages([
      ...messages,
      {
        author: text,
        bot: data,
      },
    ]);
    setText(""); // Reset the input after sending
  };

  return (
    <div className="notes-page">
      <div className="header">
        <h1>Notes Chatbot</h1>
      </div>
      
      <div className="chat-container">
        <div className="chat-feed">
          {messages?.map((message, index) => (
            <div key={index} className="chat-bubble-container">
              <div className="user-message bubble">{message.author}</div>
              <div className="ai-response bubble">{message.bot}</div>
            </div>
          ))}
        </div>
        
        <div className="input-container">
          <textarea 
            placeholder="Ask for your notes..." 
            value={text} 
            onChange={(e) => setText(e.target.value)}
            className="chat-input"
          />
          <button onClick={getResponse} className="send-button">Send</button>
        </div>
      </div>

      <style jsx>{`
        .notes-page {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          height: 100vh;
          padding: 20px;
          background-color: #f4f4f9;
        }

        .header {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 20px;
        }

        .chat-container {
          width: 80%;
          max-width: 800px;
          height: 500px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border: 2px solid #ddd;
          border-radius: 10px;
          padding: 20px;
          background-color: #fff;
        }

        .chat-feed {
          flex-grow: 1;
          overflow-y: auto;
          margin-bottom: 10px;
        }

        .chat-bubble-container {
          display: flex;
          flex-direction: column;
          margin-bottom: 10px;
        }

        .bubble {
          padding: 10px 15px;
          border-radius: 20px;
          margin-bottom: 5px;
        }

        .user-message {
          align-self: flex-end;
          background-color: #007bff;
          color: white;
        }

        .ai-response {
          align-self: flex-start;
          background-color: #e1e1e1;
        }

        .input-container {
          display: flex;
          justify-content: space-between;
          gap: 10px;
        }

        .chat-input {
          width: 80%;
          padding: 10px;
          border-radius: 10px;
          border: 1px solid #ddd;
          font-size: 16px;
        }

        .send-button {
          background-color: #007bff;
          color: white;
          padding: 10px 20px;
          border: none;
          border-radius: 10px;
          cursor: pointer;
        }

        .send-button:hover {
          background-color: #0056b3;
        }
      `}</style>
    </div>
  );
};

export default NotesPage;
