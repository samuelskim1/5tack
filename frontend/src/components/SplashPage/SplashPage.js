import UnauthNav from "../UnauthNav/UnauthNav";
import './SplashPage.scss'

const SplashPage = () => {

  return (
    <div id="splash-container">
      <UnauthNav />

      <div id="splash-cards-container">
        <section className="splash-card posts-card">
          <div className="splash-card-content">
            <h3>Connect with others to create the most stacked team!</h3>

            <p>
              Craft the ultimate gaming experience by creating posts to find teammates with similar interests and gaming style.
              Feeling shy? No problem! Browse through posts made by other users and leave comments.
            </p>
          </div>
        </section>

        <section className="splash-card reviews-card">
          <div className="splash-card-content">
            <h3>Promote accountability within gaming communities!</h3>

            <p>
              Are ur friends toxic??//? u caam eot the rihgt place xd
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default SplashPage;