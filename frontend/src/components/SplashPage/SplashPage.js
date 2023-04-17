
import { useEffect, useRef } from 'react';
import './SplashPage.css';

const SplashPage = () => {
  const stack1 = useRef();
  const stack2 = useRef();
  const stack3 = useRef();
  const stack4 = useRef();
  const stack5 = useRef();
  const description = useRef();

  useEffect(() => {
    setTimeout(() => {
      stack1?.current?.classList.add('stacked');
      stack2?.current?.classList.add('stacked');
      stack3?.current?.classList.add('stacked');
      stack4?.current?.classList.add('stacked');
      stack5?.current?.classList.add('stacked');
    }, 0)

    setTimeout(() => {
      description?.current?.classList.add('fade-in')
    }, 0)
  }, []);

  return (
    <div id="splash-page-container">


      <div id="splash-stack-1" ref={stack1}>5tack</div>
      <div id="splash-stack-2" ref={stack2}>5tack</div>
      <div id="splash-stack-3" ref={stack3}>5tack</div>
      <div id="splash-stack-4" ref={stack4}>5tack</div>
      <div id="splash-stack-5" ref={stack5}>5tack</div>

      <div id="splash-description" ref={description}>
        Welcome to Five Stack, where gamers connect to create the most stacked team!
      </div>
    </div>
  );
};

export default SplashPage;