// src/components/Marketplace.tsx
import React from 'react';
import { useStore } from '../store/store';
import { ShoppingCart } from 'lucide-react';
import { useCropListings } from '../hooks/useCropListings'; // Import the hook

export function Marketplace() {
  const { addToCart, cart } = useStore();
  const cropListings = useCropListings(); // Use the hook

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6">
      <div className="flex justify-between items-center mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-green-800">Farmer's Marketplace</h1>
        <div className="relative">
          <ShoppingCart className="h-6 w-6" />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
              {cart.reduce((acc, item) => acc + item.quantity, 0)}
            </span>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {cropListings.map((listing) => (
          <div key={listing.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold text-green-800 mb-2">{listing.cropName}</h3>
              <div className="space-y-1 sm:space-y-2">
                <p><span className="font-medium">Farmer:</span> {listing.farmerName}</p>
                <p><span className="font-medium">Quantity:</span> {listing.quantity} kg</p>
                <p><span className="font-medium">Price:</span> ₹{listing.price}/kg</p>
                <p><span className="font-medium">Location:</span> {listing.location}</p>
              </div>
              <div className="mt-3 sm:mt-4 flex justify-between items-center">
                <p className="text-xl sm:text-2xl font-bold text-green-600">₹{listing.price * listing.quantity}</p>
                <button
                  onClick={() => addToCart({
                    id: listing.id,
                    name: listing.cropName,
                    price: listing.price,
                    quantity: 1,
                    farmerName: listing.farmerName,
                    maxQuantity: listing.quantity
                  })}
                  className="bg-green-600 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-md hover:bg-green-700 transition-colors text-sm sm:text-base"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {cropListings.length === 0 && (
        <div className="text-center py-8 sm:py-12">
          <p className="text-gray-600 text-base sm:text-lg">No crops are currently listed for sale.</p>
          <p className="text-gray-500 text-sm sm:text-base">Check back later or visit the Sell Crops page to list your produce.</p>
        </div>
      )}
    </div>
  );
}