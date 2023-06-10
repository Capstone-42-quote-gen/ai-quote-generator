import {Button, Container, Row, Col, Image} from "react-bootstrap";
import {Navigation} from "../../shared/components/NavBar.tsx";
import {CreateQuoteFormLogic} from "./CreateQuoteForm.tsx";
import {useAppSelector} from "../../store/store.ts";


export function CreateQuote() {

    // Get the API data stored in redux that was returned to the browser
    const data = useAppSelector(
    (state) => state.api.mutations?.SubmitQuote?.data?.data
)
console.log(data)

    return (
        <>
            <Navigation/>
            <Container>
                <CreateQuoteFormLogic/>

                <Row className="justify-content-center">

                  //IMAGE BLOCK TO REPEAT
                    <Col lg={4} xs={6} className="py-4">
                        <Image fluid src="https://placebeard.it/1080/1400/1" alt="Gloomsmith Generated Quote Image" className="border border-dark" />
                        <Col xs="auto" className="d-flex justify-content-center py-2">
                            <Button variant="light" size="lg" type="submit">Save</Button>
                        </Col>
                    </Col>


                </Row>

            </Container>


        </>
    )
}

