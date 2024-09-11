import { useState } from 'react';

const Notes = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (input.trim() === '') return; // Avoid sending empty messages
    setLoading(true);

    try {
      const res = await fetch(`${process.env.NEXT_BACKEND_URL}/chatbot`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: input }),
      });

      if (!res.ok) throw new Error('Error communicating with chatbot server');

      const data = await res.json();
      setResponse(data.response);
    } catch (error) {
      setResponse('Failed to get a response from the server.');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">AI Chatbot</h1>

      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        {/* Display Chatbot Response */}
        <div className="bg-gray-100 p-3 rounded mb-4 h-32 overflow-auto">
          {response ? (
            <p>{response}</p>
          ) : (
            <p className="text-gray-500">Chatbot response will appear here.</p>
          )}
        </div>

        {/* Input Box */}
        <div className="flex items-center space-x-2">
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            onClick={handleSend}
            className={`px-4 py-2 bg-blue-500 text-white rounded ${
              loading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notes;
