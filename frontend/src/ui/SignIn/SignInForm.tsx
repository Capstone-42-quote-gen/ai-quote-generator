
import {MutationResponse, usePostSignInMutation} from "../../store/apis.ts";
import {Col, Container, Row} from "react-bootstrap";
import {SignInCard} from "./SignInCard.tsx";
import {SignUp} from "../signup/SignUp.tsx";
import * as Yup from "yup";
import {PartialSignIn} from "../../shared/interfaces/SignIn";
import {FormikHelpers} from "formik";
import {Simulate} from "react-dom/test-utils";
import submit = Simulate.submit;

export function SignInForm() {

    const [ submitRequest ] = usePostSignInMutation()

    const validator = Yup.object().shape({
        profileEmail: Yup.string()
            .required("Email is required for sign in")
            .min(1, "Sign in email must be at least 1 character")
            .max(32, "Sign in email  must be at least 32 characters"),
        profilePassword: Yup.string()
            .required("A password is required to sign up")
            .max(256, "Password  cannot be over 64 characters"),
    })

    const intialValues: PartialSignIn = {
        profileEmail: "",
        profilePassword: ""
    }

    async function handleSubmit(Values: PartialSignIn, actions: FormikHelpers<PartialSignIn>) {
        const {resetForm, setStatus} = actions
        console.log(values)
        const result = await submit(values) as MutationResponse
        const {data: response, error} = result

        if (error) {
            setStatus({type: error.type, message: error.message})
        } else if (response?.status === 200) {
            resetForm()
            setStatus({type: response.type, message: response.message})
        } else {
            setStatus({type: response?.type, message: response?.message})
        }
    }

    return (
        <formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validator} onChange={handleChange}>
            </>
        </formik>
    )

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