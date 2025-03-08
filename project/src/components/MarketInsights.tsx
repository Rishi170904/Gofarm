import React, { useState } from 'react';
import ProfitByCropChart from './ProfitByCropChart';
import YieldVsProfitChart from './YieldVsProfitChart';
import CropDistributionChart from './CropDistributionChart';
import MonthlyProfitChart from './MonthlyProfitChart';

// Define the type for the dataset
interface CropData {
  Crop: string;
  "Soil Type": string;
  "Rainfall (mm)": number;
  "Temperature (°C)": number;
  "Production Cost (USD/Hectare)": number;
  "Market Price (USD/Tonne)": number;
  "Yield (Tonnes/Hectare)": number;
  "Profit (USD/Hectare)": number;
  Month: string;
  Season: string;
}

// Sample dataset (replace with your actual dataset)
const dataset: CropData[] = [
  {
    Crop: "Wheat",
    "Soil Type": "Loamy",
    "Rainfall (mm)": 30.0,
    "Temperature (°C)": 5.0,
    "Production Cost (USD/Hectare)": 800.0,
    "Market Price (USD/Tonne)": 250.0,
    "Yield (Tonnes/Hectare)": 4.2,
    "Profit (USD/Hectare)": 250.0,
    Month: "January",
    Season: "Winter"
  },
    {
      "Crop": "Wheat",
      "Soil Type": "Loamy",
      "Rainfall (mm)": 25.0,
      "Temperature (°C)": 6.0,
      "Production Cost (USD/Hectare)": 800.0,
      "Market Price (USD/Tonne)": 250.0,
      "Yield (Tonnes/Hectare)": 4.5,
      "Profit (USD/Hectare)": 450.0,
      "Month": "February",
      "Season": "Winter"
    },
    {
      "Crop": "Wheat",
      "Soil Type": "Loamy",
      "Rainfall (mm)": 40.0,
      "Temperature (°C)": 10.0,
      "Production Cost (USD/Hectare)": 800.0,
      "Market Price (USD/Tonne)": 250.0,
      "Yield (Tonnes/Hectare)": 5.0,
      "Profit (USD/Hectare)": 650.0,
      "Month": "March",
      "Season": "Spring"
    },
    {
      "Crop": "Wheat",
      "Soil Type": "Loamy",
      "Rainfall (mm)": 50.0,
      "Temperature (°C)": 15.0,
      "Production Cost (USD/Hectare)": 800.0,
      "Market Price (USD/Tonne)": 250.0,
      "Yield (Tonnes/Hectare)": 4.8,
      "Profit (USD/Hectare)": 420.0,
      "Month": "April",
      "Season": "Spring"
    },
    {
      "Crop": "Wheat",
      "Soil Type": "Loamy",
      "Rainfall (mm)": 70.0,
      "Temperature (°C)": 20.0,
      "Production Cost (USD/Hectare)": 800.0,
      "Market Price (USD/Tonne)": 250.0,
      "Yield (Tonnes/Hectare)": 4.5,
      "Profit (USD/Hectare)": 325.0,
      "Month": "May",
      "Season": "Spring"
    },
    {
      "Crop": "Wheat",
      "Soil Type": "Loamy",
      "Rainfall (mm)": 100.0,
      "Temperature (°C)": 25.0,
      "Production Cost (USD/Hectare)": 800.0,
      "Market Price (USD/Tonne)": 250.0,
      "Yield (Tonnes/Hectare)": 3.0,
      "Profit (USD/Hectare)": -50.0,
      "Month": "June",
      "Season": "Summer"
    },
    {
      "Crop": "Wheat",
      "Soil Type": "Loamy",
      "Rainfall (mm)": 120.0,
      "Temperature (°C)": 30.0,
      "Production Cost (USD/Hectare)": 800.0,
      "Market Price (USD/Tonne)": 250.0,
      "Yield (Tonnes/Hectare)": 2.0,
      "Profit (USD/Hectare)": -300.0,
      "Month": "July",
      "Season": "Summer"
    },
    {
      "Crop": "Wheat",
      "Soil Type": "Loamy",
      "Rainfall (mm)": 90.0,
      "Temperature (°C)": 28.0,
      "Production Cost (USD/Hectare)": 800.0,
      "Market Price (USD/Tonne)": 250.0,
      "Yield (Tonnes/Hectare)": 2.5,
      "Profit (USD/Hectare)": -175.0,
      "Month": "August",
      "Season": "Summer"
    },
    {
      "Crop": "Wheat",
      "Soil Type": "Loamy",
      "Rainfall (mm)": 60.0,
      "Temperature (°C)": 22.0,
      "Production Cost (USD/Hectare)": 800.0,
      "Market Price (USD/Tonne)": 250.0,
      "Yield (Tonnes/Hectare)": 3.5,
      "Profit (USD/Hectare)": 75.0,
      "Month": "September",
      "Season": "Autumn"
    },
    {
      "Crop": "Wheat",
      "Soil Type": "Loamy",
      "Rainfall (mm)": 50.0,
      "Temperature (°C)": 18.0,
      "Production Cost (USD/Hectare)": 800.0,
      "Market Price (USD/Tonne)": 250.0,
      "Yield (Tonnes/Hectare)": 4.0,
      "Profit (USD/Hectare)": 200.0,
      "Month": "October",
      "Season": "Autumn"
    },
    {
      "Crop": "Wheat",
      "Soil Type": "Loamy",
      "Rainfall (mm)": 45.0,
      "Temperature (°C)": 12.0,
      "Production Cost (USD/Hectare)": 800.0,
      "Market Price (USD/Tonne)": 250.0,
      "Yield (Tonnes/Hectare)": 4.2,
      "Profit (USD/Hectare)": 250.0,
      "Month": "November",
      "Season": "Autumn"
    },
    {
      "Crop": "Wheat",
      "Soil Type": "Loamy",
      "Rainfall (mm)": 35.0,
      "Temperature (°C)": 8.0,
      "Production Cost (USD/Hectare)": 800.0,
      "Market Price (USD/Tonne)": 250.0,
      "Yield (Tonnes/Hectare)": 4.0,
      "Profit (USD/Hectare)": 200.0,
      "Month": "December",
      "Season": "Winter"
    },
    {
      "Crop": "Spinach",
      "Soil Type": "Sandy Loam",
      "Rainfall (mm)": 40.0,
      "Temperature (°C)": 6.0,
      "Production Cost (USD/Hectare)": 1200.0,
      "Market Price (USD/Tonne)": 1000.0,
      "Yield (Tonnes/Hectare)": 8.0,
      "Profit (USD/Hectare)": 6800.0,
      "Month": "January",
      "Season": "Winter"
    },
    {
      "Crop": "Spinach",
      "Soil Type": "Sandy Loam",
      "Rainfall (mm)": 35.0,
      "Temperature (°C)": 8.0,
      "Production Cost (USD/Hectare)": 1200.0,
      "Market Price (USD/Tonne)": 1000.0,
      "Yield (Tonnes/Hectare)": 8.5,
      "Profit (USD/Hectare)": 7700.0,
      "Month": "February",
      "Season": "Winter"
    },
    {
      "Crop": "Spinach",
      "Soil Type": "Sandy Loam",
      "Rainfall (mm)": 50.0,
      "Temperature (°C)": 10.0,
      "Production Cost (USD/Hectare)": 1200.0,
      "Market Price (USD/Tonne)": 1000.0,
      "Yield (Tonnes/Hectare)": 9.0,
      "Profit (USD/Hectare)": 7800.0,
      "Month": "March",
      "Season": "Spring"
    },
    {
      "Crop": "Spinach",
      "Soil Type": "Sandy Loam",
      "Rainfall (mm)": 60.0,
      "Temperature (°C)": 15.0,
      "Production Cost (USD/Hectare)": 1200.0,
      "Market Price (USD/Tonne)": 1000.0,
      "Yield (Tonnes/Hectare)": 7.5,
      "Profit (USD/Hectare)": 6300.0,
      "Month": "April",
      "Season": "Spring"
    },
    {
      "Crop": "Spinach",
      "Soil Type": "Sandy Loam",
      "Rainfall (mm)": 70.0,
      "Temperature (°C)": 20.0,
      "Production Cost (USD/Hectare)": 1200.0,
      "Market Price (USD/Tonne)": 1000.0,
      "Yield (Tonnes/Hectare)": 6.0,
      "Profit (USD/Hectare)": 4800.0,
      "Month": "May",
      "Season": "Spring"
    },
    {
      "Crop": "Spinach",
      "Soil Type": "Sandy Loam",
      "Rainfall (mm)": 100.0,
      "Temperature (°C)": 25.0,
      "Production Cost (USD/Hectare)": 1200.0,
      "Market Price (USD/Tonne)": 1000.0,
      "Yield (Tonnes/Hectare)": 4.0,
      "Profit (USD/Hectare)": 2800.0,
      "Month": "June",
      "Season": "Summer"
    },
    {
      "Crop": "Spinach",
      "Soil Type": "Sandy Loam",
      "Rainfall (mm)": 120.0,
      "Temperature (°C)": 30.0,
      "Production Cost (USD/Hectare)": 1200.0,
      "Market Price (USD/Tonne)": 1000.0,
      "Yield (Tonnes/Hectare)": 2.5,
      "Profit (USD/Hectare)": 1300.0,
      "Month": "July",
      "Season": "Summer"
    },
    {
      "Crop": "Spinach",
      "Soil Type": "Sandy Loam",
      "Rainfall (mm)": 90.0,
      "Temperature (°C)": 28.0,
      "Production Cost (USD/Hectare)": 1200.0,
      "Market Price (USD/Tonne)": 1000.0,
      "Yield (Tonnes/Hectare)": 3.0,
      "Profit (USD/Hectare)": 1800.0,
      "Month": "August",
      "Season": "Summer"
    },
    {
      "Crop": "Spinach",
      "Soil Type": "Sandy Loam",
      "Rainfall (mm)": 60.0,
      "Temperature (°C)": 22.0,
      "Production Cost (USD/Hectare)": 1200.0,
      "Market Price (USD/Tonne)": 1000.0,
      "Yield (Tonnes/Hectare)": 5.0,
      "Profit (USD/Hectare)": 3800.0,
      "Month": "September",
      "Season": "Autumn"
    },
    {
      "Crop": "Spinach",
      "Soil Type": "Sandy Loam",
      "Rainfall (mm)": 50.0,
      "Temperature (°C)": 18.0,
      "Production Cost (USD/Hectare)": 1200.0,
      "Market Price (USD/Tonne)": 1000.0,
      "Yield (Tonnes/Hectare)": 6.5,
      "Profit (USD/Hectare)": 5300.0,
      "Month": "October",
      "Season": "Autumn"
    },
    {
      "Crop": "Spinach",
      "Soil Type": "Sandy Loam",
      "Rainfall (mm)": 45.0,
      "Temperature (°C)": 12.0,
      "Production Cost (USD/Hectare)": 1200.0,
      "Market Price (USD/Tonne)": 1000.0,
      "Yield (Tonnes/Hectare)": 7.0,
      "Profit (USD/Hectare)": 5800.0,
      "Month": "November",
      "Season": "Autumn"
    },
    {
      "Crop": "Spinach",
      "Soil Type": "Sandy Loam",
      "Rainfall (mm)": 35.0,
      "Temperature (°C)": 8.0,
      "Production Cost (USD/Hectare)": 1200.0,
      "Market Price (USD/Tonne)": 1000.0,
      "Yield (Tonnes/Hectare)": 8.0,
      "Profit (USD/Hectare)": 6800.0,
      "Month": "December",
      "Season": "Winter"
    },
    {
      "Crop": "Tomato",
      "Soil Type": "Clay",
      "Rainfall (mm)": 50.0,
      "Temperature (°C)": 10.0,
      "Production Cost (USD/Hectare)": 1500.0,
      "Market Price (USD/Tonne)": 800.0,
      "Yield (Tonnes/Hectare)": 12.0,
      "Profit (USD/Hectare)": 8100.0,
      "Month": "January",
      "Season": "Winter"
    },
    {
      "Crop": "Tomato",
      "Soil Type": "Clay",
      "Rainfall (mm)": 60.0,
      "Temperature (°C)": 12.0,
      "Production Cost (USD/Hectare)": 1500.0,
      "Market Price (USD/Tonne)": 800.0,
      "Yield (Tonnes/Hectare)": 13.0,
      "Profit (USD/Hectare)": 9100.0,
      "Month": "February",
      "Season": "Winter"
    },
    {
      "Crop": "Tomato",
      "Soil Type": "Clay",
      "Rainfall (mm)": 70.0,
      "Temperature (°C)": 15.0,
      "Production Cost (USD/Hectare)": 1500.0,
      "Market Price (USD/Tonne)": 800.0,
      "Yield (Tonnes/Hectare)": 14.0,
      "Profit (USD/Hectare)": 10100.0,
      "Month": "March",
      "Season": "Spring"
    },
    {
      "Crop": "Tomato",
      "Soil Type": "Clay",
      "Rainfall (mm)": 80.0,
      "Temperature (°C)": 20.0,
      "Production Cost (USD/Hectare)": 1500.0,
      "Market Price (USD/Tonne)": 800.0,
      "Yield (Tonnes/Hectare)": 15.0,
      "Profit (USD/Hectare)": 10500.0,
      "Month": "April",
      "Season": "Spring"
    },
    {
      "Crop": "Tomato",
      "Soil Type": "Clay",
      "Rainfall (mm)": 90.0,
      "Temperature (°C)": 25.0,
      "Production Cost (USD/Hectare)": 1500.0,
      "Market Price (USD/Tonne)": 800.0,
      "Yield (Tonnes/Hectare)": 16.0,
      "Profit (USD/Hectare)": 11300.0,
      "Month": "May",
      "Season": "Spring"
    },
    {
      "Crop": "Tomato",
      "Soil Type": "Clay",
      "Rainfall (mm)": 100.0,
      "Temperature (°C)": 30.0,
      "Production Cost (USD/Hectare)": 1500.0,
      "Market Price (USD/Tonne)": 800.0,
      "Yield (Tonnes/Hectare)": 17.0,
      "Profit (USD/Hectare)": 12100.0,
      "Month": "June",
      "Season": "Summer"
    },
    {
      "Crop": "Tomato",
      "Soil Type": "Clay",
      "Rainfall (mm)": 120.0,
      "Temperature (°C)": 35.0,
      "Production Cost (USD/Hectare)": 1500.0,
      "Market Price (USD/Tonne)": 800.0,
      "Yield (Tonnes/Hectare)": 18.0,
      "Profit (USD/Hectare)": 12900.0,
      "Month": "July",
      "Season": "Summer"
    },
    {
      "Crop": "Tomato",
      "Soil Type": "Clay",
      "Rainfall (mm)": 110.0,
      "Temperature (°C)": 32.0,
      "Production Cost (USD/Hectare)": 1500.0,
      "Market Price (USD/Tonne)": 800.0,
      "Yield (Tonnes/Hectare)": 17.5,
      "Profit (USD/Hectare)": 12500.0,
      "Month": "August",
      "Season": "Summer",
    }

];

// Get unique crop names for the dropdown
const cropNames = [...new Set(dataset.map((item) => item.Crop))];

const MarketInsights: React.FC = () => {
  const [selectedCrop, setSelectedCrop] = useState<string>('Wheat'); // Default selected crop

  // Filter dataset based on selected crop
  const filteredData = dataset.filter((item) => item.Crop === selectedCrop);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-6">GoFarm Market Insights</h1>

      {/* Dropdown to select crop */}
      <div className="flex justify-center mb-8">
        <label htmlFor="crop-select" className="mr-2 text-lg font-semibold">
          Select Crop:
        </label>
        <select
          id="crop-select"
          value={selectedCrop}
          onChange={(e) => setSelectedCrop(e.target.value)}
          className="p-2 border border-gray-300 rounded-md shadow-sm"
        >
          {cropNames.map((crop) => (
            <option key={crop} value={crop}>
              {crop}
            </option>
          ))}
        </select>
      </div>

      {/* Charts */}
      <div className="space-y-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Profit by Crop</h2>
          <ProfitByCropChart data={filteredData} />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Monthly Profit for {selectedCrop}</h2>
          <MonthlyProfitChart data={filteredData} />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Crop Distribution by Profit</h2>
          <CropDistributionChart data={filteredData} />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Yield vs. Profit for {selectedCrop}</h2>
          <YieldVsProfitChart data={filteredData} />
        </div>
      </div>
    </div>
  );
};

export default MarketInsights;