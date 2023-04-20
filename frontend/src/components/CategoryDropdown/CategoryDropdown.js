import { Link } from 'react-router-dom';
import './CategoryDropdown.scss';
import { useEffect } from 'react';
import { useRef } from 'react';

const CategoryDropdown = ({ category, catitem, show, setShow }) => {
    const ref = useRef();

    // useEffect(() => {
    //     if (!show) return;

    //     const clickHide = (e) => {
    //         if (ref?.current?.contains(e.target)) return;
    //         setShow(false);
    //     };

    //     document.addEventListener('click', clickHide);

    //     return () => document.removeEventListener('click', clickHide);
    // }, [setShow])

    return (
        <div className="dropdown" ref={ref} >
            <p className='dropdown-name'>{category.name.split("$")[1] ? category.name.split("$")[1] : category.name.split("$")[0]}</p>
            <div className='line-divider'/>
            {category.game_id.map(game => 
                <Link to={`/games/${game.nameURL}`}>
                    <li className="dropdown-item">{game.name}</li>
                </Link>
            )}
        </div>
    )
}

export default CategoryDropdown;