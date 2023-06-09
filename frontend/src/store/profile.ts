import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {httpConfig} from "../shared/utils/http-config.ts";
import {AppDispatch, RootState} from "./store.ts";



interface ProfileState {
    [profileId: string]: any;
}

const slice = createSlice({
    name: "profiles",
    initialState: {} as ProfileState,
    reducers: {
        setProfile: (profiles, action: PayloadAction<{ profileId: string, data: any }>) => {
            profiles[action.payload.profileId] = action.payload.data
        }
    }
})

export const { setProfile } = slice.actions

export const fetchProfileByProfileId = (profileId: string) => async (dispatch: AppDispatch, getState: () => RootState) => {
    const state = getState()
    const profiles = state.profiles

    if (profiles[profileId] === undefined) {
        const {data} = await httpConfig(`/apis/profile/${profileId}`)
    }
}

export default slice.reducer