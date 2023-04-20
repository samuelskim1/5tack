import { useState } from 'react';
import { Modal } from "../../context/modal";
import CreatePostForm from './CreatePostForm';

const CreatePostModal = ({ game }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='create-post-modal-holder'>
      <div
        className='create-post-modal'
        onClick={() => setShowModal(true)}
      >
        Create new Form
      </div>

      {showModal && (
        <Modal onClose={() => setShowModal(false)} >
          <CreatePostForm game={game} setShowModal={setShowModal} />
        </Modal>
      )}
    </div>
  );
};

export default CreatePostModal;
