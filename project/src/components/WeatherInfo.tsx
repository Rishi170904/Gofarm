
import React from 'react';
import { Cloud, Sun, Thermometer, Wind } from 'lucide-react';

interface WeatherData {
  temperature: number;
  humidity: number;
  windSpeed: number;
  condition: string;
}

const weatherData: WeatherData = {
  temperature: 24,
  humidity: 65,
  windSpeed: 12,
  condition: "Partly Cloudy"
};

function WeatherInfo() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-700 mb-4 flex items-center gap-2">
        <Sun className="h-6 w-6 text-yellow-500" />
        Weather Conditions
      </h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Thermometer className="h-5 w-5 text-red-500" />
            <span className="text-gray-600">Temperature</span>
          </div>
          <p className="text-2xl font-semibold text-gray-800">{weatherData.temperature}°C</p>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Cloud className="h-5 w-5 text-blue-500" />
            <span className="text-gray-600">Humidity</span>
          </div>
          <p className="text-2xl font-semibold text-gray-800">{weatherData.humidity}%</p>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Wind className="h-5 w-5 text-gray-500" />
            <span className="text-gray-600">Wind Speed</span>
          </div>
          <p className="text-2xl font-semibold text-gray-800">{weatherData.windSpeed} km/h</p>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Sun className="h-5 w-5 text-yellow-500" />
            <span className="text-gray-600">Condition</span>
          </div>
          <p className="text-lg font-medium text-gray-800">{weatherData.condition}</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherInfo;