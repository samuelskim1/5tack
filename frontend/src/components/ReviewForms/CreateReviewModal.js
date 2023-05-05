import { useState } from 'react';
import { Modal } from "../../context/modal";
import CreateReviewForm from './CreateReviewForm';

const CreateReviewModal = ({ user }) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div
                className='edit-profile-btn'
                onClick={() => setShowModal(true)}
            >
                Make a Review
            </div>

            {showModal && (
                <Modal onClose={() => setShowModal(false)} >
                    <CreateReviewForm user={user} setShowModal={setShowModal} />
                </Modal>
            )}
        </>
    );
};

export default CreateReviewModal;
