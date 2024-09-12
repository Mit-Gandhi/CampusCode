require("dotenv").config();
const express = require("express");
const cors = require("cors");

// Import the necessary chatbot logic from chat-bot-master
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();
app.use(express.json());
app.use(cors({
  origin: '*',  // Allow all origins. You can restrict this to your frontend URL.
  methods: 'GET,POST',
  allowedHeaders: 'Content-Type,Authorization'
}));

// Initialize GoogleGenerativeAI with API Key
const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// Route to handle chatbot requests
app.post("/api/chatbot", async (req, res) => {
  try {
    const { message } = req.body; // Get the message from the frontend
    if (!message) {
      return res.status(400).json({ error: "Message is required." });
    }

    const prompt = JSON.stringify(message);

    // Call Google Generative AI to generate a response
    const result = await model.generateContent(prompt);

    // Check if the response exists and return the text
    if (result && result.response && result.response.text) {
      const send = result.response.text;
      return res.status(200).json({ response: send });
    } else {
      return res.status(500).json({ error: "Failed to generate a response from Google API." });
    }
  } catch (error) {
    console.error("Error generating content:", error);
    return res.status(500).json({ error: "Server error while generating content." });
  }
});

// Listen on the appropriate port (Vercel sets its own port)
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Backend server is listening on port ${PORT}`);
});
