import { create } from 'zustand';
import { CartItem, CropListing, Product } from '../types';

interface StoreState {
  cart: CartItem[];
  addToCart: (product: Product | CartItem) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  cropListings: CropListing[];
  addCropListing: (listing: CropListing) => void;
}

export const useStore = create<StoreState>((set) => ({
  cart: [],
  addToCart: (product) =>
    set((state) => {
      const existingItem = state.cart.find((item) => item.id === product.id);
      if (existingItem) {
        return {
          cart: state.cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: Math.min(item.quantity + 1, item.maxQuantity || 99) }
              : item
          ),
        };
      }
      return { 
        cart: [...state.cart, { 
          ...product, 
          quantity: 1,
          maxQuantity: (product as CartItem).maxQuantity || 99
        }] 
      };
    }),
  removeFromCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== productId),
    })),
  updateQuantity: (productId, quantity) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === productId 
          ? { ...item, quantity: Math.min(Math.max(1, quantity), item.maxQuantity || 99) } 
          : item
      ),
    })),
  cropListings: [],
  addCropListing: (listing) =>
    set((state) => ({
      cropListings: [...state.cropListings, listing],
    })),
}));