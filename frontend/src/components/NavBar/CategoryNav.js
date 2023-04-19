import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { fetchCategories } from "../../store/categories";
import CategoryDropdown from "../CategoryDropdown/CategoryDropdown";

const CategoryNav = () => {

    const dispatch = useDispatch();
    const categories = useSelector(state => Object.values(state.categories));
    const [show, setShow] = useState(false);

    useEffect(() => {
        dispatch(fetchCategories());
        console.log(categories);
    }, []);

    if (!categories) return null;

    const handleClick = () => {
        setShow(!show);
    }

    return (
        <>
            {categories.map(cat =>
            <>
                <li className="category-item" onClick={handleClick}>
                    {cat.name.split("$")[0]}
                    {show && <CategoryDropdown games={cat.game_id} />}
                </li>
            </>
            )}
        </>
    )
}

export default CategoryNav;