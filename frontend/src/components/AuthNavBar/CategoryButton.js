import { useRef, useState } from "react"
import { Link } from "react-router-dom";
// import styled, {keyframes} from 'styled-components';

const CategoryButton = ({category}) => {

    const [active, setActive] = useState(false);
    const [currGame, setCurrGame] = useState(false);
    const currBut = useRef();

    const animate = () => {
        const holder = document.getElementById('category-nav').getBoundingClientRect().left;
        // console.log('hash', currBut.current.getBoundingClientRect());



        let xLocation = holder - currBut.current.getBoundingClientRect().left;
        // console.log('this is where the element is located', xLocation);
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
        const nav = document.getElementById('category-nav');
        currBut.current.addEventListener('animationend', () => {
            nav.style['justify-content'] = 'left';
            xLocation = currBut.current.getBoundingClientRect().right + 50;
            for (let game of games) {
                game.style.cssText = `--distLeft: -${xLocation}px;`;
                game.style.display = "block";
                xLocation += game.getBoundingClientRect().right;
                // xLocation += 50;
            }
        })
    }

    const animateClose = () => {

        // deal with repeat logic later
        // setActive(!active)
        const games = document.getElementsByClassName('game-button');
        // might move this into animate + decide on which function to run based on 
        // move game-buttons to the right -> 100vw - currPos.left -> might have to check the math on this
        let xLocation = 0;
        for (let game of games) {
            game.style.cssText = `--distLeft: calc(100vw - ${xLocation}px); --time: 1.5s; display: block;`;
            // game.style.cssText = `--distLeft: 200px;`;
            // game.style.display = "block";
            // console.log('are they getting set back to display none...', game.style.display);
            game.classList.add('inactive');
            xLocation -= game.getBoundingClientRect().right;
            // console.log('right coor of game', game.getBoundingClientRect().right);
            // game.style.animation = "fadeOut 0.5s, moveLeft 0.5s !important;";
            game.addEventListener('animationend', () => {
                // game.style.display = "none";
                game.style.cssText = '';
                game.classList.remove('inactive');
            })
        }


        // animate bringing back the otherButs using the inactive thing
    }

    return (
        <>
        <div onClick={active ? animateClose : animate} ref={currBut} className={`style-button category-button ${active ? 'active-category-button' : ''}`} >
            <p>{category.name.split('$')[0]}</p>
        </div>
        {active && <p onClick={animateClose} className="style-button game-button">{'X'}</p>}
        {active && category.game_id.map((game, i) =>
            // change this to check if the game matches with the route
            <Link onClick={() => setCurrGame(i)} className={`style-button game-button ${currGame === i ? 'active-style-button' : ''}`} key={i}
                to={`/games/${game.nameURL}`}
                >
                    {game.name}
            </Link>
        )}
        </>
        
    )
}

export default CategoryButton;