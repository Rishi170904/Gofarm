import React from 'react';
import { useStore } from '../store/store'; // Correct import path
import { products } from '../data/products';
import { ShoppingCart } from 'lucide-react';

export function Shop() {
  const { cart, addToCart, removeFromCart, updateQuantity } = useStore();

  return (
    <div className="container mx-auto p-4 sm:p-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-green-800">Farm Shop</h1>
        <div className="relative">
          <ShoppingCart className="h-6 w-6" />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
              {cart.reduce((acc, item) => acc + item.quantity, 0)}
            </span>
          )}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800">{product.name}</h3>
              <p className="text-gray-600 mt-2 text-sm sm:text-base">{product.description}</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-xl sm:text-2xl font-bold text-green-600">₹{product.price}</span>
                <button
                  onClick={() => addToCart(product)}
                  className="bg-green-600 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-md hover:bg-green-700 transition-colors text-sm sm:text-base"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Shopping Cart Section */}
      {cart.length > 0 && (
        <div className="mt-6 sm:mt-8 bg-white p-4 sm:p-6 rounded-lg shadow-md">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Shopping Cart</h2>
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center justify-between border-b pb-4">
                <div className="flex items-center">
                  <img src={item.image} alt={item.name} className="w-12 sm:w-16 h-12 sm:h-16 object-cover rounded" />
                  <div className="ml-3 sm:ml-4">
                    <h3 className="text-base sm:text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-600 text-sm sm:text-base">₹{item.price} × {item.quantity}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 sm:gap-4">
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                    className="w-12 sm:w-16 px-2 py-1 border rounded text-sm sm:text-base"
                  />
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-600 hover:text-red-800 text-sm sm:text-base"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <div className="flex justify-between items-center pt-4">
              <span className="text-lg sm:text-xl font-bold">Total:</span>
              <span className="text-xl sm:text-2xl font-bold text-green-600">
                ₹{cart.reduce((total, item) => total + item.price * item.quantity, 0)}
              </span>
            </div>
            <button className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors mt-4 text-sm sm:text-base">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}