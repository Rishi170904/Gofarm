import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// Define the type for the data
interface ChartData {
  Month: string;
  Profit: number;
}

// Define the props for the component
interface MonthlyProfitChartProps {
  data: ChartData[];
}

const MonthlyProfitChart: React.FC<MonthlyProfitChartProps> = ({ data }) => {
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
      <LineChart width={chartWidth} height={chartHeight} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Profit" stroke="#8884d8" />
      </LineChart>
    </div>
  );
};

export default MonthlyProfitChart;