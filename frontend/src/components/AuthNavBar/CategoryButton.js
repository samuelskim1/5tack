import { useRef, useState } from "react"
import { Link } from "react-router-dom";
// import styled, {keyframes} from 'styled-components';

const CategoryButton = ({category}) => {

    const [active, setActive] = useState(false);
    // const [show, setShow] = useState(false);
    const currBut = useRef();

    const animate = () => {
        const holder = document.getElementById('category-nav').getBoundingClientRect().left;
        // console.log('hash', currBut.current.getBoundingClientRect());



        const xLocation = holder - currBut.current.getBoundingClientRect().left;
        console.log('this is where the element is located', xLocation);
        const test = document.getElementsByClassName('category-button');

        currBut.current.style.cssText = `--distLeft: ${xLocation}px;`;
        
        setActive(!active)

        for (let but of test) {
            if (but.innerText !== currBut.current.innerText) but.classList.add('inactive');
        }
        // console.log(test);
        // console.log(test[9].classList);

        const otherButs = document.getElementsByClassName('inactive');
        for (let but of otherButs) {
            // FOR COLLAPSING EFFECT
            // const thisXLocation = holder - but.getBoundingClientRect().left;
            // but.style.cssText = `--distLeft: ${thisXLocation}px;`;

            but.addEventListener('animationend', () => {
                but.style.display = "none";
            })
        }

        const games = document.getElementsByClassName('game-button');
        currBut.current.addEventListener('animationend', () => {
            for (let game of games) {
                game.style.display = "block";
            }
        })

        // fetch the elements in here?
        // iterate through them to create and append new elements
        // remember that they're links
        // category.game_id.map((game, i) =>
        //     <Link key={i}
        //         to={`/games/${game.nameURL}`}
        //     >
        //     </Link>
        // )
    }

    return (
        <>
        <div onClick={e => animate(e)} ref={currBut} className={`style-button category-button ${active ? 'active-category-button' : ''}`} >
            <p>{category.name.split('$')[0]}</p>
        </div>
        {active && category.game_id.map((game, i) =>
            <Link className='style-button game-button' key={i}
                to={`/games/${game.nameURL}`}
                >
                    {game.name}
            </Link>
        )}
        </>
        
    )
}

export default CategoryButton;