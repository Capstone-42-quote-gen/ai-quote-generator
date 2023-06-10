
import { apis } from './apis'
import {setupListeners} from "@reduxjs/toolkit/query";
import {combineReducers, configureStore} from "@reduxjs/toolkit";
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import {TypedUseSelectorHook, useDispatch,
    useSelector} from "react-redux";
import auth from "./auth";
import {Profile} from "../ui/Profile";

// type CustomDispatch = (action: CustomAction) => void
//
// interface CustomAction {
//     type:string
//     payload: any
// }

const reducer = combineReducers({api: apis.reducer, auth, Profile,})
export const store: ToolkitStore =  configureStore({
    reducer: reducer,
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(apis.middleware),
});

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
    // & CustomDispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector