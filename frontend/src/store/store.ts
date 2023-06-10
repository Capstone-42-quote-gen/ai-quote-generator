
import { apis } from './apis'
import {setupListeners} from "@reduxjs/toolkit/query";
import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import auth from "./auth";
import {Profile} from "../ui/Profile";


const reducer = combineReducers({api: apis.reducer, auth, Profile,})
export const store = configureStore({
    reducer: reducer,
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(apis.middleware),
});

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector