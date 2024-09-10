require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8000;
app.use(express.json());
app.use(cors());

app.get("/:text", async (req, res) => {
  const text = req.params.text;
  const prompt = JSON.stringify(text);
  const result = await model.generateContent(prompt);
  const send = result.response.text();
  const data = JSON.stringify(send);
  res.send(data);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
