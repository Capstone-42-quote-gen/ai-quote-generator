import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import { apis } from './apis'
import {setupListeners} from "@reduxjs/toolkit/query";

export const store = configureStore({
    reducer: {
        [apis.reducerPath]: apis.reducer
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(apis.middleware)
})

setupListeners(store.dispatch)