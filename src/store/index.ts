import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { appApi } from "@services/app.service";

const rootReducer = combineReducers({
  [appApi.reducerPath]: appApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(appApi.middleware),
});
