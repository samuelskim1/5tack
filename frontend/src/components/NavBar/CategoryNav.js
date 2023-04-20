import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux"
import { fetchCategories } from "../../store/categories";
import CategoryDropdown from "../CategoryDropdown/CategoryDropdown";

const CategoryNav = () => {
    const dispatch = useDispatch();
    const dropdown = useRef();
    const categories = useSelector(state => Object.values(state.categories));
    const [show, setShow] = useState(
        Array(categories.length).fill(false)
    );

    useEffect(() => {
        dispatch(fetchCategories());
        console.log(categories);
    }, []);

    // const handleClick = (e) => {
    //     if (!dropdown.current.contains(e.target)) toggleShow()
    // }

    // useEffect(() => {
    //     const outsideClick = e => {
    //         if (show && ref.current && !ref.current.contains(e.target)) {
    //             setShow(false);
    //         }
    //     }
    //     document.addEventListener("mousedown", outsideClick);

    //     return () => {
    //         document.addEventListener("mousedown", outsideClick);
    //     }

    // }, [show])


    const toggleShow = (index) => {
        setShow(prev => {
            const next = [ ...prev ];
            next[index] = !next[index];
            return next;
        })
    };



    if (!categories) return null;

    return (
        <>
            {categories.map((cat, i) =>
                <li 
                    className="category-item" 
                    onClick={() => toggleShow(i)}  
                    key={i} 
                >
                    {cat.name.split("$")[0]}
                    <div className="dropdown" ref={dropdown} >
                        {show[i] && 
                            <CategoryDropdown show={show[i]} category={cat} toggleShow={() => toggleShow(i)} dropdown={dropdown} />
                        }
                    </div>
                </li>
            )}
        </>
    )
}

export default CategoryNav;