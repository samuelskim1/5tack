import { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch } from 'react-redux';
import { Modal } from "../../context/modal";
import './SessionForm.css';

const LoginModal = ({ onClose }) => {

  return (
    <Modal>
      <div id="session-form-container">
        hi
      </div>
    </Modal>
  );
};

export default LoginModal;
