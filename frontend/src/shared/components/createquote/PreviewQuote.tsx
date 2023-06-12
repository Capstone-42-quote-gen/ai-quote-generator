
import {Button, Col, Image} from "react-bootstrap";
import {PartialPost, QuoteImage} from "../../interfaces/CreateQuote.ts";
import {MutationResponse, usePostSaveQuoteMutation} from "../../../store/apis.ts";
import {useJwtToken} from "../../hooks/useJwtHook.tsx";

interface PreviewQuoteProps {
    image: QuoteImage;
    quote: string;
    index: number;
}
export function PreviewQuote(props: PreviewQuoteProps) {

    const imgTemplates = [
        props.image.regularUrl +"&fit=crop&bs=inherit&bm=screen&balph=20&blend64=OTlhOTUx&txtpad=40&txtsize=30&txtclr=fff&txtalign=center&txt64=aHR0cHM6Ly9nbG9vbXNtaXRoLmxvbA&markalign=center%2Ctop&mark64="+btoa("https://assets.imgix.net/~text?w=1000&txtclr=fff&txt="+ props.quote +"&w=1000&txtsize=80&txtlead=20&txtpad=100&txtfont=AmericanTypewriter&txtalign=center") + "&exp=-10&w=1080",
        props.image.regularUrl +"&fit=crop&bs=inherit&bm=screen&balph=20&blend64=OTlhOTUx&txtpad=40&txtsize=30&txtclr=fff&txtalign=center&txt64=aHR0cHM6Ly9nbG9vbXNtaXRoLmxvbA&markalign=center%2Ctop&mark64="+btoa("https://assets.imgix.net/~text?w=1000&txtclr=fff&txt="+props.quote+"&w=1000&txtsize=80&txtlead=20&txtpad=100&txtfont=avenir-black&txtalign=center") + "&exp=-10&w=1080",
        props.image.regularUrl +"&usm=20&exp=-10&mark64="+btoa("https://assets.imgix.net/~text?w=1000&txtclr=fff&txt="+props.quote+"&w=1000&txtsize=80&txtlead=0&txtpad=150&txtfont=Impact&txtalign=center") + "&markalign=center%2Cbottom&txt64=aHR0cHM6Ly9nbG9vbXNtaXRoLmxvbA&txtalign=center&txtclr=fff&txtsize=30&txtpad=40&blend64=NjM3NDk3&balph=50&bm=screen&bs=inherit&fit=crop",
        props.image.regularUrl +"&fit=crop&bs=inherit&bm=screen&balph=20&blend64=OTlhOTUx&txtpad=40&txtsize=30&txtclr=fff&txtalign=center&txt64=aHR0cHM6Ly9nbG9vbXNtaXRoLmxvbA&markalign=center%2Ctop&mark64="+btoa("https://assets.imgix.net/~text?w=1000&txtclr=fff&txt="+ props.quote +"&w=1000&txtsize=80&txtlead=20&txtpad=100&txtfont=AmericanTypewriter&txtalign=center") + "&exp=-10&w=1080",
        props.image.regularUrl +"&fit=crop&bs=inherit&bm=screen&balph=20&blend64=OTlhOTUx&txtpad=40&txtsize=30&txtclr=fff&txtalign=center&txt64=aHR0cHM6Ly9nbG9vbXNtaXRoLmxvbA&markalign=center%2Ctop&mark64="+btoa("https://assets.imgix.net/~text?w=1000&txtclr=fff&txt="+props.quote+"&w=1000&txtsize=80&txtlead=20&txtpad=100&txtfont=avenir-black&txtalign=center") + "&exp=-10&w=1080",
        props.image.regularUrl +"&usm=20&exp=-10&mark64="+btoa("https://assets.imgix.net/~text?w=1000&txtclr=fff&txt="+props.quote+"&w=1000&txtsize=80&txtlead=0&txtpad=150&txtfont=Impact&txtalign=center") + "&markalign=center%2Cbottom&txt64=aHR0cHM6Ly9nbG9vbXNtaXRoLmxvbA&txtalign=center&txtclr=fff&txtsize=30&txtpad=40&blend64=NjM3NDk3&balph=50&bm=screen&bs=inherit&fit=crop",
    ];


    // console.log(props)

    const [submitQuote] = usePostSaveQuoteMutation ()
    const {profile} = useJwtToken()

    async function savePost() {
            const partialPost: PartialPost = {
            postProfileId: profile?.profileId as string,
            postPhotoUrl: imgTemplates[props.index],
            postQuote: props.quote,
            postPhotographerName: props.image.userName,
            postPhotographerUrl: props.image.userHtmlLink,
        };



        const result = await submitQuote(partialPost) as MutationResponse;
        console.log(result.data.data.postId)
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