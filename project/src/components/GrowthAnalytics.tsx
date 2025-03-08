
import React from 'react';
import { LineChart, Ruler, Sprout } from 'lucide-react';

interface GrowthData {
  height: number;
  expectedHeight: number;
  stage: string;
  daysToHarvest: number;
  healthScore: number;
}

const growthData: GrowthData = {
  height: 45,
  expectedHeight: 50,
  stage: "Vegetative Growth",
  daysToHarvest: 65,
  healthScore: 92
};

function GrowthAnalytics() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-700 mb-4 flex items-center gap-2">
        <LineChart className="h-6 w-6 text-green-500" />
        Growth Analytics
      </h2>
      <div className="space-y-4">
        <div>
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-2">
              <Ruler className="h-5 w-5 text-blue-500" />
              <span className="text-gray-600">Current Height</span>
            </div>
            <span className="text-gray-800 font-semibold">{growthData.height} cm</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-500 h-2 rounded-full" 
              style={{ width: `${(growthData.height / growthData.expectedHeight) * 100}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-500 mt-1">Expected: {growthData.expectedHeight} cm</p>
        </div>

        <div className="flex items-center justify-between py-2 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <Sprout className="h-5 w-5 text-green-500" />
            <span className="text-gray-600">Growth Stage</span>
          </div>
          <span className="text-gray-800 font-medium">{growthData.stage}</span>
        </div>

        <div className="flex items-center justify-between py-2 border-b border-gray-100">
          <span className="text-gray-600">Days to Harvest</span>
          <span className="text-gray-800 font-medium">{growthData.daysToHarvest} days</span>
        </div>

        <div>
          <p className="text-gray-600 mb-2">Plant Health Score</p>
          <div className="flex items-center gap-3">
            <div className="flex-1 bg-gray-200 rounded-full h-2">
              <div 
                className="bg-green-500 h-2 rounded-full" 
                style={{ width: `${growthData.healthScore}%` }}
              ></div>
            </div>
            <span className="text-gray-800 font-semibold">{growthData.healthScore}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GrowthAnalytics;