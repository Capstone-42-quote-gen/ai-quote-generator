import { Button, Col, Form, Row, Spinner } from "react-bootstrap";
import { MutationResponse, useGetAllPromptsQuery,usePostCreateQuoteGenerateMutation,} from "../../store/apis";
import { Prompt } from "../../shared/interfaces/Prompt";
import * as Yup from "yup";
import { Formik, FormikHelpers,FormikProps} from "formik";
import { CreateQuote } from "../../shared/interfaces/CreateQuote";
import { DisplayStatus } from "../../shared/components/display-status/DisplayStatus";
import { FormDebugger } from "../../shared/components/FormDebugger";
import { DisplayError } from "../../shared/components/display-error/DisplayError";

export const CreateQuoteFormLogic = () => {
    const [submit] = usePostCreateQuoteGenerateMutation({fixedCacheKey:"SubmitQuote"});
    const createQuote: CreateQuote = {
        topic: "",
        voice: "",
    };
    const validator = Yup.object().shape({
        topic: Yup.string().required("Topic is required"),
        voice: Yup.string().required("Voice is required"),
    });

    const submitQuote = async ( values: CreateQuote, formikHelpers: FormikHelpers<CreateQuote>) => {
        const { resetForm, setStatus } = formikHelpers;
        const createQuote: CreateQuote = {topic: values.topic, voice: values.voice}

        const result = (await submit(createQuote)) as MutationResponse;

        const { data: response, error } = result;
    console.log(response)
        if (error) {
            setStatus({ type: error.type, message: error.message });
        } else if (response?.status === 200) {
            resetForm();
            setStatus({ type: response.type, message: response.message });
        } else {
            setStatus({
                type: response?.type,
                message: response?.message,
            });
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
    );
};

export const CreateQuoteFormContent = (props: FormikProps<CreateQuote>) => {
    const {
        status,
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
    } = props;

    const { data: prompts, error, isLoading } = useGetAllPromptsQuery("");

    if (isLoading || prompts === undefined) {
        return (
            <div className="d-flex justify-content-center align-items-center vh-100">
                <Spinner animation="border" variant="primary" />
            </div>
        );
    }

    let voices: Prompt[] = prompts.filter(
        (prompt) => prompt.promptType === "voice"
    );
    let topics: Prompt[] = prompts.filter(
        (prompt) => prompt.promptType === "topic"
    );

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Row className="justify-content-center pt-3">
                    <Col xs="auto" className="text-center" >
                        <h1>Create an AI Quote Image</h1>
                        <p>Select your topic and voice to let the AI work its magic! Once
                            the quote is generated choose from 6 draft images, each
                            showcasing the same quote with different layouts. Click to save
                            your favorite to your profile. Let the AI amuse and astound you
                            with its whimsical creations!
                        </p>
                    </Col>
                </Row>

                <Row className="justify-content-center">
                    <Col xs="auto" className="py-2">
                        <Form.Select
                            name="topic"
                            value={values.topic}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        >
                            <option value="">Choose a TOPIC</option>
                            {topics.map((topic) => (
                                <option key={topic.promptId} value={topic.promptId}>
                                    {topic.promptValue}
                                </option>
                            ))}
                        </Form.Select>
                        <DisplayError errors={errors} touched={touched} field="topic" />
                    </Col>

                    <Col xs="auto" className="py-2">
                        <Form.Select
                            name="voice"
                            value={values.voice}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        >
                            <option value="">Choose a VOICE</option>
                            {voices.map((voice) => (
                                <option key={voice.promptId} value={voice.promptId}>
                                    {voice.promptValue}
                                </option>
                            ))}
                        </Form.Select>
                        <DisplayError errors={errors} touched={touched} field="voice" />
                    </Col>
                </Row>

                <Row className="mb-3 justify-content-center">
                    <Col xs="auto" className="py-2">
                        <Button variant="primary" size="lg" type="submit">
                            Generate a Quote
                        </Button>
                    </Col>
                </Row>
            </Form>
            <DisplayStatus status={status} />
            <FormDebugger {...props} />
        </>
    );
};
