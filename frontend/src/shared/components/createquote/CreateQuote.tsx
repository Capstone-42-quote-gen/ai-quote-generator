import { Container, Row } from "react-bootstrap";
import { CreateQuoteFormLogic } from "./CreateQuoteForm";
import { useAppSelector } from "../../../store/store.ts";
import { Navigation } from "../navbar-functions/NavBar.tsx";
import { QuoteImage } from "../../interfaces/CreateQuote.ts";
import { PreviewQuote } from "./PreviewQuote.tsx";
import {useJwtToken} from "../../hooks/useJwtHook.tsx";

export function CreateQuote() {

        const data = useAppSelector(
        (state) => state.api.mutations?.SubmitQuote?.data?.data
    );

const profile = useJwtToken()
    console.log(profile)

    return (
        <>
            <Navigation />
            <Container>
                <CreateQuoteFormLogic />

                <Row className="justify-content-center">
                    {data &&
                        data.imageData.map((image: QuoteImage, index: number) => (
                            <PreviewQuote
                                key={image.regularUrl}
                                quote={data.quote}
                                image={image}
                                index={index}
                            />
                        ))}
                </Row>
            </Container>
        </>
    );
}
