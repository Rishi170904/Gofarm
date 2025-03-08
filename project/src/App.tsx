import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useAuth } from './components/Auth'; // Import useAuth
import { LoginRegister } from './components/LoginRegister';
import FarmerDashboard from './components/FarmerDashboard';
import { BuyerDashboard } from './components/BuyerDashboard';
import { Home } from './components/Home';
import { Shop } from './components/Shop';
import { SellCrops } from './components/SellCrops';
import  MarketInsights  from './components/MarketInsights';
import { Marketplace } from './components/Marketplace';
import { Cart } from './components/Cart';

import { ShoppingCart, Home as HomeIcon, TrendingUp, Store, ShoppingBag, Menu } from 'lucide-react';
import BuyHome from './components/BuyHome';

function App() {
  const { user, logout } = useAuth(); // Destructure user and logout from useAuth
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu toggle

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {user ? ( // Check if user is logged in
          <>
            {/* Navbar */}
            <nav className="bg-green-600 text-white p-4">
              <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold">🌾GoFarm</Link>
                <button
                  className="md:hidden focus:outline-none"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <Menu size={24} />
                </button>
                <div className={`md:flex gap-6 ${isOpen ? 'block' : 'hidden'} md:block absolute md:relative bg-green-600 w-full md:w-auto left-0 top-16 md:top-0 md:bg-transparent p-4 md:p-0`}>
                  <Link to="/" className="flex items-center gap-2 hover:text-green-200">
                    <HomeIcon size={20} />
                    <span>Home</span>
                  </Link>
                  {user.role === 'farmer' ? (
                    <>
                      <Link to="/sell" className="flex items-center gap-2 hover:text-green-200">
                        <ShoppingCart size={20} />
                        <span>Sell Crops</span>
                      </Link>
                      <Link to="/shop" className="flex items-center gap-2 hover:text-green-200">
                        <Store size={20} />
                        <span>Shop</span>
                      </Link>
                      <Link to="/dashboard" className="flex items-center gap-2 hover:text-green-200">
                        <Store size={20} />
                        <span>DashBoard</span>
                      </Link>
                      <Link to="/market" className="flex items-center gap-2 hover:text-green-200">
                        <TrendingUp size={20} />
                        <span>Market Insights</span>
                      </Link>
                      <Link to="/cart" className="flex items-center gap-2 hover:text-green-200">
                        <ShoppingCart size={20} />
                        <span>Cart</span>
                      </Link>
                    </>
                  ) : (
                    <>

                      <Link to="/marketplace" className="flex items-center gap-2 hover:text-green-200">
                        <ShoppingBag size={20} />
                        <span>Buy Crops</span>
                      </Link>
                      <Link to="/cart" className="flex items-center gap-2 hover:text-green-200">
                        <ShoppingCart size={20} />
                        <span>Cart</span>
                      </Link>
                    </>
                  )}
                  <button
                    onClick={logout}
                    className="flex items-center gap-2 hover:text-green-200"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </nav>

            {/* Main Content */}
            <main className="container mx-auto py-8 px-4">
              <Routes>
                {user.role === 'farmer' ? ( // Check user role
                  <>
                    <Route path="/" element={<Home />} />
                    <Route path="/sell" element={<SellCrops />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/market" element={<MarketInsights />} />
                    <Route path='/dashboard' element={<FarmerDashboard></FarmerDashboard>}></Route>
                    {/* <Route path="/farmerdashboard" element={<FarmerDashboard />} /> */}
                    <Route path="/cart" element={<Cart />} />
                  </>
                ) : (
                  <>
                  <Route path="/" element={<BuyHome />} />
                    <Route path="/" element={<BuyerDashboard />} />
                    <Route path="/marketplace" element={<Marketplace />} />
                    <Route path="/cart" element={<Cart />} />
                  </>
                )}
              </Routes>
            </main>
          </>
        ) : (
          <LoginRegister /> // Show login/register if user is not logged in
        )}
      </div>
    </Router>
  );
}

export default App;