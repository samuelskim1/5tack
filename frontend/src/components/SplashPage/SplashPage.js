import { useEffect, useRef } from "react";
import UnauthNav from "../UnauthNav/UnauthNav";
import './SplashPage.scss';
import SplashCard from "./SplashCard";

const SplashPage = () => {
  // const postsCard = useRef();
  // const reviewsCard = useRef();

  // useEffect(() => {
  //   const fadeIn = () => {
  //     setTimeout(() => {
  //       postsCard?.current?.classList.remove('hidden');
  //       postsCard?.current?.classList.add('fade-in');
  //       reviewsCard?.current?.classList.remove('hidden');
  //       reviewsCard?.current?.classList.add('fade-in');
  //     }, 2200)
  //   }

  //   fadeIn();

  //   return () => {
  //     clearTimeout(fadeIn);
  //   }
  // }, [])

  
  const splashContent = [
    {
      title: 'title about profile',
      text: 'Something something and more stuff about the stuff wow stuff and stuff and yeah about this length?',
      image: '../../../big-logo.png'
    }, {
      title: 'title about post',
      text: 'Something something and more stuff about the stuff wow stuff and stuff and yeah about this length?',
      image: '../../../big-logo.png'
    }, {
      title: 'title about comment',
      text: 'Something something and more stuff about the stuff wow stuff and stuff and yeah about this length?',
      image: '../../../big-logo.png'
    }, {
      title: 'title about reviews',
      text: 'Something something and more stuff about the stuff wow stuff and stuff and yeah about this length?',
      image: '../../../big-logo.png'
    },    
  ];

  return (
    <div id="splash-page">
  
  <div className="splash-section">
        <div className="splash-section-card">
          <p>the cool and catchy title that's about ye long</p>
          <p>The description about the purpose of our site. For them loser adult gamers whose friends dont have time to play with them anymore. You can let people know what kind of gaming experience you’re looking for. Look for players in your favorite games by posting or commenting. And what a 5 stack is...</p>
          {/* <p className="style-button">Sign Up Now</p> */}
        </div>
        <div className="splash-section-card">
          <p>idk what's gonna happen here still tbh</p>
          {/* <button />
          <button />
          <button />
          <button /> */}
        </div>
      </div>

      {splashContent.map((section, i) => (
        // console.log(section, i)
        <SplashCard info={section} key={i}/>
      ))}


      {/* <div id="splash-container">

        <div id="splash-cards-container">
          <section className="splash-card posts-card">
            <div className="splash-card-content hidden">

            </div>
          </section>

          <section className="splash-card reviews-card">
            <div className="splash-card-content hidden">

            </div>
          </section>
        </div>
      </div> */}

    </div>
  )
}

export default SplashPage;