require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios"); // We'll use axios to communicate with the chatbot

const app = express();
app.use(express.json());
app.use(cors());

// Route to forward chatbot requests to the chatbot server (chat-bot-master)
app.post("/api/chatbot", async (req, res) => {
  try {
    const { message } = req.body; // Get the message from the frontend
    if (!message) {
      return res.status(400).json({ error: "Message is required." });
    }

    // Forward the request to the chat-bot-master server
    const chatbotResponse = await axios.post(`${process.env.CHATBOT_SERVER_URL}/api/chatbot`, {
      message,
    });

    // Send back the response from chat-bot-master server
    return res.status(200).json({ response: chatbotResponse.data.response });
  } catch (error) {
    console.error("Error communicating with chatbot server:", error);
    return res.status(500).json({ error: "Failed to communicate with chatbot server." });
  }
});

// Listen on the appropriate port (Vercel sets its own port)
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Backend server is listening on port ${PORT}`);
});
