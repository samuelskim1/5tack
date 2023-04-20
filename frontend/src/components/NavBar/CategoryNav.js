import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux"
import { fetchCategories } from "../../store/categories";
import CategoryDropdown from "../CategoryDropdown/CategoryDropdown";
import { Link } from "react-router-dom";

const CategoryNav = () => {
    const dispatch = useDispatch();
    const categories = useSelector(state => Object.values(state.categories));
    // const [show, setShow] = useState(false);

    useEffect(() => {
        dispatch(fetchCategories());
    }, []);

    // useEffect(() => {
    //     const outsideClick = e => {
    //         if (cat.current && !cat.current.contains(e.target)) {
    //             setShow(false);
    //         }
    //     }
    //     document.addEventListener("mousedown", outsideClick);

    //     return () => {
    //         document.addEventListener("mousedown", outsideClick);
    //     }

    // }, [show])


    // useEffect(() => {
    //     if (!show) return;

    //     const clickHide = (e) => {
    //         if (catitem?.current?.contains(e.target)) return;
    //         setShow(false);
    //     };

    //     document.addEventListener('click', clickHide);

    //     return () => document.removeEventListener('click', clickHide);
    // }, [setShow])


    if (!categories) return null;

    // const handleClick = () => {
    //     setShow();
    // }
    // console.log(show);
    return (
        <>
            {categories.map((cat, i) =>
            <>
                <li 
                    className="category-item" 
                    key={i}
                    id={cat.name.split("$")[0]}
                >
                    {/* {cat.name.split("$")[0]} */}
                    {/* {show === cat.name &&  */}
                        <CategoryDropdown category={cat} />
                    {/* } */}
                </li>
            </>
            )}
        </>
    )
}

export default CategoryNav;