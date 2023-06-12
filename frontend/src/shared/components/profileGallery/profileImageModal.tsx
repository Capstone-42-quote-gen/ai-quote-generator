import {Card, Modal} from "react-bootstrap";
import { useState } from "react";
import {ProfileGallery} from "./ProfileGallery.tsx";

export function ProfileGalleryModal(props: { profileImageSource: string }) {
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
                    <ProfileGallery/>
                </Modal.Body>
            </Modal>
        </>
    )
}