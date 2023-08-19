import { useState } from 'react';
import { Modal } from "../../context/modal";
import UpdateReviewForm from './UpdateReviewForm';


const UpdateReviewButton = ({ review }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='update-post-modal-holder'>
      <div 
        className='update-post-modal'
        onClick={() => setShowModal(true)}
        >
        <i className='fa-solid fa-pen' />
      </div>

      {showModal && (
        <Modal onClose={() => setShowModal(false)} >
          <UpdateReviewForm review={review} setShowModal={setShowModal} />
        </Modal>
      )}
    </div>
  )
};

export default UpdateReviewButton;