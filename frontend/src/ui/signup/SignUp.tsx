import {useGetProfileQuery} from "../../store/apis";
import {Spinner} from "react-bootstrap";

export const SignUp = () => {
    const { data, error, isLoading } = useGetProfileQuery("")

    if(isLoading || data === undefined) {
        return( <Spinner animation="border" />)
    }
}