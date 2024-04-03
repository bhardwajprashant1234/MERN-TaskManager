
import { applyMiddleware, compose } from "redux";
import { configureStore } from '@reduxjs/toolkit';
import {thunk} from 'redux-thunk';
import rootReducer from "./reducers";

const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = configureStore({
  reducer: rootReducer, // Pass the rootReducer directly as the reducer
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
  devTools: process.env.NODE_ENV !== 'production' && composeEnhancers,
});
export default store;