const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();
app.use(express.json());

// Set up CORS middleware
app.use(
  cors({
    origin: 'https://campuscode.vercel.app', // Allow only your frontend origin
    methods: ['GET', 'POST', 'OPTIONS'], // Allowed methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
    credentials: true, // If you want to allow cookies or credentials
    optionsSuccessStatus: 200, // For legacy browsers that don't support 204
  })
);

// Route to forward chatbot requests to the chatbot server (chat-bot-master)
app.post("/api/chatbot", async (req, res) => {
  try {
    const { message } = req.body;
    if (!message) {
      return res.status(400).json({ error: "Message is required." });
    }

    // Forward the request to the chat-bot-master server
    const chatbotResponse = await axios.post(
      `${process.env.CHATBOT_SERVER_URL}/api/chatbot`,
      { message }
    );

    return res.status(200).json({ response: chatbotResponse.data.response });
  } catch (error) {
    console.error("Error communicating with chatbot server:", error);
    return res.status(500).json({ error: "Failed to communicate with chatbot server." });
  }
});

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Backend server is listening on port ${PORT}`);
});
