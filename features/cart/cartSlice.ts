import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product } from '@/types';

interface CartItem {
  id: string | number;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartState {
  items: CartItem[],
  quantity: number
};

const initialState: CartState = {
  items: [],
  quantity: 1
};

export const cartSclie = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<{ product: Product; quantity: number}>) => {
      const { product, quantity } = action.payload;

      const cartItem = {
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.images?.[0].img || '',
      }

      const existing = state.items.find((i) => i.id === cartItem.id);

      if(existing) {
        existing.quantity += quantity;
      } else {
        state.items.push({ ...cartItem, quantity });
      }
    },

    removerFromCart: (state, action: PayloadAction<string | number>) => {
      state.items = state.items.filter((i) => i.id !== action.payload);
    },

    increaseQuantity: (state, action: PayloadAction<string | number>) => {
      const item = state.items.find(i => i.id === action.payload);
      if(item && item.quantity < 10) item.quantity += 1;
    },

    decreaseQuantity: (state, action: PayloadAction<string | number>) => {
      const item = state.items.find(i => i.id === action.payload);
      if(item && item.quantity > 1) item.quantity -= 1;
    },

    clearCart: (state) => {
      state.items = [];
    },

    increase: (state) => {
      if(state.quantity < 10){
        state.quantity += 1
      }
    },
    decrease: (state) => {
      if(state.quantity > 1){
        state.quantity -= 1
      }
    }
  },
});

export const { addToCart, removerFromCart, increaseQuantity, decreaseQuantity, clearCart, increase, decrease } = cartSclie.actions
export default cartSclie.reducer