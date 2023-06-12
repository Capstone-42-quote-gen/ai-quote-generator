import { Container, Row } from "react-bootstrap";
import { CreateQuoteFormLogic } from "./CreateQuoteForm";
import { useAppSelector } from "../../../store/store.ts";
import { Navigation } from "../NavBar.tsx";
import { QuoteImage, CreateQuote } from "../../interfaces/CreateQuote.ts";
import { PreviewQuote } from "./PreviewQuote.tsx";
import {useState} from "react";

export function CreateQuote() {

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
