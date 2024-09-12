// notes.js or wherever the chatbot input is handled

import React, { useState } from "react";

const NotesPage = () => {
  const [message, setMessage] = useState(""); // 'message' state to store the user input
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle send message function
  const handleSendMessage = async () => {
    if (message.trim() !== "") {
      setLoading(true);
      try {
        let t = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/chatbot`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: message, // Send the 'message' state value
          }),
        });
        if (!t.ok) throw Error("Error communicating with chatbot server");
        let r = await t.json();
        setResponse(r.response); // Update the response state
      } catch (error) {
        setResponse("Failed to get a response from the server.");
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div>
      <textarea
        value={message} // Set textarea value from 'message' state
        onChange={(e) => setMessage(e.target.value)} // Update state on input change
        placeholder="Type your message here..."
      />
      <button onClick={handleSendMessage} disabled={loading}>
        {loading ? "Sending..." : "Send"}
      </button>
      <div>
        <p>Response: {response}</p>
      </div>
    </div>
  );
};

export default NotesPage;
