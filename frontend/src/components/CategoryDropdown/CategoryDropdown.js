import { useEffect, useRef } from 'react';
import './CategoryDropdown.scss';
import { Link } from 'react-router-dom';

const CategoryDropdown = ({ category, toggleShow, show, idx }) => {
    const dropdown = useRef();

    
    useEffect(() => {
        // if (!show) return;
        const links = document.getElementsByClassName('dropdown-item');
        console.log(links);
        
        const handleClick = (e) => {
            if (!dropdown.current.contains(e.target)) {
                toggleShow(idx);
                console.log('sup kaiter');
            }
        }


        document.addEventListener('mousedown', handleClick)

        return () => document.removeEventListener('mousedown', handleClick)
    }, [show])

    return (
        <div className='dropdown' ref={dropdown}>
            <p className='dropdown-name'>
                {category.name.split("$")[1] ? category.name.split("$")[1] : category.name.split("$")[0]}
            </p>
            <div className='line-divider'/>
            {category.game_id.map((game, i) => 
                <div className="dropdown-item" key={i}>
                    <Link to={`/games/${game.nameURL}`}>
                        {game.name} 
                    </Link>
                </div>
            )}
        </div>
    )
}

export default CategoryDropdown;