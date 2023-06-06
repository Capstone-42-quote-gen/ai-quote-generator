
import { apis } from './apis'
import {setupListeners} from "@reduxjs/toolkit/query";
import {configureStore} from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        [apis.reducerPath]: apis.reducer
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(apis.middleware)
})

setupListeners(store.dispatch)