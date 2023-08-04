import { useEffect, useRef } from "react";
import UnauthNav from "../UnauthNav/UnauthNav";
import './SplashPage.scss'

const SplashPage = () => {
  const postsCard = useRef();
  const reviewsCard = useRef();

  useEffect(() => {
    setTimeout(() => {
      postsCard?.current?.classList.remove('hidden');
      postsCard?.current?.classList.add('animated');
      reviewsCard?.current?.classList.remove('hidden');
      reviewsCard?.current?.classList.add('animated');
    }, 2200)
  }, [])

  return (
    <div id="splash-container">
      <UnauthNav />

      <div id="splash-cards-container">
        <section className="splash-card posts-card hidden fadeInUp" ref={postsCard}>
          <div className="splash-card-content">
            <h3>Connect with others to create the most stacked team!</h3>

            {/* <img></img> */}

            <p>
              Craft the ultimate gaming experience by creating posts or comments to find teammates with similar interests and gaming style!
            </p>
          </div>
        </section>

        <section className="splash-card reviews-card hidden fadeInUp" ref={reviewsCard}>
          <div className="splash-card-content">
            <h3>Promote accountability within gaming communities!</h3>

            {/* <img></img> */}

            <p>
              Tired of toxic players and poorly moderated platforms? Us too. Eliminate the fear of a random uncooperative teammate by leaving reviews on a profile to let others know if you enjoyed gaming with that person!
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default SplashPage;