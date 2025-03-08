import React, { useState, useEffect } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// Define the type for the data
interface ChartData {
  yield: number;
  profit: number;
  crop: string;
}

// Sample data for yield vs. profit
const data: ChartData[] = [
  { yield: 4.2, profit: 250, crop: 'Wheat' },
  { yield: 8, profit: 6800, crop: 'Spinach' },
  { yield: 12, profit: 8100, crop: 'Tomato' },
  { yield: 10, profit: 4600, crop: 'Carrot' },
  { yield: 15, profit: 6300, crop: 'Cabbage' },
  { yield: 4.8, profit: 420, crop: 'Barley' },
  { yield: 6, profit: 980, crop: 'Corn' },
  { yield: 5.8, profit: 840, crop: 'Soybean' },
  { yield: 4.7, profit: 206, crop: 'Potato' },
  { yield: 6.5, profit: 7150, crop: 'Kale' },
  { yield: 7, profit: 9800, crop: 'Broccoli' },
  { yield: 9.5, profit: 9200, crop: 'Lettuce' },
];

const YieldVsProfitChart: React.FC = () => {
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
      <ScatterChart width={chartWidth} height={chartHeight}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" dataKey="yield" name="Yield (Tonnes/Hectare)" />
        <YAxis type="number" dataKey="profit" name="Profit (USD/Hectare)" />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Legend />
        <Scatter name="Crops" data={data} fill="#8884d8" />
      </ScatterChart>
    </div>
  );
};

export default YieldVsProfitChart;