import {Card, Modal} from "react-bootstrap";
import { useState } from "react";

export function ProfileGallery(props: { profileImageSource: string }) {
    const { profileImageSource } = props;
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <Card>
                <Card.Img variant='' src={profileImageSource} onClick={openModal} />
            </Card>

            <Modal show={showModal} onHide={closeModal} className={' img-fluid'} onClick={closeModal}>
                <Modal.Body>
                    <img src={profileImageSource} alt="Profile Image" className={'profile-image-modal img-fluid'} />
                </Modal.Body>
                {/*<Modal.Footer>*/}
                {/*</Modal.Footer>*/}
            </Modal>
        </>
    )
}