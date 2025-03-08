require('dotenv').config();
const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function testModel() {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' }); // Use the correct model name
    console.log("Model 'gemini-pro' is available.");
  } catch (error) {
    console.error("Error testing model:", error);
  }
}

testModel();