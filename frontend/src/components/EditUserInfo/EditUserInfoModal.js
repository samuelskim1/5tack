import { useState } from 'react';
import { Modal } from "../../context/modal";
import EditUserInfoForm from './EditUserInfoForm';
import '../SessionForms/SessionForm.scss';

const EditUserInfoModal = () => {
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
          <EditUserInfoForm setEdit={setEdit} />
        </Modal>
      )}
    </>
  );
};

export default EditUserInfoModal;
