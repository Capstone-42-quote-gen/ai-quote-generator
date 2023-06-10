import {AppDispatch, RootState} from "./store";
import {fetchAuth} from "./auth";
import {httpConfig} from "../shared/utils/http-config";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";


export interface ProfileState {
    [profileId: string]: any
}

const currentUserSlice = createSlice({
    name:'profile',
    initialState: null as null,
    reducers: {
        getCurrentUserByProfileId:(profile, action: PayloadAction<any>) => {
            return action.payload
        },
    },
});

export const {getCurrentUserByProfileId} = currentUserSlice.actions;

export default currentUserSlice.reducer

export const fetchCurrentUser =() => async (dispatch: AppDispatch, getState:() => RootState) => {
    await dispatch(fetchAuth());
    const { auth } = getState()
    if(auth !== null) {
        const { data } = await httpConfig.get(`/apis/profile/${auth.profileId}`)
        dispatch(getCurrentUserByProfileId(data))
    }
};