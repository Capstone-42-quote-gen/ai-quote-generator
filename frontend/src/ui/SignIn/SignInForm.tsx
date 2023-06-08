// import * as Yup from "yup";
import {SignUp} from "../signup/SignUp";
import {SignInCard} from "./SignInCard";
import {Col, Container, Row} from "react-bootstrap";
// import {SignUpForm} from "../signup/SignUpForm";

export function SignInForm() {

    // const validator = Yup.object().shape({
    //     signInEmail: Yup.string()
    //         .required("A sign in email is required to create a sign in")
    //         .max(128, "sign in email cannot be over 64 characters"),
    //     signInPassword: Yup.string()
    //         .required("sign in password is required to create a sign in")
    //         .min(8, "password must be at least 8 characters")
    // })
    //
    // const handleSubmit = (values, {resetForm, setStatus}) => {
    //     redux
    // }


    return (
        <>
            <Container className={"align-items-center py-5"}>
                <Row className={"justify-content-center"}>
                    <Col md={6}>
                        <SignInCard />
                    </Col>
                </Row>
                <Row className={"justify-content-center mt-4"}>
                    <Col lg={8}>
                        <div className={"text-center"}>
                            <span className={"divider-text"}><hr/>Not signed up yet?<hr/></span>
                        </div>
                    </Col>
                </Row>
                <Row className={"justify-content-center"}>
                    <Col lg={8}>
                        <div className={"d-grid"}>
                            <SignUp />
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}