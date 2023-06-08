
import {usePostSignInMutation} from "../../store/apis.ts";
// import {SignUpForm} from "../signup/SignUpForm";

export function SignInForm() {

    const [ submitRequest ] = usePostSignInMutation()
    const dispatch: AppDispatch = useAppDispatch()

    const validator = object(.shape{{
        profileUsername
    }})


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