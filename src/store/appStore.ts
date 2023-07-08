import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { historySlice } from "~/modules/history";


export const rootReducer = combineReducers({
  history: historySlice.reducer
});

export const appStore = configureStore({
  reducer: rootReducer
});
