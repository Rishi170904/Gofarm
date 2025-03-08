import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// Define the type for the data
interface ChartData {
  name: string;
  Profit: number;
}

// Sample data (you can replace this with actual data processing)
const data: ChartData[] = [
  { name: 'Wheat', Profit: 250 },
  { name: 'Spinach', Profit: 6800 },
  { name: 'Tomato', Profit: 8100 },
  { name: 'Carrot', Profit: 4600 },
  { name: 'Cabbage', Profit: 6300 },
  { name: 'Barley', Profit: 420 },
  { name: 'Corn', Profit: 980 },
  { name: 'Soybean', Profit: 840 },
  { name: 'Potato', Profit: 206 },
  { name: 'Kale', Profit: 7150 },
  { name: 'Broccoli', Profit: 9800 },
  { name: 'Lettuce', Profit: 9200 },
];

const ProfitByCropChart: React.FC = () => {
  // State to store chart dimensions
  const [chartWidth, setChartWidth] = useState<number>(window.innerWidth * 0.8); // 80% of window width
  const [chartHeight, setChartHeight] = useState<number>(window.innerHeight * 0.5); // 50% of window height

  // Function to update chart dimensions on window resize
  const updateDimensions = () => {
    setChartWidth(window.innerWidth * 0.8);
    setChartHeight(window.innerHeight * 0.5);
  };

  // Add event listener for window resize
  useEffect(() => {
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return (
    <div className="w-full overflow-hidden p-4">
      <BarChart width={chartWidth} height={chartHeight} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar className="mt-2" dataKey="Profit" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default ProfitByCropChart;