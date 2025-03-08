import React, { useState, useEffect, ChangeEvent } from 'react';
import './Voice.css'; // Import CSS file for styling

const Voice: React.FC = () => {
  const [inputText, setInputText] = useState<string>('');
  const [responseText, setResponseText] = useState<string>('');
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [language, setLanguage] = useState<string>(localStorage.getItem('language') || 'te-IN'); // Default language: Telugu

  // Load voices when the component mounts
  useEffect(() => {
    const synth = window.speechSynthesis;
    const handleVoicesChanged = () => {
      const voices = synth.getVoices();
      console.log('Available voices:', voices);
    };

    synth.addEventListener('voiceschanged', handleVoicesChanged);

    // Cleanup
    return () => {
      synth.removeEventListener('voiceschanged', handleVoicesChanged);
    };
  }, []);

  // Handle text input change
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  // Handle speech recognition
  const handleSpeak = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert('Speech recognition is not supported in your browser.');
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = language;

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      const transcript = event.results[0][0].transcript;
      setInputText(transcript);
      handleSubmit(transcript);
    };

    recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
      console.error('Speech recognition error:', event.error);
      alert('Error occurred during speech recognition. Please try again.');
    };

    recognition.start();
  };

  // Handle form submission
  const handleSubmit = async (query: string) => {
    if (!query || query.trim() === '') {
      alert('Please enter or speak a query.');
      return;
    }

    setIsProcessing(true);
    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/gemini', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`HTTP error! status: ${response.status}, message: ${errorData.error || 'Unknown error'}`);
      }

      const data = await response.json();
      setResponseText(data.response);
      speakResponse(data.response);
      setInputText(''); // Clear input field
    } catch (error) {
      console.error('Error:', error);
      setResponseText('Error processing request.');
      speakResponse('Error processing request.');
    } finally {
      setIsProcessing(false);
      setIsLoading(false);
    }
  };

  // Handle speech synthesis
  const speakResponse = (text: string) => {
    if ('speechSynthesis' in window && !isSpeaking) {
      const synth = window.speechSynthesis;
      const utterance = new SpeechSynthesisUtterance(text);

      // Set the language
      utterance.lang = language;

      // Find a voice that matches the selected language
      const voices = synth.getVoices();
      const selectedVoice = voices.find((voice) => voice.lang === language);

      if (selectedVoice) {
        utterance.voice = selectedVoice; // Set the voice
      } else {
        console.warn(`No voice found for language: ${language}. Defaulting to English.`);
        utterance.lang = 'en-US'; // Fallback to English
      }

      utterance.onend = () => {
        setIsSpeaking(false);
      };

      utterance.onerror = (error: SpeechSynthesisErrorEvent) => {
        console.error('Speech synthesis error:', error);
        setIsSpeaking(false);
      };

      synth.speak(utterance);
      setIsSpeaking(true);
    }
  };

  // Handle stopping speech
  const handleStopSpeaking = () => {
    const synth = window.speechSynthesis;
    if (synth.speaking) {
      synth.cancel(); // Stop speech immediately
      setIsSpeaking(false);
    }
  };

  // Handle language change
  const handleLanguageChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = event.target.value;
    setLanguage(selectedLanguage);
    localStorage.setItem('language', selectedLanguage);
  };

  return (
    <div className="app">
      <div className="language-selector">
        <label>Select Language: </label>
        <select value={language} onChange={handleLanguageChange}>
          <option value="en-US">English (US)</option>
          <option value="te-IN">Telugu (India)</option>
          <option value="hi-IN">Hindi (India)</option>
          <option value="es-ES">Spanish (Spain)</option>
          <option value="fr-FR">French (France)</option>
          <option value="de-DE">German (Germany)</option>
          <option value="zh-CN">Chinese (China)</option>
          <option value="ja-JP">Japanese (Japan)</option>
        </select>
      </div>
      <div className="input-section">
        <button onClick={handleSpeak} disabled={isSpeaking || isProcessing}>
          Speak
        </button>
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Type or speak your query..."
        />
        <button onClick={() => handleSubmit(inputText)} disabled={isProcessing}>
          Submit
        </button>
        <button onClick={handleStopSpeaking} disabled={!isSpeaking}>
          Stop
        </button>
      </div>
      <div className="response-section">
        <h2>Response:</h2>
        {isLoading ? (
          <div className="loading">Loading...</div>
        ) : (
          <div className="response-text">
            {responseText.split('\n').map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Voice;