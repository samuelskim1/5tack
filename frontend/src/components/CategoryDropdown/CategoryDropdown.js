import { useEffect, useRef } from 'react';
import './CategoryDropdown.scss';
import { Link } from 'react-router-dom';

const CategoryDropdown = ({ category, toggleShow, dropdown, show }) => {


    
    useEffect(() => {
        if (show) return;
        
        const handleClick = (e) => {
            if (!dropdown.current.contains(e.target)) toggleShow()
        }

        document.addEventListener('click', handleClick)

        return () => document.removeEventListener('click', handleClick)
    }, [show])

    return (
        <>
            <p className='dropdown-name'>{category.name.split("$")[1] ? category.name.split("$")[1] : category.name.split("$")[0]}</p>
            <div className='line-divider'/>
            {category.game_id.map((game, i) => 
                <div className="dropdown-item" key={i}>
                    <Link to={`/games/${game.nameURL}`}>
                        {game.name} 
                    </Link>
                </div>
            )}
        </>
    )
}

export default CategoryDropdown;