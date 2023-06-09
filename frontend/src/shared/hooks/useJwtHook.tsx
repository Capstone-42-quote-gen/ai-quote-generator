import React from "react";
import {RootState} from "@reduxjs/toolkit/dist/query/core/apiState";
import {Profile} from "../interfaces/Profile.ts";
import {useAppDispatch, useAppSelector, RootState} from "../../store/store.ts";
import {fetchAuth} from "../../store/auth.ts";


/**
 * A custom hook to handle grabbing pertinent information from the jwt token stored in redux
 *
 * @returns {{Profile | null, isLoading: boolean}} an object containing the auth object from the JWT token stored in redux | null if the user is not logged in, and a helper flag to help with react rendering and redirects
 */



export function useJwtToken (): { profile: Profile | null, isLoading: boolean } {

    const [isLoading, setIsLoading]: [boolean, React.Dispatch<boolean>] = React.useState(true)
    const auth = useAppSelector((state: RootState) => {

        return state.auth
    })

    const profile: Profile | null = auth ? {
    profileId: auth.profileId,
    profileEmail: auth.profileEmail,
    profilePassword: auth.profilePassword,
    profilePhotoUrl: auth.profilePhotoUrl,
    profileUsername: auth.profileUsername,
    }
    : null

    const dispatch: any = useAppDispatch()

    const initialEffects = () => {
        async function getAuthFromRedux () {
            await dispatch(fetchAuth())
            setIsLoading(false)

        }

        getAuthFromRedux().catch(onerror => {console.error(onerror)})
    }

    React.useEffect(initialEffects, [dispatch])
    return { profile, isLoading}


}