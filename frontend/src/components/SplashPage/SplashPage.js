import { useEffect, useRef } from 'react';
import LoginModal from '../SessionForms/LoginModal';
import SignupModal from '../SessionForms/SignupModal';
import './SplashPage.scss';
import '../SessionForms/SessionForm.scss';

const SplashPage = () => {
  const stack1 = useRef();
  const stack2 = useRef();
  const stack3 = useRef();
  const stack4 = useRef();
  const stack5 = useRef();
  const description = useRef();
  const bar = useRef();
  

  useEffect(() => {

    setTimeout(() => {
      stack1?.current?.classList.add('stacked');
      stack2?.current?.classList.add('stacked');
      stack3?.current?.classList.add('stacked');
      stack4?.current?.classList.add('stacked');
      stack5?.current?.classList.add('stacked');
      description?.current?.classList.add('fade-in')
      bar?.current?.classList.add('fade-in');
    }, 0)

  }, []);

  return (
    <div id="splash-page-container">


      <div id="splash-stack-1" ref={stack1}>5TACK</div>
      <div id="splash-stack-2" ref={stack2}>5TACK</div>
      <div id="splash-stack-3" ref={stack3}>5TACK</div>
      <div id="splash-stack-4" ref={stack4}>5TACK</div>
      <div id="splash-stack-5" ref={stack5}>5TACK</div>

      <div id="splash-bottom-container" ref={bar}>
        <div id="splash-description" ref={description}>
          Welcome to Five Stack, where gamers connect to create the most stacked team!
        </div>

        <div id="splash-btn-container">
          <LoginModal />
          <SignupModal />
        </div>
      </div>
    </div>
  );
};

export default SplashPage;