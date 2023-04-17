import { useState } from 'react';
import { Modal } from "../../context/modal";
import LoginForm from './LoginForm';
import './SessionForm.css';

const LoginModal = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <div
        id="login-btn"
        onClick={() => setShowLogin(true)}
      >
        Log in
      </div>

      {showLogin && (
        <Modal onClose={() => setShowLogin(false)} >
          <LoginForm />
        </Modal>
      )}
    </>
  );
};

export default LoginModal;
