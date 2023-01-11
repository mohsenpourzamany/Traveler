import { configureStore } from "@reduxjs/toolkit";
import PackageReducer from "../features/PackageSlice";

export const store = configureStore({
  reducer: {
    packages: PackageReducer,
  },
});
