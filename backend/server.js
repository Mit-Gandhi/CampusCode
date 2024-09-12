const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: 'https://campuscode.vercel.app', // Change to your frontend URL
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type'],
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

app.post("/api/chatbot", async (req, res) => {
  try {
    const { message } = req.body;
    if (!message) {
      return res.status(400).json({ error: "Message is required." });
    }

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

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Backend server is listening on port ${PORT}`);
});
