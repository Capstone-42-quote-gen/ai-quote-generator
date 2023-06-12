import {Col, Container, Row} from "react-bootstrap";
import {ProfileGalleryImage} from "./ProfileGalleryImage";
import {useParams} from "react-router-dom";
import {useGetPostByPostIdQuery} from "../../../store/apis.ts";


export function ProfileGallery(){
        const { postId } = useParams()
        const { data: post, isLoading } = useGetPostByPostIdQuery(postId as string)
        console.log(post)
        if ( isLoading || post === undefined ) {
            return <>

            </>
            return (
                <>
                    <Container className={'my-3'}>
                        <Row md={12} className={'g-5'}>
                            <Col>
                                {/*<Profile/>*/}
                            </Col>
                        </Row>
                    </Container>
                    <Container className={'my-3'}>
                        <Row>
                            <Col md={6}>
                                <br/>
                                <h4>About me</h4>
                                <p>Something about me.Nullus pisces est maior quam amicitia inter Marlin et Dory. In via
                                    sua,
                                    per mundum submari, rebus mirabilibus plena, inveniunt multos habitatores marinos.
                                </p>
                                <br/>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={3}></Col>
                        </Row>
                    </Container>
                    <Container>
                        <Row>
                            <Col xs={4} lg={4}>
                                <ProfileGalleryImage/>
                            </Col>
                        </Row>
                    </Container>

                </>
            )
        }
}