import { useState } from 'react';
import { Modal } from "../../context/modal";
import UpdateReviewForm from './UpdateReviewForm';

const UpdateReviewModal = ({ review }) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className='update-review-modal-holder'>
            <div
                className='update-review-modal'
                onClick={() => setShowModal(true)}
            >
                <i class="fa-solid fa-pen"></i>
            </div>
            {showModal && (
                <Modal onClose={() => setShowModal(false)} >
                    <UpdateReviewForm review={review} setShowModal={setShowModal} />
                </Modal>
            )}
        </div>
    );
};

export default UpdateReviewModal;