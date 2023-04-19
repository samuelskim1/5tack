import './CategoryDropdown.scss';

const CategoryDropdown = ({ games }) => {
    return (
        <div className="dropdown">
            {games.map(game => <li className="dropdown-item">{game.name}</li>)}
        </div>
    )
}

export default CategoryDropdown;