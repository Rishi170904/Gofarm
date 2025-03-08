import React, { useState } from 'react';
import { useStore } from '../store/store';
import { CropListing } from '../types';

export function SellCrops() {
  const { cropListings, addCropListing } = useStore();
  const [formData, setFormData] = useState({
    farmerName: '',
    cropName: '',
    quantity: '',
    price: '',
    location: '',
    contact: '',
    bankAccount: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newListing: CropListing = {
      id: Date.now(),
      farmerName: formData.farmerName,
      cropName: formData.cropName,
      quantity: parseInt(formData.quantity),
      price: parseInt(formData.price),
      location: formData.location,
      contact: formData.contact,
      bankAccount: formData.bankAccount
    };
    addCropListing(newListing);
    setFormData({
      farmerName: '',
      cropName: '',
      quantity: '',
      price: '',
      location: '',
      contact: '',
      bankAccount: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6">
      <h1 className="text-2xl sm:text-3xl font-bold text-green-800 mb-6 sm:mb-8">Sell Your Crops</h1>
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg mb-6 sm:mb-8">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Farmer Name</label>
              <input
                type="text"
                name="farmerName"
                value={formData.farmerName}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Crop Name</label>
              <input
                type="text"
                name="cropName"
                value={formData.cropName}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Quantity (kg)</label>
              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Price per kg (₹)</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Contact Number</label>
              <input
                type="tel"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Bank Account Number</label>
              <input
                type="text"
                name="bankAccount"
                value={formData.bankAccount}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors text-sm sm:text-base"
          >
            List Your Crop
          </button>
        </form>
      </div>
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">Current Listings</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {cropListings.map((listing) => (
            <div key={listing.id} className="border rounded-lg p-3 sm:p-4">
              <h3 className="text-lg sm:text-xl font-semibold text-green-800">{listing.cropName}</h3>
              <div className="mt-2 space-y-1 sm:space-y-2">
                <p><span className="font-medium">Farmer:</span> {listing.farmerName}</p>
                <p><span className="font-medium">Quantity:</span> {listing.quantity} kg</p>
                <p><span className="font-medium">Price:</span> ₹{listing.price}/kg</p>
                <p><span className="font-medium">Location:</span> {listing.location}</p>
                <p><span className="font-medium">Contact:</span> {listing.contact}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}