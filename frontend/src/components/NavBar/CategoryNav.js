import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux"
import { fetchCategories } from "../../store/categories";
import CategoryDropdown from "../CategoryDropdown/CategoryDropdown";

const CategoryNav = () => {
    const dispatch = useDispatch();
    const categories = useSelector(state => Object.values(state.categories));
    const [show, setShow] = useState(
        Array(categories.length).fill(false)
    );

    useEffect(() => {
        dispatch(fetchCategories());
    }, []);


    const showDrop = (index) => {
        setShow(prev => {
            const next = [ ...prev ];
            next[index] = true;
            return next;
        })
    };

    const hideDrop = (index) => {
        setShow(prev => {
            const next = [ ...prev ];
            next[index] = false;
            return next;
        })
    }



    if (!categories) return null;

    return (
        <>
            {categories.map((cat, i) =>
                <li 
                    className="category-item" 
                    onMouseUp={() => showDrop(i)}  
                    key={i} 
                >
                    {cat.name.split("$")[0]}
                        {show[i] && 
                            <CategoryDropdown 
                                show={show[i]} 
                                category={cat} 
                                hideDrop={() => hideDrop(i)} 
                                idx={i} 
                                />
                        }
                </li>
            )}
        </>
    )
}

export default CategoryNav;