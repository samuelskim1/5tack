import { useRef, useState } from "react"
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const CategoryButton = ({category}) => {
    
    const currBtn = useRef();
    const parent = document.getElementById('category-nav');
    const btns = document.getElementsByClassName('category-button');

    const history = useHistory();
    const [active, setActive] = useState(false);
    
    const openCategory = () => {
        console.log('opening category...', currBtn.current.innerHTML, active);
        parent.style.pointerEvents = 'none';

        const dist = parent.getBoundingClientRect().left - currBtn.current.getBoundingClientRect().left;
        currBtn.current.style = `--distLeft: ${dist}px;`;
        currBtn.current.style.x = 0 - dist;

        currBtn.current.classList.add('active-category-button');
        for (let btn of btns) {
            if (btn === currBtn.current) {
                continue;
            }
            btn.classList.add('inactive');
        }
        const last = btns[btns.length - 1] === currBtn.current ? btns[btns.length - 2] : btns[btns.length - 1];
        last.addEventListener('animationend', () => {
            for (let btn of btns) {
                if (btn === currBtn.current) continue;
                btn.style.opacity = '0';
            }
            // currBtn.current.addEventListener('animationend', () => {
            //     for (let btn of btns) {
            //         if (btn === currBtn.current) continue;
            //         btn.style.display = 'none';
            //     }
            //     parent.style.justifyContent = 'unset';
            //     setActive(true);
            // }, {once : true})
        }, {once : true})
        currBtn.current.addEventListener('animationend', () => {
            for (let btn of btns) {
                if (btn === currBtn.current) continue;
                btn.style.display = 'none';
            }
            parent.style.justifyContent = 'unset';
            parent.style.pointerEvents = null;
            setActive(true);
        }, {once : true})
    }
    
    const closeCategory = (newPath) => {
        if (newPath) history.push(`/games/${newPath}`);
        parent.style.pointerEvents = 'none';
        console.log('closing category...', currBtn.current.innerHTML, active);

        const games = document.getElementById('game-nav');
        if (games) {
            games.addEventListener('animationstart', () => {
                games.style.pointerEvents = 'none';
                currBtn.current.classList.remove('active-category-button');
                // currBtn.current.removeEventListener('animationend', null);
            }, {once : true})



            currBtn.current.style = `--distLeft: ${currBtn.current.style.x}px`;
            // console.log('currently inline', currBtn.current.style.cssText);
            currBtn.current.classList.add('deactive-category-button');
            currBtn.current.addEventListener('animationend', () => {
                for (let btn of btns) {
                    if (btn === currBtn.current) continue;
                    btn.style = null;
                    btn.classList.remove('inactive');
                    btn.style.animation = 'fadeIn 0.5s';
                }
                
                for (let btn of btns) {
                    btn.style = null;
                }
                    
                currBtn.current.addEventListener('transitionend', () => {
                    console.log('does this transition-end even work bro');
                    currBtn.current.classList.remove('active-category-button');
                    currBtn.current.classList.remove('deactive-category-button');
                    parent.style.pointerEvents = null;
                });
                setActive(false);
                parent.style.justifyContent = null;
                currBtn.current.style.cssText = null;
            }, {once : true})

            games.style.animation = 'fadeOut 0.5s';
            games.addEventListener('animationend', () => {
            games.style.display = 'none';
                
            })
        }
    }

    return (

        <>
        <div onMouseDown={active ? () => closeCategory('') : openCategory} className={`style-button category-button`} ref={currBtn} >
            <p>{category.name.split('$')[0]}</p>
        </div>
        {active &&
        <div id="game-nav">
            {category.game_id.map((game, i) =>
                <Link className={`style-button game-button`} key={i}
                to={`/games/${game.nameURL}`}
                onMouseDown={() => closeCategory(game.nameURL)}
                >
                        {game.name}
                </Link>
            )}
            <p onMouseDown={() => closeCategory('')} id="x-button" className="style-button game-button"><i className="fa-solid fa-xmark"></i></p>
        </div>}
        </>
        
    )
}

export default CategoryButton;