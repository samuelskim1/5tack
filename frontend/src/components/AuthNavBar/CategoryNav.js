import { useDispatch, useSelector } from "react-redux";
import CategoryButton from "./CategoryButton";
import { useEffect } from "react";
import { fetchCategories } from "../../store/categories";
import { fetchGames } from "../../store/games";
import { fetchAllUsers } from "../../store/users";
import { fetchAllComments } from "../../store/comments";

const CategoryNav = () => {
    const dispatch = useDispatch();
    const categories = useSelector(state => Object.values(state.categories));

    useEffect(() => {
        dispatch(fetchAllUsers());
        dispatch(fetchCategories());
        dispatch(fetchGames());
        dispatch(fetchAllComments());
    }, []);

    if (!categories) return null;

    return (
        <div id="category-nav">
            {categories.map((cat, i) => 
                <CategoryButton category={cat} key={i} />
            )}
        </div>
    )
}

export default CategoryNav;