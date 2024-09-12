const { GoogleGenerativeAI } = require("@google/generative-ai");
const express = require("express");
const cors = require("cors");
require('dotenv').config();

const app = express();
const PORT = 5000;

const apiKey = process.env.GEMINI_API_KEY || 'AIzaSyAtPQjANTwme9fd5IDIqs2Bud-Jsl3TXq4'; // Replace with your actual API key

const generationConfig = {
    temperature: 0.8,
    topP: 1,
    maxOutputTokens: 2048,
    responseMimeType: "text/plain",
};

async function runChat(userInput) {
    try {
        const genAI = new GoogleGenerativeAI(apiKey);

        const model = genAI.getGenerativeModel({
            model: "gemini-1.0-pro",
        });

        const chatSession = model.startChat({
            generationConfig,
            history: [
                {
                    role: "user",
                    parts: [
                        { text: "Your name is Mr. Flicky..." }, // Add full history initialization here
                    ],
                },
                // Include other history as needed
            ],
        });

        const result = await chatSession.sendMessage(userInput);
        const response = await result.response.text();

        console.log("Chatbot:", response);
        return response;
    } catch (error) {
        console.error("Error in runChat:", error);
        return "Sorry, something went wrong.";
    }
}

app.use(cors());
app.use(express.json());

app.post("/chat", async (req, res) => {
    const { userInput } = req.body;
    console.log("Received input:", userInput);
    const botResponse = await runChat(userInput);
    res.json({ response: botResponse });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
