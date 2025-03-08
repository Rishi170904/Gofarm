require('dotenv').config(); // Load environment variables from .env file
const { GoogleGenerativeAI } = require('@google/generative-ai');

// Initialize Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY); // Use your API key from .env
const model = genAI.getGenerativeModel({ model: 'gemini-pro' }); // Use the correct model name

// Function to test Gemini API
async function testGemini() {
  try {
    const prompt = "hi?"; // Test prompt
    console.log("Sending prompt to Gemini:", prompt);

    // Send the prompt to Gemini
    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text(); // Get the response text

    console.log("Gemini response:", text); // Log the response
  } catch (error) {
    console.error("Error calling Gemini API:", error); // Log any errors
  }
}

// Run the test
testGemini();