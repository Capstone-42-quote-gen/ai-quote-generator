// import {useGetProfilesQuery} from "../../store/apis";
// import {Spinner} from "react-bootstrap";

import {SignInForm} from "./SignInForm";

export function SignIn() {

    // const {data, error, isLoading} = useGetSignUpQuery("")
    // if(isLoading || data === undefined) {
    //     if (error) {
    //         error.message
    //     }
        // return( <Spinner animation="border" />)
    return (
        <>
            <SignInForm />
        </>
    )
}