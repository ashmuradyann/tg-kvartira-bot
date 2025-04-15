
import { configureStore } from "@reduxjs/toolkit";

import adListSlice from "./slices/adSlice"

const store = configureStore({
  reducer: {
    adList: adListSlice
  },
});

export default store;
