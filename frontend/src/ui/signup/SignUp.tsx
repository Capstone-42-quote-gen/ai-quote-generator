import {Spinner} from "react-bootstrap";
import {useGetProfilesQuery} from "../../store/apis";
import {SignUpForm} from "./SignUpForm";

export const SignUp = () => {
        const {data, error, isLoading} = useGetProfilesQuery("")
        if(isLoading || data === undefined) {
            if(error){error.message}
        return( <Spinner animation="border" />)
    }
    return (
        <>
        <SignUpForm />
        </>
    )
}