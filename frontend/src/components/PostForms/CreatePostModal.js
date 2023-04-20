import { useState } from 'react';
import { Modal } from "../../context/modal";
import CreatePostForm from './CreatePostForm';
// import './SessionForm.scss';

const CreatePostModal = ({ game }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        onClick={() => setShowModal(true)}
      >
        Create new Form
      </div>

      {showModal && (
        <Modal onClose={() => setShowModal(false)} >
          <CreatePostForm game={game} />
        </Modal>
      )}
    </>
  );
};

export default CreatePostModal;
