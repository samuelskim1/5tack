import { useState } from 'react';
import { Modal } from "../../context/modal";
import UpdatePostForm from './UpdatePostForm';

const UpdatePostModal = ({ post, type }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='update-post-modal-holder'>
      <div
        className='update-post-modal'
        onClick={() => setShowModal(true)}
      >
        <i className="fa-solid fa-pen"></i>
      </div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)} >
          <UpdatePostForm post={post} setShowModal={setShowModal} type={type}/>
        </Modal>
      )}
    </div>
  );
};

export default UpdatePostModal;
