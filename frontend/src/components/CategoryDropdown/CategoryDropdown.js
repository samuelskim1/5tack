import { Link } from 'react-router-dom';
import './CategoryDropdown.scss';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';

const CategoryDropdown = ({ category }) => {
    const [show, setShow] = useState(false);
    const dropdown = useRef();

    // useEffect(() => {
    //     if (!show) return;
        
    //     const main = document.querySelector('.main-content');

    //     const clickHide = (e) => {
    //         if (main.contains(e.target)) setShow(false);
    //         if (dropdown.current.contains(e.target)) return;
    //         setShow(false);
    //     };

    //     document.addEventListener('click', clickHide);

    //     return () => document.removeEventListener('click', clickHide);
    // }, [setShow])

    return (
        <>
            <p 
                onClick={(e) => {setShow(false); setShow(category.name.split("$")[0])}} 
                >
                {category.name.split("$")[0]}
            </p>
            <div className="dropdown" ref={dropdown}>
                {show === category.name.split("$")[0] && (
                    <>
                        <p className='dropdown-name'>{category.name.split("$")[1] ? category.name.split("$")[1] : category.name.split("$")[0]}</p>
                        <div className='line-divider'/>
                        {category.game_id.map((game, i) => 
                            <Link to={`/games/${game.nameURL}`} key={i} >
                                <div 
                                    className="dropdown-item"
                                    onClick={() => setShow(false)}
                                >
                                    {game.name}
                                </div>
                            </Link>
                        )}
                    </>
                )}
            </div>
        </>
    )
}

export default CategoryDropdown;