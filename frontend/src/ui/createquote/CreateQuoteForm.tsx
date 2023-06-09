import {Button, Col, Form, Row, Spinner} from "react-bootstrap";
import {MutationResponse, useGetAllPromptsQuery, usePostCreateQuoteMutation} from "../../store/apis.ts";
import {Prompt} from "../../shared/interfaces/Prompt.ts";
import * as Yup from "yup";
// import { useJwtToken } from '../../shared/hooks/useJwtHook.js'
import {CreateQuote} from "../../shared/interfaces/CreateQuote.ts";
import {Formik, FormikHelpers, FormikProps} from "formik";
import {DisplayStatus} from "../../shared/components/display-status/DisplayStatus.tsx";
import {FormDebugger} from "../../shared/components/FormDebugger.tsx";
import {DisplayError} from "../../shared/components/display-error/DisplayError.tsx";


export const CreateQuoteFormLogic = () => {
    const [submit] = usePostCreateQuoteMutation()
    const createQuote = {
        topic:"",
        voice:""
    };
    // const {profile} = useJwtToken()
    const validator = Yup.object().shape({
        topic: Yup.string()
            .required("Topic is required"),
        voice: Yup.string()
            .required("Voice is required")
        });
    const submitQuote = async(values: CreateQuote, formikHelpers: FormikHelpers<CreateQuote> ) => {
        const {resetForm, setStatus} = formikHelpers
        const result = await submit(createQuote) as MutationResponse

        const {
            data: response, error} = result

        if(error) {
            setStatus({type: error.type, message: error.message})
        }
        else if(response?.status === 200) {
            resetForm()
            setStatus({type: response.type, message: response.message})

        } else {
            setStatus({type: response?.type,  message: response?.message})
        }

    };

    return (
        <Formik
            initialValues={createQuote}
            onSubmit={submitQuote}
            validationSchema={validator}
        >
            {CreateQuoteFormContent}
        </Formik>

    )
};

function CreateQuoteFormContent(props: FormikProps<CreateQuote>) {
    const {
        status,
        values,
        errors,
        touched,
        // dirty,
        // isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit
        // handleReset
    } = props;


    const {data: prompts, error, isLoading} = useGetAllPromptsQuery("")
    if (isLoading || prompts === undefined) {
        return (
            <div className="d-flex justify-content-center align-items-center vh-100">
                <Spinner animation="border" variant="primary" />
            </div>
        )
    }

    let voices: Prompt[] = prompts.filter(prompt => prompt.promptType === "voice")
    let topics: Prompt[] = prompts.filter(prompt => prompt.promptType === "topic")

   return (
       <>
    <Form onSubmit={handleSubmit}>
        <Row className="justify-content-center pt-3">
            <Col xs="auto">
                <h1>Create an AI Quote Image</h1>
                <p>Select your topic and voice to let the AI work its magic! Once the quote is generated
                    choose from 6 draft images, each showcasing the same quote with different layouts. Click
                    to save your favorite to your profile. Let the AI amuse and astound you with its
                    whimsical creations!</p>
            </Col>
        </Row>

        <Row className="justify-content-center">

            <Col xs="auto" className="py-2">
                <Form.Select defaultValue="Choose a TOPIC">
                    <option value="">Choose a TOPIC</option>
                    {topics.map(topic => <option value={topic.promptId}>{topic.promptValue}</option>)}
                    <Form.Control
                        className="form-control"
                        name="topicContent"
                        type="text"
                        value={values.topic}
                        placeholder="Choose a TOPIC"
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <DisplayError errors={errors} touched={touched} field={"topicContent"} />
                </Form.Select>
            </Col>


            <Col xs="auto" className="py-2">
                <Form.Select defaultValue="Choose a VOICE">
                    <option value="">Choose a VOICE</option>
                    {voices.map(voice => <option value={voice.promptId}>{voice.promptValue}</option>)}

                    <Form.Control
                        className="form-control"
                        name="voiceContent"
                        type="text"
                        value={values.voice}
                        placeholder="Choose a VOICE"
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <DisplayError errors={errors} touched={touched} field={"voiceContent"} />

                </Form.Select>
            </Col>

        </Row>

        <Row className="mb-3 justify-content-center">
            <Col xs="auto" className="py-2">
                <Button variant="primary" size="lg" type="submit">Generate a Quote</Button>
            </Col>
            {/*<Col xs="auto" className="py-2">*/}
            {/*    <Button variant="secondary" size="lg" type="submit">Randomize</Button>*/}
            {/*</Col>*/}

        </Row>
    </Form>
           <DisplayStatus status={status} />
           <FormDebugger {...props} />
       </>
   )};

