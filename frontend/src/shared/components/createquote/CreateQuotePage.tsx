import {Col, Container, Row} from "react-bootstrap";
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

         console.log(data)
 const [createQuote, setCreateQuote] = useState <CreateQuote | null > (null)


    return (
        <>
            <Navigation />
            <Container>
                <CreateQuoteFormLogic setCreateQuote={setCreateQuote} />


                { data === undefined ? <><Row className="mb-3 justify-content-center"><Col className="text-center col-lg-7 "><h4>Please allow 4-6 seconds for quote to generate after clicking...</h4><p>...while our AI comedy maestro combs through terabytes of comedic genius, please sit back and enjoy the anticipation. Your funny quote, curated by artificial intelligence, is moments away!</p></Col></Row></>:
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
                </Row>}
            </Container>
        </>
    );
}
