import React, { useState } from 'react';
import { cropProducts } from '../data/cropProducts';
import { crops } from '../data/crops';
import { Mic, MicOff, Volume2, VolumeX } from 'lucide-react';
import { SoilParameters } from '../types';
import 'regenerator-runtime/runtime';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import Voice from './voice';
import Crop from './Crop';

export function Home() {
  // const [params, setParams] = useState<SoilParameters>({
  //   soil_ph: 7.0,
  //   soil_moisture: 70,
  //   humidity: 70,
  //   rainfall: 100,
  //   soil_type: 'loamy',
  //   nitrogen: 100,
  //   potassium: 50,
  //   phosphorus: 25
  // });

  // const [recommendedCrop, setRecommendedCrop] = useState<string | null>(null);
  // const [isSpeaking, setIsSpeaking] = useState(false);
  // const { transcript, listening, resetTranscript } = useSpeechRecognition();

  // const soilTypes = ["clayey", "loamy", "sandy loam", "clay loam", "black soil", "red soil"];

  // const handleParameterChange = (name: keyof SoilParameters, value: number | string) => {
  //   setParams(prev => ({ ...prev, [name]: value }));
  // };

  // const speak = (text: string) => {
  //   const utterance = new SpeechSynthesisUtterance(text);
  //   utterance.lang = 'te-IN';
  //   utterance.onstart = () => setIsSpeaking(true);
  //   utterance.onend = () => setIsSpeaking(false);
  //   window.speechSynthesis.speak(utterance);
  // };

  // const findSuitableCrop = () => {
  //   let bestMatch = null;
  //   let highestScore = -1;

  //   crops.forEach(crop => {
  //     let score = 0;
  //     const conditions = crop.conditions;

  //     if (params.soil_ph >= conditions.soil_ph.min && params.soil_ph <= conditions.soil_ph.max) score++;
  //     if (params.soil_moisture >= conditions.soil_moisture.min && params.soil_moisture <= conditions.soil_moisture.max) score++;
  //     if (params.humidity >= conditions.humidity.min && params.humidity <= conditions.humidity.max) score++;
  //     if (params.rainfall >= conditions.rainfall.min && params.rainfall <= conditions.rainfall.max) score++;
  //     if (params.nitrogen >= conditions.nitrogen.min && params.nitrogen <= conditions.nitrogen.max) score++;
  //     if (params.potassium >= conditions.potassium.min && params.potassium <= conditions.potassium.max) score++;
  //     if (params.phosphorus >= conditions.phosphorus.min && params.phosphorus <= conditions.phosphorus.max) score++;
  //     if (conditions.soil_types.includes(params.soil_type)) score++;

  //     if (score > highestScore) {
  //       highestScore = score;
  //       bestMatch = crop.name;
  //     }
  //   });

  //   setRecommendedCrop(bestMatch);
  //   if (bestMatch) {
  //     const crop = crops.find(c => c.name === bestMatch);
  //     if (crop) {
  //       speak(`మీ భూమికి అనువైన పంట ${crop.name}. దీని కోసం అవసరమైన ఉత్పత్తులు: ${cropProducts[crop.name].map(p => p.name).join(', ')}`);
  //     }
  //   }
  // };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6">
      <Voice></Voice>
      {/* <div className="flex justify-between items-center mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-green-800">Crop Recommendation System</h1>
        <div className="flex gap-2 sm:gap-4">
          <button
            onClick={() => SpeechRecognition.startListening({ language: 'te-IN' })}
            className={`p-2 sm:p-3 rounded-full ${listening ? 'bg-red-100' : 'bg-green-100'} transition-colors duration-200`}
          >
            {listening ? <MicOff className="h-4 w-4 sm:h-6 sm:w-6 text-red-600" /> : <Mic className="h-4 w-4 sm:h-6 sm:w-6 text-green-600" />}
          </button>
          <button
            onClick={() => speak('నమస్కారం, నేను మీ సహాయానికి ఉన్నాను')}
            className={`p-2 sm:p-3 rounded-full ${isSpeaking ? 'bg-blue-100' : 'bg-gray-100'} transition-colors duration-200`}
            disabled={isSpeaking}
          >
            {isSpeaking ? <Volume2 className="h-4 w-4 sm:h-6 sm:w-6 text-blue-600" /> : <VolumeX className="h-4 w-4 sm:h-6 sm:w-6 text-gray-600" />}
          </button>
        </div>
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Soil pH (0-14)</label>
              <input
                type="range"
                min="0"
                max="14"
                step="0.1"
                value={params.soil_ph}
                onChange={(e) => handleParameterChange('soil_ph', parseFloat(e.target.value))}
                className="w-full"
              />
              <span className="text-sm text-gray-500">{params.soil_ph}</span>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Soil Moisture (%)</label>
              <input
                type="range"
                min="0"
                max="100"
                value={params.soil_moisture}
                onChange={(e) => handleParameterChange('soil_moisture', parseInt(e.target.value))}
                className="w-full"
              />
              <span className="text-sm text-gray-500">{params.soil_moisture}%</span>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Humidity (%)</label>
              <input
                type="range"
                min="0"
                max="100"
                value={params.humidity}
                onChange={(e) => handleParameterChange('humidity', parseInt(e.target.value))}
                className="w-full"
              />
              <span className="text-sm text-gray-500">{params.humidity}%</span>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Rainfall (mm)</label>
              <input
                type="range"
                min="0"
                max="300"
                value={params.rainfall}
                onChange={(e) => handleParameterChange('rainfall', parseInt(e.target.value))}
                className="w-full"
              />
              <span className="text-sm text-gray-500">{params.rainfall} mm</span>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Soil Type</label>
              <select
                value={params.soil_type}
                onChange={(e) => handleParameterChange('soil_type', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
              >
                {soilTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Nitrogen (kg/ha)</label>
              <input
                type="range"
                min="0"
                max="200"
                value={params.nitrogen}
                onChange={(e) => handleParameterChange('nitrogen', parseInt(e.target.value))}
                className="w-full"
              />
              <span className="text-sm text-gray-500">{params.nitrogen} kg/ha</span>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Potassium (kg/ha)</label>
              <input
                type="range"
                min="0"
                max="100"
                value={params.potassium}
                onChange={(e) => handleParameterChange('potassium', parseInt(e.target.value))}
                className="w-full"
              />
              <span className="text-sm text-gray-500">{params.potassium} kg/ha</span>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Phosphorus (kg/ha)</label>
              <input
                type="range"
                min="0"
                max="50"
                value={params.phosphorus}
                onChange={(e) => handleParameterChange('phosphorus', parseInt(e.target.value))}
                className="w-full"
              />
              <span className="text-sm text-gray-500">{params.phosphorus} kg/ha</span>
            </div>
          </div>
        </div>
        <button
          onClick={findSuitableCrop}
          className="w-full mt-6 bg-green-600 text-white py-2 sm:py-3 rounded-md hover:bg-green-700 transition-colors text-sm sm:text-base"
        >
          Get Crop Recommendation
        </button>
        {recommendedCrop && (
          <div className="mt-6 space-y-4 sm:space-y-6">
            <div className="p-4 bg-green-50 rounded-lg">
              <h2 className="text-lg sm:text-xl font-semibold text-green-800 mb-2">Recommended Crop</h2>
              <p className="text-base sm:text-lg text-green-700">{recommendedCrop}</p>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg">
              <h2 className="text-lg sm:text-xl font-semibold text-blue-800 mb-4">Required Products</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {cropProducts[recommendedCrop].map((product, index) => (
                  <div key={index} className="bg-white p-3 sm:p-4 rounded-lg shadow">
                    <h3 className="font-semibold text-sm sm:text-base text-gray-800">{product.name}</h3>
                    <p className="text-sm text-gray-600">₹{product.price} per {product.unit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Voice Assistant</h2>
          <p className="text-sm sm:text-base text-gray-600">{transcript || 'Speak in Telugu for assistance...'}</p>
        </div>
      </div> */}
      <Crop></Crop>
    </div>
  );
}