import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {httpConfig} from "../shared/utils/http-config";
import {AppDispatch, RootState} from "./store";


const slice = createSlice({
    name: "profiles",
    initialState: {},
    reducers: {
        setProfile: (Profiles, action: PayloadAction<{ profileId: string, data: any }>) => {
            Profiles[action.payload.profileId] = action.payload.data
        }
    }
})

export const { setProfile } = slice.actions

export const fetchProfileByProfileId = (profileId: string) => async (dispatch: AppDispatch, getState: () => RootState) => {
    const state = getState()
    const Profile = state.Profile
    console.log("fetch profile", fetchProfileByProfileId)

    if(Profile[profileId] === undefined) {
        try {
            const {data} = await httpConfig(`/apis/profile/${profileId}`)
            dispatch(setProfile({profileId, data}))
        } catch (error) {
            console.error('Error fetching profile', error)
        }
    }
};
export default slice.reducer