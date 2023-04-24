import { useState } from 'react';
import { Modal } from "../../context/modal";
import CreateReviewForm from './CreateReviewForm';

const CreateReviewModal = ({ user }) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className='create-review-modal-holder'>
            <div
                className='create-review-modal'
                onClick={() => setShowModal(true)}
            >
                Review
            </div>

            {showModal && (
                <Modal onClose={() => setShowModal(false)} >
                    <CreateReviewForm user={user} setShowModal={setShowModal} />
                </Modal>
            )}
        </div>
    );
};

export default CreateReviewModal;
