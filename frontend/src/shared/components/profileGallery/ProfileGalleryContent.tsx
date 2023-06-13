import {Card, Col, Container, Modal, Row} from "react-bootstrap";
import {useParams} from "react-router-dom";
import {useGetPostByPostProfileIdQuery} from "../../../store/apis";
import {useState} from "react";
import {Post} from "../../interfaces/Post";

interface ProfileGalleryContentProps {
    profilePost: Post
}

export function ProfileGalleryContent(props: ProfileGalleryContentProps) {
    const { profilePost } = props
    console.log(profilePost)

    const [showModal, setShowModal] = useState(false);
    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

        const { postProfileId } = useParams()
        const { data: profilePosts, isLoading } = useGetPostByPostProfileIdQuery(postProfileId as string)

        console.log(profilePosts)
        if ( isLoading || profilePost === undefined ) {
            return <>

            </>
        }
            return (
                <>
                  <Container>
                        <Row>
                <Col xs={4} lg={4}>
               <Card>
               <Card.Img variant=''
                         src={profilePost.postPhotoUrl}
                         onClick={openModal} />
               </Card>

               <Modal show={showModal}
                      onHide={closeModal}
                      className={' img-fluid'}
                      onClick={closeModal}>
                  <Modal.Body>
                    <div className="d-flex justify-content-center rounded my-2">
                      <Card className={'quote-image-card'}>
                        <Card.Body className="text-center">
                           <Row className={'justify-content-center'}>
                            <Col>
                            <Card.Img className={'quote-image img-fluid'}
                            src={profilePost.postPhotoUrl}
                            alt="Quote Image"/>
                            </Col>
                          </Row>
                        </Card.Body>
                      </Card>
                    </div>
                 </Modal.Body>
              </Modal>
            </Col>
          </Row>
        </Container>
    </>
  )
}