import './SplashBox.scss';

const SplashBox = ({ title, text }) => {
    return (
        <div className="splash-box">
            <p className="box-title">{title}</p>
            <p className="box-text">{text}</p>
        </div>
    )
}

export default SplashBox;