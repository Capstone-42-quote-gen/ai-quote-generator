import {createSlice, PayloadAction} from "@reduxjs/toolkit";


interface ProfileState {
    [profileId: string]: any;
}

const slice = createSlice({
    name: "profiles",
    initialState: {} as ProfileState,
    reducers: {
        setProfile: (profiles, action: PayloadAction<{ profileId: string, data: any }>) => {
            profiles[action.payload.profileId] = action.payload.data;
        }
    }
});

export const { setProfile } = slice.actions;

export const fetchProfileByProfileId = (profileId: string) => {
    const state = getState();
    const profiles =
}