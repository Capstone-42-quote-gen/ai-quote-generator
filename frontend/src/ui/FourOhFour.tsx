import {Footer} from "../shared/components/navbar-functions/Footer.tsx";
import {Navigation} from "../shared/components/navbar-functions/NavBar.tsx";
import {Container} from "react-bootstrap";

export const FourOhFour = () => {
    return (
        <>
            <Navigation/>
            <Container className="p-4 text-center"><h1>Page Not Found</h1></Container>
            <Footer />
        </>
    )
};