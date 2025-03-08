// require('dotenv').config(); // Load environment variables from .env file
// const express = require('express');
// const { GoogleGenerativeAI } = require('@google/generative-ai');
// const cors = require('cors'); // Enable CORS for frontend-backend communication
// const rateLimit = require('express-rate-limit'); // Rate limiting
// const morgan = require('morgan'); // Logging

// const app = express();
// const port = process.env.PORT || 5000;

// // Validate environment variables
// if (!process.env.GEMINI_API_KEY) {
//   console.error('GEMINI_API_KEY is missing in the environment variables.');
//   process.exit(1);
// }

// // Middleware
// app.use(cors({ origin: 'http://localhost:5173' })); // Restrict CORS to frontend URL
// app.use(express.json()); // Parse JSON request bodies
// app.use(morgan('combined')); // Log all requests

// // Rate limiting
// const limiter = rateLimit({
//   windowMs: 15 * 60 * 1000, // 15 minutes
//   max: 100, // Limit each IP to 100 requests per windowMs
// });
// app.use(limiter);

// // Initialize Gemini
// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY); // Use API key from .env
// const model = genAI.getGenerativeModel({ model: 'gemini-pro' }); // Use 'gemini-pro' or another model

// // API endpoint to handle Gemini requests
// app.post('/api/gemini', async (req, res) => {
//   const query = req.body.query;

//   // Input validation
//   if (!query || typeof query !== 'string' || query.trim() === '') {
//     return res.status(400).json({ error: 'Query is required and must be a non-empty string.' });
//   }

//   try {
//     // Send the query to Gemini
//     const result = await model.generateContent(query);
//     const response = result.response;
//     const text = response.text(); // Extract the response text

//     console.log("Gemini response:", text); // Log the response for debugging
//     res.json({ response: text }); // Send the response back to the frontend
//   } catch (error) {
//     console.error('Error calling Gemini API:', error); // Log the error for debugging
//     res.status(500).json({ error: 'Error processing request' }); // Send error response to frontend
//   }
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });
require('dotenv').config(); // Load environment variables
const express = require('express');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const { spawn } = require('child_process');
const path = require('path');


const app = express();
app.use(bodyParser.json());
const port = process.env.PORT || 5000;

// Validate environment variables
if (!process.env.GEMINI_API_KEY) {
  console.error('GEMINI_API_KEY is missing in the environment variables.');
  process.exit(1);
}

// Middleware
app.use(cors({ origin: 'http://localhost:5173' })); // Restrict CORS to frontend URL
app.use(express.json()); // Parse JSON request bodies
app.use(morgan('combined')); // Log all requests

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Initialize Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

// API endpoint to handle Gemini requests
app.post('/api/gemini', async (req, res) => {
  const query = req.body.query;

  // Input validation
  if (!query || typeof query !== 'string' || query.trim() === '') {
    return res.status(400).json({ error: 'Query is required and must be a non-empty string.' });
  }

  try {
    // Send the query to Gemini
    const result = await model.generateContent(query);
    const response = result.response;
    const text = response.text(); // Extract the response text

    console.log("Gemini response:", text); // Log the response for debugging
    res.json({ response: text }); // Send the response back to the frontend
  } catch (error) {
    console.error('Error calling Gemini API:', error); // Log the error for debugging
    res.status(500).json({ error: 'Error processing request' }); // Send error response to frontend
  }
});

// Predict route
app.post('/predict', (req, res) => {
    const { features } = req.body;
    console.log(features);
    
    // Call the Python script to make predictions
    const pythonProcess = spawn('python', [
        path.join(__dirname, 'predict.py'),
        JSON.stringify(features),
    ]);

    let prediction = '';

    pythonProcess.stdout.on('data', (data) => {
        console.log(`Python script output: ${data.toString()}`);
        prediction += data.toString();
    });

    pythonProcess.stderr.on('data', (data) => {
        console.error(`Python script error: ${data}`);
    });

    pythonProcess.on('close', (code) => {
        if (code === 0) {
            res.json({ prediction: JSON.parse(prediction) });
        } else {
            res.status(500).json({ error: 'Prediction failed' });
        }
    });
});


// Start the server
app.listen(port, () => {
  console.log(`Gemini API Server listening on port ${port}`);
});