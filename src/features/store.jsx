import { configureStore } from "@reduxjs/toolkit";
import cocktailReducer from "./cocktail/cocktailSlice";

export const store = configureStore({
  reducer: {
    cocktail: cocktailReducer,
  },
});
