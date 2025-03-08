import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

interface ChartData {
  name: string;
  value: number;
}

interface Props {
  data: ChartData[];
}

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

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF'];

const CropDistributionChart: React.FC<Props> = ({ data }) => {
  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        labelLine={false}
        outerRadius={150}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default CropDistributionChart;