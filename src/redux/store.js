import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducer/authSlice.js";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
