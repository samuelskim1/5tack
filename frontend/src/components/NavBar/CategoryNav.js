import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux"
import { fetchCategories } from "../../store/categories";
import CategoryDropdown from "../CategoryDropdown/CategoryDropdown";
import { Link } from "react-router-dom";

const CategoryNav = () => {
    const useRef = useRef();
    const dispatch = useDispatch();
    const categories = useSelector(state => Object.values(state.categories));
    const [show, setShow] = useState(false);
    for(let i = 0; i < categories.length; i++) {
        eval('var catitem' + i.to_s + '= useRef;' );
    };


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
                    onClick={() => setShow(cat.name)} 
                    key={i}
                    ref={eval('catitem' + i.to_s)}
                >
                    {cat.name.split("$")[0]}
                    {show === cat.name && 
                        <div className="dropdown">
                            <p className='dropdown-name'>{cat.name.split("$")[1] ? cat.name.split("$")[1] : cat.name.split("$")[0]}</p>
                            <div className='line-divider'/>
                            {cat.game_id.map(game => 
                                <Link to={`/games/${game.nameURL}`}>
                                    <div className="dropdown-item">{game.name}</div>
                                </Link>
                            )}
                        </div>
                    }
                </li>
            </>
            )}
        </>
    )
}

export default CategoryNav;