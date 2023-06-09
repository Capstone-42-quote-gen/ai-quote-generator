import React from "react";
import {useAppDispatch, useAppSelector, RootState} from "../../store/store";
import {fetchAuth} from "../../store/auth";
import {PartialProfile} from "../interfaces/Profile";


/**
 * A custom hook to handle grabbing pertinent information from the jwt token stored in redux
 *
 * @returns {{Profile | null, isLoading: boolean}} an object containing the auth object from the JWT token stored in redux | null if the user is not logged in, and a helper flag to help with react rendering and redirects
 */



export function useJwtToken (): { profile: PartialProfile | null, isLoading: boolean } {

    const [isLoading, setIsLoading]: [boolean, React.Dispatch<boolean>] = React.useState(true)
    const auth = useAppSelector((state: RootState) => state.auth)

    const profile: PartialProfile | null = auth
  ? {
        profileId: auth.profileId,
        profileEmail: auth.profileEmail,
        profilePhotoUrl: auth.profilePhotoUrl,
        profileUsername: auth.profileUsername
    }
    : null

    const dispatch: any = useAppDispatch()

    const initialEffects = () => {
        async function getAuthFromRedux () {
            await dispatch(fetchAuth())
            setIsLoading(false)

        }

        getAuthFromRedux().catch(onerror => {console.error(onerror)
        });
    };

    React.useEffect(initialEffects, [dispatch]);
    return { profile, isLoading };


}