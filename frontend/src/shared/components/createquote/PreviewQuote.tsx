
import {Button, Col, Image} from "react-bootstrap";
import {CreateQuote, PartialPost, QuoteImage} from "../../interfaces/CreateQuote";
import {MutationResponse, usePostPostPromptMutation, usePostSaveQuoteMutation} from "../../../store/apis";
import {useJwtToken} from "../../hooks/useJwtHook";
import {useNavigate} from "react-router-dom";
import {PostPrompt} from "../../interfaces/PostPrompt";

interface PreviewQuoteProps {
    image: QuoteImage;
    quote: string;
    index: number;
    createQuote: CreateQuote
}
export function PreviewQuote(props: PreviewQuoteProps) {
    const navigate = useNavigate()

    const imgTemplates = [
        props.image.regularUrl +"&fit=crop&bs=inherit&bm=screen&balph=20&blend64=OTlhOTUx&txtpad=40&txtsize=30&txtclr=fff&txtalign=center&txt64=aHR0cHM6Ly9nbG9vbXNtaXRoLmxvbA&markalign=center%2Ctop&mark64="+btoa("https://assets.imgix.net/~text?w=1000&txtclr=fff&txt="+ encodeURIComponent(props.quote) +"&w=1000&txtsize=80&txtlead=20&txtpad=100&txtfont=AmericanTypewriter&txtalign=center") + "&exp=-10&w=1080",
        props.image.regularUrl +"&fit=crop&bs=inherit&bm=screen&balph=20&blend64=OTlhOTUx&txtpad=40&txtsize=30&txtclr=fff&txtalign=center&txt64=aHR0cHM6Ly9nbG9vbXNtaXRoLmxvbA&markalign=center%2Ctop&mark64="+btoa("https://assets.imgix.net/~text?w=1000&txtclr=fff&txt="+ encodeURIComponent(props.quote)+"&w=1000&txtsize=80&txtlead=20&txtpad=100&txtfont=avenir-black&txtalign=center") + "&exp=-10&w=1080",
        props.image.regularUrl +"&usm=20&exp=-10&mark64="+btoa("https://assets.imgix.net/~text?w=1000&txtclr=fff&txt="+encodeURIComponent(props.quote)+"&w=1000&txtsize=80&txtlead=0&txtpad=150&txtfont=Impact&txtalign=center") + "&markalign=center%2Cbottom&txt64=aHR0cHM6Ly9nbG9vbXNtaXRoLmxvbA&txtalign=center&txtclr=fff&txtsize=30&txtpad=40&blend64=NjM3NDk3&balph=50&bm=screen&bs=inherit&fit=crop",
        props.image.regularUrl +"&fit=crop&bs=inherit&bm=screen&balph=20&blend64=OTlhOTUx&txtpad=40&txtsize=30&txtclr=fff&txtalign=center&txt64=aHR0cHM6Ly9nbG9vbXNtaXRoLmxvbA&markalign=center%2Ctop&mark64="+btoa("https://assets.imgix.net/~text?w=1000&txtclr=fff&txt="+ encodeURIComponent(props.quote) +"&w=1000&txtsize=80&txtlead=20&txtpad=100&txtfont=AmericanTypewriter&txtalign=center") + "&exp=-10&w=1080",
        props.image.regularUrl +"&fit=crop&bs=inherit&bm=screen&balph=20&blend64=OTlhOTUx&txtpad=40&txtsize=30&txtclr=fff&txtalign=center&txt64=aHR0cHM6Ly9nbG9vbXNtaXRoLmxvbA&markalign=center%2Ctop&mark64="+btoa("https://assets.imgix.net/~text?w=1000&txtclr=fff&txt="+encodeURIComponent(props.quote)+"&w=1000&txtsize=80&txtlead=20&txtpad=100&txtfont=avenir-black&txtalign=center") + "&exp=-10&w=1080",
        props.image.regularUrl +"&usm=20&exp=-10&mark64="+btoa("https://assets.imgix.net/~text?w=1000&txtclr=fff&txt="+encodeURIComponent(props.quote)+"&w=1000&txtsize=80&txtlead=0&txtpad=150&txtfont=Impact&txtalign=center") + "&markalign=center%2Cbottom&txt64=aHR0cHM6Ly9nbG9vbXNtaXRoLmxvbA&txtalign=center&txtclr=fff&txtsize=30&txtpad=40&blend64=NjM3NDk3&balph=50&bm=screen&bs=inherit&fit=crop",
    ];


    const [submitQuote] = usePostSaveQuoteMutation ()
    const [savePrompt] = usePostPostPromptMutation()
    const {profile} = useJwtToken()

    console.log("Props create quote: Topic ", props.createQuote?.topic)
    console.log("Props create quote: Voice ", props.createQuote?.voice)
    async function savePost() {
            const partialPost: PartialPost = {
            postProfileId: profile?.profileId as string,
            postPhotoUrl: imgTemplates[props.index],
            postQuote: props.quote,
            postPhotographerName: props.image.userName,
            postPhotographerUrl: props.image.userHtmlLink,

        };

        const result = await submitQuote(partialPost ) as MutationResponse;
        console.log(result)
        const TopicPostPrompt: PostPrompt = {
             postPromptPromptId: props.createQuote?.topic,
             postPromptPostId: result.data.data.postId

     };
        // Save the post prompt for Voice
        const voiceResult = await savePrompt(TopicPostPrompt ) as MutationResponse;

        const VoicePostPrompt: PostPrompt = {
            postPromptPromptId: props.createQuote?.voice,
            postPromptPostId: result.data.data.postId

        };

        // Save the post prompt for Topic
        const topicResult = await savePrompt(VoicePostPrompt ) as MutationResponse;

        console.log(result.data.data.postId)
        navigate(`/display-quote/${result.data.data.postId}`)
    }


    return (
        <>
            <Col lg={4} xs={6} className="py-4">
                <Image
                    fluid
                    src={imgTemplates[props.index]}
                    alt="Gloomsmith Generated Quote Image"
                    className="border border-dark"
                />
                <Col xs="auto" className="d-flex justify-content-center py-2">
                    <Button variant="light" size="lg" onClick={savePost}>
                        Save
                    </Button>
                </Col>
            </Col>
        </>
    );
}