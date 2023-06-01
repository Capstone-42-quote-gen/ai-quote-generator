import {Navigation} from "./shared_components/NavBar.tsx";
import {ImageContent} from "./shared_components/ImageContent.tsx";

export function Profile() {
    return (
        <>
            <Navigation/>
<<<<<<< Updated upstream
            <ImageContent/>
            <h1>Profile</h1>
=======
            <Container className={'my-3'}>
                <Row md={12} className={'g-5'}>
                    <Col>
                        <Image src={logo} className={'ProfileImage image-fluid'}/>
                    </Col>
                </Row>
                <Row md={12}>
                    <Col md={6}>
                        <h4>About me</h4>
                        <p>Something about me.Nullus pisces est maior quam amicitia inter Marlin et Dory. In via sua, per mundum submari, rebus mirabilibus plena, inveniunt multos habitatores marinos.
                        </p>
                    </Col>
                </Row>
                <Row md={12}>
                    <Col md={3}></Col>
                </Row>
            </Container>
            <Container>
                <Row>
                </Row>
            </Container>
            <ImageOnly/>
>>>>>>> Stashed changes
        </>
    )
}