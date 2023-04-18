import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { fetchCategories } from "../../store/categories";

const CategoryNav = () => {

    const dispatch = useDispatch();
    const categories = useSelector(state => Object.values(state.categories));

    useEffect(() => {
        dispatch(fetchCategories());
        console.log(categories);
    }, []);

    if (!categories) return null;

    return (
        <>
            {categories.map(cat => <li>{cat.name.split(" ")[0]}</li>)}
        </>
    )
}

export default CategoryNav;