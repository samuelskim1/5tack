// import 

const SplashCard = ({ info }) => {

    return (
      <div className="splash-section">
        <div className="splash-section-card">
          <p>{info.title}</p>
          <p>{info.text}</p>
        </div>
        <div className="splash-section-card">
          <img src={info.image}/>
        </div>
      </div>
    )
}

export default SplashCard;