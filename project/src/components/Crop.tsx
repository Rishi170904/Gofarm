import React, { useState } from 'react';
import axios from 'axios';

// Define the structure of the features object
interface Features {
  nitrogen: number;
  phosphorus: number;
  potassium: number;
  temperature: number;
  humidity: number;
  ph: number;
  rainfall: number;
}

// Define the structure of the crop mapping object
interface CropMap {
  [key: string]: string;
}

const Crop: React.FC = () => {
  // State to store input features and prediction result
  const [features, setFeatures] = useState<Features>({
    nitrogen: 90,
    phosphorus: 42,
    potassium: 43,
    temperature: 20.879744,
    humidity: 82.002744,
    ph: 6.502985,
    rainfall: 202.935536,
  });
  const [prediction, setPrediction] = useState<string>('');

  // Mapping of English crop names to Telugu names
  const cropMap: CropMap = {
    rice: 'వరి',
    maize: 'మొక్కజొన్న',
    chickpea: 'సెనగ',
    kidneybeans: 'రాజ్మా',
    pigeonpeas: 'కంది పప్పు',
    mothbeans: 'తొక్కుడు పప్పు',
    mungbean: 'పెసర',
    blackgram: 'మినుములు',
    lentil: 'మసూర్ పప్పు',
    pomegranate: 'దానిమ్మ',
    banana: 'అరటి',
    mango: 'మామిడి',
    grapes: 'ద్రాక్ష',
    watermelon: 'పుచ్చకాయ',
    muskmelon: 'ఖర్బూజా',
    apple: 'ఆపిల్',
    orange: 'నారింజ',
    papaya: 'బొప్పాయి',
    coconut: 'కొబ్బరి',
    cotton: 'పత్తి',
    jute: 'జనపనార',
    coffee: 'కాఫీ',
  };

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFeatures({
      ...features,
      [name]: parseFloat(value),
    });
  };

  // Handle prediction
  const handlePredict = async () => {
    try {
      // Send a POST request to the backend
      const response = await axios.post<{ prediction: string[] }>('http://localhost:5000/predict', {
        features: Object.values(features),
      });
      // Update the prediction state
      const predictedCrop = response.data.prediction[0];
      setPrediction(predictedCrop);
      // Speak the prediction in Telugu
      const teluguCrop = cropMap[predictedCrop] || predictedCrop; // Fallback to English if Telugu name not found
      speakPrediction(teluguCrop);
    } catch (error) {
      console.error('Error:', error);
      setPrediction('Failed to get prediction');
      speakPrediction('అంచనా పొందడంలో విఫలమైంది'); // "Failed to get prediction" in Telugu
    }
  };

  // Function to speak the prediction in Telugu
  const speakPrediction = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1; // Speed of speech (0.1 to 10)
      utterance.pitch = 1; // Pitch of speech (0 to 2)
      utterance.volume = 1; // Volume of speech (0 to 1)
      utterance.lang = 'te-IN'; // Set language to Telugu (India)
      window.speechSynthesis.speak(utterance);
    } else {
      console.error('Speech synthesis not supported in this browser.');
    }
  };

  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg" >
      <h1 className="text-2xl sm:text-3xl font-bold text-green-800">Crop Recommendation System</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 space-y-4">
      <label>Nitrogen (N): {features.nitrogen}</label>
        <input
          type="range"
          name="nitrogen"
          min="0"
          max="200"
          value={features.nitrogen}
          onChange={handleInputChange}
        />
        <label>Phosphorus (P): {features.phosphorus}</label>
        <input
          type="range"
          name="phosphorus"
          min="0"
          max="200"
          value={features.phosphorus}
          onChange={handleInputChange}
        />
        <label>Potassium (K): {features.potassium}</label>
        <input
          type="range"
          name="potassium"
          min="0"
          max="200"
          value={features.potassium}
          onChange={handleInputChange}
        />
        <label>Temperature (°C): {features.temperature.toFixed(2)}</label>
        <input
          type="range"
          name="temperature"
          min="0"
          max="50"
          step="0.1"
          value={features.temperature}
          onChange={handleInputChange}
        />
        <label>Humidity (%): {features.humidity.toFixed(2)}</label>
        <input
          type="range"
          name="humidity"
          min="0"
          max="100"
          step="0.1"
          value={features.humidity}
          onChange={handleInputChange}
        />
        <label className="block text-sm font-medium text-gray-700">pH: {features.ph.toFixed(2)}</label>
        <input
          type="range"
          name="ph"
          min="0"
          max="14"
          step="0.1"
          value={features.ph}
          onChange={handleInputChange}
        />
        <label>Rainfall (mm): {features.rainfall.toFixed(2)}</label>
        <input
          type="range"
          name="rainfall"
          min="0"
          max="500"
          step="0.1"
          value={features.rainfall}
          onChange={handleInputChange}
        />
      </div>
      <button onClick={handlePredict}>Predict</button>
      {prediction && (
        <p>
          Recommended Crop: <strong>{prediction}</strong> (
          {cropMap[prediction] || 'No Telugu name available'})
        </p>
      )}
    </div>
  );
};

export default Crop;