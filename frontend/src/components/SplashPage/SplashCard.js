// import 

const SplashCard = ({ info, index }) => {

    return (
      <div id={`section-${index}`} className="splash-section">
        <div className="splash-section-card">
          <p>{info.title}</p>
          <p>{info.text}</p>
        </div>
        <div className="splash-section-card">
          <video autoPlay loop muted>
            <source src={info.image} type="video/mp4" />
          </video>
        </div>
      </div>
    )
}

export default SplashCard;