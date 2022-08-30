import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../redux/features/product/product"

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});
