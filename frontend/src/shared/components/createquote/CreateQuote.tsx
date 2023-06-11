import {Container, Row} from "react-bootstrap";
import {CreateQuoteFormLogic} from "./CreateQuoteForm";
import {useAppSelector} from "../../../store/store.ts";
import {Navigation} from "../NavBar.tsx";
import {QuoteImage} from "../../interfaces/CreateQuote.ts";
import {PreviewQuote} from "./PreviewQuote.tsx";

export function CreateQuote() {

    // Get the API data stored in redux that was returned to the browser
    const data = useAppSelector(
    (state) => state.api.mutations?.SubmitQuote?.data?.data
)
// console.log(data)

    return (
        <>
            <Navigation/>
            <Container>
                <CreateQuoteFormLogic/>

                <Row className="justify-content-center">
                    {data &&
                    <>
                        {data.imageData.map((image: QuoteImage)=> <PreviewQuote key={image.regularUrl} quote={data.quote} image={image} /> )
                        }
                    </>
                    }

                </Row>

            </Container>


        </>
    )
}