import {Card, Col, Image, Modal, Row} from "react-bootstrap";
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
            <Row>
              <Col lg={3} xs={6} className="py-4 m-5">
               <Image className={"img-fluid"}
                         src={profilePost.postPhotoUrl}
                         onClick={openModal}/>
              </Col>
            </Row>
               <Modal show={showModal}
                      onHide={closeModal}
                      onClick={closeModal}>
                  <Modal.Body>
                            <Card.Img className={'quote-image img-fluid'}
                            src={profilePost.postPhotoUrl}
                            alt="Quote Image"/>
                 </Modal.Body>
              </Modal>
    </>
  )
}