import { configureStore } from '@reduxjs/toolkit'
import createReducer from "../components/cartSlice"

export const store = configureStore({
  reducer: {
    allcart: createReducer
  },
})