
import React from 'react';
import { Calendar, Droplets, FlaskRound as Flask, Leaf, Plane as Plant, Sprout } from 'lucide-react';
import WeatherInfo from './WeatherInfo';
import GrowthAnalytics from './GrowthAnalytics';
import TaskManager from './TaskManager';
import PestControl from './PestControl';

interface CropInfo {
  name: string;
  plantedDate: string;
  soilFertility: number;
  fertilizers: string[];
  moistureLevel: number;
  growthStage: string;
}

const cropData: CropInfo = {
  name: "Wheat",
  plantedDate: "2024-02-15",
  soilFertility: 85,
  fertilizers: ["NPK 20-20-20", "Organic Compost", "Micronutrient Mix"],
  moistureLevel: 72,
  growthStage: "Vegetative"
};

function FarmerDashboard() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-2">
        <Plant className="h-8 w-8 text-green-600" />
        Crop Management Dashboard
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {/* Crop Details Card */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center gap-2 mb-4">
            <Sprout className="h-6 w-6 text-green-500" />
            <h2 className="text-xl font-semibold text-gray-700">Crop Details</h2>
          </div>
          <div className="space-y-3">
            <p className="text-gray-600">Crop Type: <span className="font-medium text-gray-800">{cropData.name}</span></p>
            <div className="flex items-center gap-2 text-gray-600">
              <Calendar className="h-5 w-5" />
              <span>Planted: {cropData.plantedDate}</span>
            </div>
            <p className="text-gray-600">Growth Stage: <span className="font-medium text-gray-800">{cropData.growthStage}</span></p>
          </div>
        </div>

        {/* Soil Fertility Card */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center gap-2 mb-4">
            <Leaf className="h-6 w-6 text-green-500" />
            <h2 className="text-xl font-semibold text-gray-700">Soil Health</h2>
          </div>
          <div className="space-y-4">
            <div>
              <p className="text-gray-600 mb-2">Fertility Rate</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-green-600 h-2.5 rounded-full" 
                  style={{ width: `${cropData.soilFertility}%` }}
                ></div>
              </div>
              <p className="text-right text-sm text-gray-600 mt-1">{cropData.soilFertility}%</p>
            </div>
            <div>
              <p className="text-gray-600 mb-2">Moisture Level</p>
              <div className="flex items-center gap-2">
                <Droplets className="h-5 w-5 text-blue-500" />
                <span className="text-gray-800">{cropData.moistureLevel}%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Fertilizers Card */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center gap-2 mb-4">
            <Flask className="h-6 w-6 text-green-500" />
            <h2 className="text-xl font-semibold text-gray-700">Fertilizers Used</h2>
          </div>
          <ul className="space-y-2">
            {cropData.fertilizers.map((fertilizer, index) => (
              <li key={index} className="flex items-center gap-2 text-gray-600">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                {fertilizer}
              </li>
            ))}
          </ul>
        </div>

        {/* Weather Information */}
        <div className="xl:col-span-3">
          <WeatherInfo />
        </div>

        {/* Growth Analytics */}
        <div className="md:col-span-2 xl:col-span-1">
          <GrowthAnalytics />
        </div>

        {/* Task Manager */}
        <div className="xl:col-span-1">
          <TaskManager />
        </div>

        {/* Pest Control */}
        <div className="md:col-span-2 xl:col-span-1">
          <PestControl />
        </div>
      </div>
    </div>
  );
}

export default FarmerDashboard;