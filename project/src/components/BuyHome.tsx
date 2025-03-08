import React from 'react';
import { Cpu, CloudRain, LineChart, Sprout, Users, Leaf } from 'lucide-react'; // Import icons from lucide-react

// FeatureCard Component
const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
    <div className="flex justify-center">
      <Icon className="h-12 w-12 text-green-600 mb-4" />
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

function BuyHome() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold text-white mb-6">
              Smart Farming for a Better Tomorrow
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Transform your agricultural practices with cutting-edge technology. Monitor, analyze, and optimize your farm's performance in real-time.
            </p>
            <button className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
            Smart Solutions for Modern Agriculture
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
            Discover how our integrated technology solutions can revolutionize your farming practices and increase productivity.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={Cpu}
              title="Smart Monitoring"
              description="Real-time monitoring of soil conditions, crop health, and environmental factors using IoT sensors."
            />
            <FeatureCard 
              icon={CloudRain}
              title="Precision Irrigation"
              description="Automated irrigation systems that optimize water usage based on weather conditions and soil moisture."
            />
            <FeatureCard 
              icon={LineChart}
              title="Data Analytics"
              description="Advanced analytics and insights to make data-driven decisions for better crop yields."
            />
            <FeatureCard 
              icon={Sprout}
              title="Crop Management"
              description="Comprehensive crop management tools for planning, tracking, and optimizing growth cycles."
            />
            <FeatureCard 
              icon={Users}
              title="Expert Support"
              description="Connect with agricultural experts and get personalized guidance for your farm."
            />
            <FeatureCard 
              icon={Leaf}
              title="Sustainable Farming"
              description="Implement eco-friendly farming practices while maintaining high productivity."
            />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-green-900 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Farm?
          </h2>
          <p className="text-green-100 mb-8 max-w-2xl mx-auto">
            Join thousands of farmers who are already using GoFarm to revolutionize their agricultural practices.
          </p>
          <button className="bg-white text-green-900 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-50 transition-colors">
            Start Your Free Trial
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Sprout className="h-8 w-8 text-green-500 mr-2" />
              <span className="text-2xl font-bold text-white">GoFarm</span>
            </div>
            <div className="text-sm">
              © 2024 GoFarm. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default BuyHome;