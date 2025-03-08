import { useStore } from '../store/store';
import { Trash2 } from 'lucide-react';

export function Cart() {
  const { cart, removeFromCart, updateQuantity } = useStore();

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (cart.length === 0) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Shopping Cart</h2>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <p className="text-gray-600">Your cart is empty</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Shopping Cart</h2>
      <div className="bg-white rounded-lg shadow-md">
        <div className="p-6 space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="flex flex-col md:flex-row items-center justify-between border-b pb-4 gap-4">
              <div className="text-center md:text-left">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-600">Farmer: {item.farmer}</p>
                <p className="text-gray-600">₹{item.price} per kg</p>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-4">
                <input
                  type="number"
                  min="1"
                  max={item.maxQuantity}
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                  className="w-20 px-2 py-1 border rounded"
                />
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
          
          <div className="pt-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <span className="text-lg font-semibold">Total:</span>
              <span className="text-2xl font-bold text-green-600">₹{total}</span>
            </div>
            
            <button className="w-full mt-4 bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
