// import {useGetProfilesQuery} from "../../store/apis";

import {SignInForm} from "./SignInForm";
import {useGetProfilesQuery} from "../../store/apis";
// import {Spinner} from "react-bootstrap";

export const SignIn = () => {

    const {data, error, isLoading} = useGetProfilesQuery("")
    if(isLoading || data === undefined) {
        if (error) {
            error.message
        }
        // return( <Spinner animation="border" />)
    }
    return (
        <>
            <SignInForm />
        </>
    )
}