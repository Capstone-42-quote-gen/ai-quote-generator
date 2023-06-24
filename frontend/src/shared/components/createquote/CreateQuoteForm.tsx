import { Button, Col, Form, Row, Spinner } from "react-bootstrap";
import * as Yup from "yup";
import { Formik, FormikHelpers, FormikProps } from "formik";
import {MutationResponse, useGetAllPromptsQuery, usePostCreateQuoteGenerateMutation} from "../../../store/apis";
import {CreateQuote} from "../../interfaces/CreateQuote";
import {Prompt} from "../../interfaces/Prompt.ts";
import {DisplayError} from "../display-error/DisplayError";
import {Dispatch, SetStateAction, useState} from "react";

interface CreateQuoteFormLogicProps {
    setCreateQuote: Dispatch<SetStateAction<CreateQuote | null>>
}

export const CreateQuoteFormLogic = (props: CreateQuoteFormLogicProps) => {
    const {setCreateQuote} = props;
    const [submit] = usePostCreateQuoteGenerateMutation({fixedCacheKey:"SubmitQuote"});
    const createQuote: CreateQuote = {
        topic: "",
        voice: "",
    };
    const validator = Yup.object().shape({
        topic: Yup.string().required("Topic is required"),
        voice: Yup.string().required("Voice is required"),
    });

    const [loading, setLoading] = useState(false);

    const submitQuote = async ( values: CreateQuote, formikHelpers: FormikHelpers<CreateQuote>) => {
        setLoading(true);
        const { setStatus } = formikHelpers;
        const createQuote: CreateQuote = {topic: values.topic, voice: values.voice};
        setCreateQuote(createQuote);

        const result = (await submit(createQuote)) as MutationResponse;

        const { data: response, error } = result;

        setLoading(false);

        if (error) {
            setStatus({ type: error.type, message: error.message });
        } else if (response?.status === 200) {
            setStatus({ type: response.type, message: response.message })
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
            {(props) => <CreateQuoteFormContent {...props} loading={loading} setLoading={setLoading} />}
        </Formik>
    );
};

export const CreateQuoteFormContent = (props: FormikProps<CreateQuote> & {loading: boolean, setLoading: (isLoading: boolean) => void}) => {
    const {
        status,
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        setFieldValue,
        loading,
        setLoading
    } = props;

    const { data: prompts, isLoading } = useGetAllPromptsQuery("");

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

    const getRandomItem = (items: any[]) => {
        const randomIndex = Math.floor(Math.random() * items.length);
        return items[randomIndex].promptId;
    };

    const handleRandomSelection = async () => {
        const randomTopic = getRandomItem(topics);
        const randomVoice = getRandomItem(voices);
        await Promise.all([
            setFieldValue('topic', randomTopic, true),
            setFieldValue('voice', randomVoice, true),
        ]);
        handleSubmit();
    };


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
                            disabled={loading}
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
                            disabled={loading}
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
                        <Button size="lg" type="submit" className="generate-button" disabled={loading}>
                            Generate a Quote
                        </Button>
                    </Col>
                    <Col xs="auto" className="py-2">
                        <Button size="lg" onClick={handleRandomSelection} className="generate-button" disabled={loading}>
                            I'm Feeling Lucky
                        </Button>
                    </Col>
                </Row>
            </Form>
        </>
    );
};
