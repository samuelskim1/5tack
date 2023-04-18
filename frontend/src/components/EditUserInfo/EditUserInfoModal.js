import { useState } from 'react';
import { Modal } from "../../context/modal";
import EditUserInfoForm from './EditUserInfoForm';
import '../SessionForms/SessionForm.scss';

const EditUserInfoModal = ({ currentUser }) => {
  const [showEdit, setEdit] = useState(false);

  return (
    <>
      <div
        id="edit-profile-btn"
        onClick={() => setEdit(true)}
      >
        Edit Profile
      </div>

      {showEdit && (
        <Modal onClose={() => setEdit(false)} >
          <EditUserInfoForm currentUser={currentUser} setEdit={setEdit} />
        </Modal>
      )}
    </>
  );
};

export default EditUserInfoModal;
