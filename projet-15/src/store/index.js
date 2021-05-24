import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./cart-slice";
import { uiSlice } from "./ui";

export const store = configureStore({
  reducer: { ui: uiSlice.reducer, cart: cartSlice.reducer },
});
