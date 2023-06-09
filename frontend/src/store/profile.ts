import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {httpConfig} from "../shared/utils/http-config.ts";
import {AppDispatch, RootState} from "./store.ts";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;



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
    const profile = state.profiles

    if (profile[profileId] === undefined) {
      try {
        const {data} = await httpConfig(`/apis/profile/${profileId}`)
        dispatch(setProfile({ profileId,data}))
    } catch (error) {
        console.error('Error fetching profile', error)
    }
  }

export default slice.reducer