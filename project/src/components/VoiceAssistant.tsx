import React, { useState, useEffect, useCallback } from 'react';
import { Mic, MicOff, Volume2 } from 'lucide-react';

const VoiceAssistant = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [response, setResponse] = useState('');
  const [recognition, setRecognition] = useState<SpeechRecognition | null>(null);

  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
      const recognitionInstance = new SpeechRecognition();
      recognitionInstance.continuous = true;
      recognitionInstance.interimResults = true;

      recognitionInstance.onresult = (event) => {
        const current = event.resultIndex;
        const transcript = event.results[current][0].transcript;
        setTranscript(transcript);
      };

      recognitionInstance.onend = () => {
        if (isListening) {
          recognitionInstance.start();
        }
      };

      setRecognition(recognitionInstance);
    }
  }, [isListening]);

  const speak = useCallback((text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  }, []);

  const handleListen = useCallback(() => {
    if (!recognition) return;

    if (!isListening) {
      recognition.start();
      setTranscript('');
    } else {
      recognition.stop();
      handleQuery(transcript);
    }
    setIsListening(!isListening);
  }, [isListening, recognition, transcript]);

  const getFarmingResponse = (query: string): string => {
    const normalizedQuery = query.toLowerCase();
    
    // Weather and planting conditions
    if (normalizedQuery.includes('weather') || normalizedQuery.includes('plant')) {
      return "Based on current conditions, the temperature is 24°C with 65% humidity. It's an ideal time for planting wheat, tomatoes, or leafy greens. The soil moisture levels are optimal for seed germination.";
    }
    
    // Pest control
    if (normalizedQuery.includes('pest') || normalizedQuery.includes('insect')) {
      return "For organic pest control, consider using neem oil or introducing beneficial insects like ladybugs. For your current crop, a mixture of garlic and chili spray would be effective against common pests.";
    }
    
    // Soil health
    if (normalizedQuery.includes('soil') || normalizedQuery.includes('fertilizer')) {
      return "Your soil's current pH is 6.8, which is ideal for most crops. To improve soil health, add compost and maintain proper crop rotation. Consider using cover crops like clover during the off-season.";
    }
    
    // Market prices
    if (normalizedQuery.includes('price') || normalizedQuery.includes('market')) {
      return "Current market prices show wheat at $8.50 per bushel, tomatoes at $2.75 per pound, and corn at $6.20 per bushel. Prices are trending upward compared to last week.";
    }
    
    // Irrigation
    if (normalizedQuery.includes('water') || normalizedQuery.includes('irrigation')) {
      return "Based on soil moisture sensors, your fields require irrigation. Recommended schedule: 30 minutes in the early morning for optimal water absorption. Current soil moisture level is at 65%.";
    }
    
    // Crop health
    if (normalizedQuery.includes('disease') || normalizedQuery.includes('health')) {
      return "No significant disease pressure detected in your crops. Continue monitoring for early blight in tomatoes. Maintain good air circulation and consider applying organic fungicides preventatively.";
    }
    
    // Equipment
    if (normalizedQuery.includes('equipment') || normalizedQuery.includes('machinery')) {
      return "Your tractor's next maintenance is due in 50 hours. The irrigation system is functioning optimally. Consider scheduling a general equipment inspection before the harvest season.";
    }
    
    // Default response for unrecognized queries
    return "I can help you with information about weather conditions, planting times, pest control, soil health, market prices, irrigation, crop health, and equipment maintenance. What would you like to know about?";
  };

  const handleQuery = async (query: string) => {
    try {
      const farmingResponse = getFarmingResponse(query);
      setResponse(farmingResponse);
      speak(farmingResponse);
    } catch (error) {
      console.error('Error processing query:', error);
      const errorMessage = "Sorry, I couldn't process your request at the moment. Please try again.";
      setResponse(errorMessage);
      speak(errorMessage);
    }
  };

  if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <p className="text-red-500">
          Browser doesn't support speech recognition. Please try using Chrome.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-gray-800">Farming Assistant</h2>
        <button
          onClick={handleListen}
          className={`p-3 rounded-full ${
            isListening ? 'bg-red-500' : 'bg-green-500'
          } text-white hover:opacity-90 transition-opacity`}
        >
          {isListening ? <MicOff size={24} /> : <Mic size={24} />}
        </button>
      </div>
      
      <div className="mb-4">
        <p className="text-gray-600">You said:</p>
        <p className="text-gray-800 font-medium min-h-[24px]">{transcript || 'Waiting for voice input...'}</p>
      </div>

      {response && (
        <div className="mt-4">
          <div className="flex items-center gap-2 text-gray-600">
            <Volume2 size={20} />
            <p>Assistant's Response:</p>
          </div>
          <p className="text-gray-800 mt-2">{response}</p>
        </div>
      )}
    </div>
  );
};

export default VoiceAssistant;