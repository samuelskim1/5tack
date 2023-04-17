import { useState } from 'react';
import { Modal } from "../../context/modal";
import SignupForm from './SignupForm';
import './SessionForm.css';

const SignupModal = () => {
  const [showSignup, setShowSignup] = useState(false);

  return (
    <>
      <div
        id="signup-btn"
        onClick={() => setShowSignup(true)}
      >
        Sign up
      </div>

      {showSignup && (
        <Modal onClose={() => setShowSignup(false)} >
          <SignupForm />
        </Modal>
      )}
    </>
  );
};

export default SignupModal;