import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import React from "react";
import pac1 from "../../img/package-1.jpg";
export const initialState = {
  items: [
    {
      id: 1,
      image: pac1,
      country: "Thailand",
      days: "3",
      numPerson: "2",
      price: "350",
      rate: "4.5",
    },
  ],
};

const PackageSlice = createSlice({
  name: "package",
  initialState,
  reducers: {
    // GETPACKAGE(state) {
    //   state.items;
    // },
    // ADDINGPACKAGE(state, action:PayloadAction) {
    //   state.items.concat;
    //   action.payload;
    // },
  },
});

export default PackageSlice.reducer;
