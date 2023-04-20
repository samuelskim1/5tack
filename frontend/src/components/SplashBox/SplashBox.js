import { useEffect, useRef } from 'react';
import './SplashBox.scss';

const SplashBox = ({ title, text }) => {
    const box = useRef();

    useEffect(() => {
        setTimeout(() => {
            box.current.classList.add('fade-in');
        }, 0)
    }, [])

    return (
        <div className="splash-box" ref={box}>
            <p className="box-title">{title}</p>
            <p className="box-text">{text}</p>
        </div>
    )
}

export default SplashBox;