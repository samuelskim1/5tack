import './CategoryDropdown.scss';

const CategoryDropdown = ({ category }) => {
    return (
        <div className="dropdown">
            <p className='dropdown-name'>{category.name.split("$")[1] ? category.name.split("$")[1] : category.name.split("$")[0]}</p>
            <div className='line-divider'/>
            {category.game_id.map(game => <li className="dropdown-item">{game.name}</li>)}
        </div>
    )
}

export default CategoryDropdown;