import { Container, Row } from "react-bootstrap";
import { CreateQuoteFormLogic } from "./CreateQuoteForm";
import { useAppSelector } from "../../../store/store.ts";
import { PreviewQuote } from "./PreviewQuote.tsx";
import {useState} from "react";
import {CreateQuote, QuoteImage} from "../../interfaces/CreateQuote";
import {Navigation} from "../navbar-functions/NavBar";

export function CreateQuotePage() {

        const data = useAppSelector(
        (state) => state.api.mutations?.SubmitQuote?.data?.data
    );
 const [createQuote, setCreateQuote] = useState <CreateQuote | null > (null)


    return (
        <>
            <Navigation />
            <Container>
                <CreateQuoteFormLogic setCreateQuote={setCreateQuote} />

                <Row className="justify-content-center">
                    {data && createQuote !== null &&
                        data.imageData.map((image: QuoteImage, index: number) => (
                            <PreviewQuote
                                key={image.regularUrl}
                                quote={data.quote}
                                image={image}
                                index={index}
                                createQuote={createQuote}
                            />
                        ))}
                </Row>
            </Container>
        </>
    );
}
