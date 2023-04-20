import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux"
import { fetchCategories } from "../../store/categories";
import CategoryDropdown from "../CategoryDropdown/CategoryDropdown";

const CategoryNav = () => {

    const ref = useRef();
    const dispatch = useDispatch();
    const categories = useSelector(state => Object.values(state.categories));
    const [show, setShow] = useState(false);

    useEffect(() => {
        dispatch(fetchCategories());
        console.log(categories);
    }, []);

    useEffect(() => {
        const outsideClick = e => {
            if (show && ref.current && !ref.current.contains(e.target)) {
                setShow(false);
            }
        }
        document.addEventListener("mousedown", outsideClick);

        return () => {
            document.addEventListener("mousedown", outsideClick);
        }

    }, [show])

    if (!categories) return null;

    // const handleClick = () => {
    //     setShow();
    // }
    // console.log(show);
    return (
        <>
            {categories.map(cat =>
            <>
                <li className="category-item" onClick={() => setShow(cat.name)} ref={ref}>
                    {cat.name.split("$")[0]}
                    {show === cat.name && <CategoryDropdown category={cat} />}
                </li>
            </>
            )}
        </>
    )
}

export default CategoryNav;