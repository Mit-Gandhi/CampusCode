require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Initialize GoogleGenerativeAI with API Key
const genAI = new GoogleGenerativeAI({ apiKey: process.env.API_KEY });
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// Route to handle chatbot requests
app.post("/api/chatbot", async (req, res) => {
  try {
    const { message } = req.body; // Get message from frontend

    // Validate message
    if (!message) {
      return res.status(400).json({ error: "Message is required." });
    }

    const prompt = { prompt: message }; // Form correct structure for the prompt

    // Generate response using Google Generative AI
    const result = await model.generateMessage(prompt);

    // Check if a valid response is returned
    if (result && result.candidates && result.candidates.length > 0) {
      const responseText = result.candidates[0].content; // Get the first candidate's response
      return res.status(200).json({ response: responseText });
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
  console.log(`Chatbot server is listening on port ${PORT}`);
});
