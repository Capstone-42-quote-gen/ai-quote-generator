import { useState } from 'react';
import { Button, Col, Form, Row, Spinner } from "react-bootstrap";
import * as Yup from "yup";
import { Formik, FormikHelpers, FormikProps} from "formik";
import {MutationResponse, useGetAllPromptsQuery, usePostCreateQuoteGenerateMutation} from "../../../store/apis";
import {CreateQuote} from "../../interfaces/CreateQuote";
import {Prompt} from "../../interfaces/Prompt.ts";
import {DisplayError} from "../display-error/DisplayError";
import {Dispatch, SetStateAction} from "react";

interface CreateQuoteFormLogicProps {
    setCreateQuote: Dispatch<SetStateAction<CreateQuote | null>>
}

export const CreateQuoteFormLogic = (props: CreateQuoteFormLogicProps) => {
    const {setCreateQuote} = props
    const [submit] = usePostCreateQuoteGenerateMutation({fixedCacheKey:"SubmitQuote"});
    const [loading, setLoading] = useState(false);
    const createQuote: CreateQuote = {
        topic: "",
        voice: "",
    };
    const validator = Yup.object().shape({
        topic: Yup.string().required("Topic is required"),
        voice: Yup.string().required("Voice is required"),
    });

    const submitQuote = async ( values: CreateQuote, formikHelpers: FormikHelpers<CreateQuote>) => {
        setLoading(true);
        const { setStatus } = formikHelpers;
        const createQuote: CreateQuote = {topic: values.topic, voice: values.voice}
        setCreateQuote(createQuote)

        const result = (await submit(createQuote)) as MutationResponse;

        const { data: response, error } = result;
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
        setLoading(false);
    };

    return (
        <Formik
            initialValues={createQuote}
            onSubmit={submitQuote}
            validationSchema={validator}
        >
            {(formikProps) => <CreateQuoteFormContent {...formikProps} loading={loading} />}
        </Formik>
    );
};

export const CreateQuoteFormContent = (props: FormikProps<CreateQuote> & { loading: boolean }) => {
    const {
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        setFieldValue,
        loading
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

    const getRandomItem = (items: Prompt[]) => {
        const randomIndex = Math.floor(Math.random() * items.length);
        return items[randomIndex].promptId;
    };

    const handleRandomSelection = async () => {
        const randomTopic = getRandomItem(topics);
        const randomVoice = getRandomItem(voices);
        await Promise.all([
            setFieldValue('topic', randomTopic, true),
            setFieldValue('voice', randomVoice, true)
        ]);
        handleSubmit();
    };

    const loadingMessages = [
        "Hold tight, our AI is whispering sweet nothings to your quote...",
        "Revving up the word engine, buckle up for a linguistic ride!",
        "Give us a sec, the AI is mining the depths of wit and wisdom for you.",
        "Wait a bit, the AI is playing scrabble with your quote.",
        "The AI is practicing its comedic timing... Get ready for the punchline!",
        "Our AI is off to the races, whipping up a whirlwind of words!",
        "Patience! Our AI is in the kitchen, cooking up a quote casserole.",
        "Wait while the AI is doing push-ups with words and sit-ups with phrases!",
        "Give our AI a moment, it's deep in thought...Or it's just buffering.",
        "Hang tight! The AI is weaving a tapestry of words for you.",
        "Sit back and relax! Our AI is painting a masterpiece with your quote...",
        "Keep calm! The AI is navigating the sea of humor to fish for your quote...",
        "Wait a moment! The AI is currently in a heated debate with your quote...",
        "Hold on! The AI is sifting through a dictionary to perfect your quote...",
        "Take a breather! Our AI is crafting a word cocktail just for you...",
        "Stay patient! The AI is on a rollercoaster ride with your quote...",
        "Our AI is currently backstage, rehearsing your quote to perfection...",
        "Hang on! The AI is taming the wild beast of humor for your quote...",
        "A moment of silence please! Our AI is tuning its word orchestra for your quote...",
        "Bear with us! The AI is putting on its thinking cap for your quote..."
    ];


    const randomLoadingMessage = loadingMessages[Math.floor(Math.random() * loadingMessages.length)];


    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Row className="justify-content-center pt-3">
                    <Col lg="7" xs="auto" className="text-center">
                        <h1>Create an AI Quote Image</h1>
                        <p>Choose a topic and voice to influence what and how the AI will generate a quote image before your eyes! Then choose from 6 draft images showing the quote with different layouts. Click to "Save" if you like one of the quotes; or Generate again till you find one that you love. Have Fun! Heart your fav quotes. </p>
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
            {loading &&
                <div className="loading-container text-center">
                    <Spinner animation="border" />
                    <Row className="mb-3 justify-content-center"><Col className="text-center col-lg-7 "><h4>{randomLoadingMessage}</h4></Col></Row>
                </div>
            }
        </>
    );
};
