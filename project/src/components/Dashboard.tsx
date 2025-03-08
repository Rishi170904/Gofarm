import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar } from 'recharts';
import { Thermometer, Droplets, TrendingUp, MapPin } from 'lucide-react';

const mockData = {
  earnings: [
    { month: 'Jan', amount: 2400 },
    { month: 'Feb', amount: 1398 },
    { month: 'Mar', amount: 9800 },
    { month: 'Apr', amount: 3908 },
    { month: 'May', amount: 4800 },
    { month: 'Jun', amount: 3800 },
  ],
  marketTrends: [
    { day: 'Mon', price: 340 },
    { day: 'Tue', price: 345 },
    { day: 'Wed', price: 338 },
    { day: 'Thu', price: 350 },
    { day: 'Fri', price: 355 },
  ]
};

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Environmental Conditions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex items-center gap-3 bg-blue-50 p-4 rounded-lg">
            <Thermometer className="text-red-500" />
            <div>
              <p className="text-sm text-gray-600">Temperature</p>
              <p className="text-xl font-bold">24°C</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-blue-50 p-4 rounded-lg">
            <Droplets className="text-blue-500" />
            <div>
              <p className="text-sm text-gray-600">Moisture</p>
              <p className="text-xl font-bold">65%</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-blue-50 p-4 rounded-lg">
            <MapPin className="text-green-500" />
            <div>
              <p className="text-sm text-gray-600">Location</p>
              <p className="text-xl font-bold">Farm 1</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-blue-50 p-4 rounded-lg">
            <TrendingUp className="text-purple-500" />
            <div>
              <p className="text-sm text-gray-600">Market Distance</p>
              <p className="text-xl font-bold">5.2 km</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Monthly Earnings</h2>
        <div className="w-full overflow-x-auto">
          <BarChart width={400} height={300} data={mockData.earnings} className="w-full">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="amount" fill="#4F46E5" />
          </BarChart>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg md:col-span-2">
        <h2 className="text-2xl font-bold mb-4">Market Price Trends</h2>
        <div className="w-full overflow-x-auto">
          <LineChart width={700} height={300} data={mockData.marketTrends} className="w-full">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="price" stroke="#10B981" />
          </LineChart>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
