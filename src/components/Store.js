import { configureStore } from "@reduxjs/toolkit";
import reducers from "./Productslice";

export const store = configureStore({
  reducer: {
    products: reducers.products,
    selectedProduct: reducers.selectedProduct,
  },
});