import { useEffect, useRef } from 'react';
import './CategoryDropdown.scss';
import { Link } from 'react-router-dom';

const CategoryDropdown = ({ category, hideDrop, show, idx }) => {
    const dropdown = useRef();

    
    useEffect(() => {
        const handleClick = (e) => {
            if (!dropdown.current.contains(e.target)) {
                hideDrop(idx);
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
                <Link key={i}
                        to={`/games/${game.nameURL}`}
                        onClick={() => hideDrop(idx)}
                        >
                    <div className="dropdown-item" >
                        {game.name} 
                    </div>
                </Link>
            )}
        </div>
    )
}

export default CategoryDropdown;