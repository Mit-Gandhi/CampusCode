import { useState } from "react";

const NotesPage = () => {
  const [input, setInput] = useState(""); // User input
  const [response, setResponse] = useState(""); // Chatbot response
  const [isLoading, setIsLoading] = useState(false); // Loading state

  const handleSendMessage = async () => {
    if (input.trim() !== "") {
      setIsLoading(true);
      try {
        let t = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/chatbot`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: e, // your input message
          }),
        });        

        if (!res.ok) {
          throw new Error("Error communicating with chatbot server");
        }

        let data = await res.json();
        setResponse(data.response); // Store chatbot response
      } catch (error) {
        setResponse("Failed to get a response from the server.");
        console.error("Error:", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">AI Chatbot</h1>

      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <div className="bg-gray-100 p-3 rounded mb-4 h-32 overflow-auto">
          {response ? <p>{response}</p> : <p className="text-gray-500">Chatbot response will appear here.</p>}
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            onClick={handleSendMessage}
            className={`px-4 py-2 bg-blue-500 text-white rounded ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Send"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotesPage;
