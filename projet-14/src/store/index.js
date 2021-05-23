import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth";
import { counterReducer } from "./counter";

export const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});
