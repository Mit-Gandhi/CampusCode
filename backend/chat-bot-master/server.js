require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Initialize GoogleGenerativeAI with API Key
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// Route to handle chatbot requests
app.post("/api/chatbot", async (req, res) => {
  try {
    const { message } = req.body; // Get the message from the frontend
    const prompt = JSON.stringify(message);

    // Call Google Generative AI to generate response
    const result = await model.generateContent(prompt);
    const send = result.response.text();

    res.status(200).json({ response: send });
  } catch (error) {
    console.error("Error generating content:", error);
    res.status(500).json({ error: "Failed to generate content." });
  }
});

// Listen on the appropriate port (Vercel sets its own port)
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
