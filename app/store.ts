import { configureStore } from '@reduxjs/toolkit'
import cartSclie from '../features/cart/cartSlice'

export const store = configureStore({
  reducer: {
    cart: cartSclie,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch