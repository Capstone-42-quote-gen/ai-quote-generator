import {Card, Col, Image, Modal} from "react-bootstrap";
import {useParams} from "react-router-dom";
import {useState} from "react";
import {Post} from "../../interfaces/Post";
import {useGetPostsByPostProfileIdQuery} from "../../../store/apis";

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
        const { data: profilePosts, isLoading } = useGetPostsByPostProfileIdQuery(postProfileId as string)

        console.log(profilePosts)
        if ( isLoading || profilePost === undefined ) {
            return <>

            </>
        }
            return (
                <>

              <Col xl={2} md={3} xs={5} className="py-4 m-1">
               <Image className={"img-fluid"}
                         src={profilePost.postPhotoUrl}
                         onClick={openModal}/>
              </Col>



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