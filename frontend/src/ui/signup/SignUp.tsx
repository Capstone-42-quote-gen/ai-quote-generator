import {Spinner} from "react-bootstrap";
import {useGetProfilesQuery} from "../../store/apis";

export const SignUp = () => {
    const { data, error, isLoading } = useGetProfilesQuery("")

    if(isLoading || data === undefined) {
        return( <Spinner animation="border" />)
    }
    return (
        <>

        </>
    )
}