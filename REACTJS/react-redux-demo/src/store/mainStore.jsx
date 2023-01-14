// import { configureStore } from "@reduxjs/toolkit";
 import {configureStore} from "@reduxjs/toolkit"
 // import { composeWithDevTools } from '@redux-devtools/extension';
import { rootReducer } from "./Reducer";
import { createStore } from "redux";

export const store = createStore({ reducer: rootReducer,devTools:true });