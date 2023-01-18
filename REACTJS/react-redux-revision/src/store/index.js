import {configureStore} from "@reduxjs/toolkit";
import { productsReducer } from "./reducers/productsReducer";
import { usersReducer } from "./reducers/usersReducer";
import thunk from "redux-thunk";


export const mainStore=configureStore({
    reducer:{
        users:usersReducer,
        products:productsReducer
    },
    middleware:[thunk]
})