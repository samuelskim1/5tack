import { useRef, useState } from "react"
import { Link } from "react-router-dom";
// import styled, {keyframes} from 'styled-components';

const CategoryButton = ({category}) => {
/*
//     const [active, setActive] = useState(false);
//     const [currGame, setCurrGame] = useState(false);
//     const currBut = useRef();

//     const animate = () => {
//         const holder = document.getElementById('category-nav').getBoundingClientRect().left;
//         // console.log('hash', currBut.current.getBoundingClientRect());



//         let xLocation = holder - currBut.current.getBoundingClientRect().left;
//         // console.log('this is where the element is located', xLocation);
//         const test = document.getElementsByClassName('category-button');

//         currBut.current.style.cssText = `--distLeft: ${xLocation}px;`;
        
//         setActive(!active)

//         for (let but of test) {
//             if (but.innerText !== currBut.current.innerText) but.classList.add('inactive');
//         }
//         // console.log(test);
//         // console.log(test[9].classList);

//         const otherButs = document.getElementsByClassName('inactive');
//         for (let but of otherButs) {
//             // FOR COLLAPSING EFFECT
//             // const thisXLocation = holder - but.getBoundingClientRect().left;
//             // but.style.cssText = `--distLeft: ${thisXLocation}px;`;

//             but.addEventListener('animationend', () => {
//                 but.style.display = "none";
//             })
//         }

//         const games = document.getElementsByClassName('game-button');
//         const nav = document.getElementById('category-nav');
//         currBut.current.addEventListener('animationend', () => {
//             nav.style['justify-content'] = 'left';
//             xLocation = currBut.current.getBoundingClientRect().right + 50;
//             for (let game of games) {
//                 game.style.cssText = `--distLeft: -${xLocation}px;`;
//                 game.style.display = "block";
//                 xLocation += game.getBoundingClientRect().right;
//                 // xLocation += 50;
//             }
//         })

        
//         console.log('this is removing', active);
//         setActive(!active);
//         console.log('this is still removing', active);
//     }

//     const animateClose = () => {

//         // deal with repeat logic later
//         // setActive(!active)
//         const games = document.getElementsByClassName('game-button');
//         // might move this into animate + decide on which function to run based on 
//         // move game-buttons to the right -> 100vw - currPos.left -> might have to check the math on this
//         let xLocation = 0;
//         for (let game of games) {
//             // game.style.cssText = `--distLeft: calc(100vw - ${xLocation}px); --time: 1.5s; display: block;`;
//             game.style.cssText = ` animation: fadeOut 0.5s; --distLeft: calc(100vw - ${xLocation}px); --time: 1.5s; display: block;`;
//             // game.style.cssText = `--distLeft: 200px;`;
//             // game.style.display = "block";
//             // console.log('are they getting set back to display none...', game.style.display);
//             // game.classList.add('inactive');
//             xLocation -= game.getBoundingClientRect().right;
//             // console.log('right coor of game', game.getBoundingClientRect().right);
//             // game.style.animation = "fadeOut 0.5s, moveLeft 0.5s !important;";
//             game.addEventListener('animationend', () => {
//                 // game.style.display = "none";
//                 game.style.cssText = '';
//                 game.classList.remove('inactive');
//             })
//         }
//         // setActive(!active);
//         currBut.current.classList.remove('active-category-button');
//         // console.log(currBut.current.classList);
//         let temp = currBut.current.style.cssText.split(' ')[1];
//         // console.log('get the dist', temp);
//         // console.log(currBut.current.style, '-----', currBut.current.style.cssText);
//         // animate bringing back the otherButs using the inactive thing
//         currBut.current.style.cssText = `--distLeft: ${temp.substring(1, temp.length - 1)}`;
//         currBut.current.classList.add('move-back');
//         // console.log(currBut.current.style.cssText);
//         currBut.current.addEventListener('animationend', () => {

//             console.log('the current button is animating properly');


//             const holder = document.getElementById('category-nav');
//             holder.style = 'justify-content: space-between';
//             const buts = document.getElementsByClassName('category-button');
//             for (let but of buts) {
//                 if (currBut === but) continue;
//                 but.classList.remove('inactive');
//                 but.style.cssText = `animation: fadeIn 0.5s;`;
//                 but.addEventListener('animationend', () => {
//                     but.style.display = "block";
//                     but.style.cssText = ``;
//                 })
//             }
//             console.log('this is adding', active);
//             setActive(!active);
//             console.log('this is still adding', active);
//             // for (let but of otherButs) {
//             //     but.classList.remove('inactive');
//             // }
//         })
//         // currBut.current.style = `animation: 0.5s ease-out 0s moveLeft;`;
//     }
*/
    
    const currBtn = useRef();
    const parent = document.getElementById('category-nav');
    const btns = document.getElementsByClassName('category-button');

    const [active, setActive] = useState(false);

    const buttonAnimation = () => {
        let isActive = currBtn.current.classList.contains('active-category-button');
        const dist = parent.getBoundingClientRect().left - currBtn.current.getBoundingClientRect().left;
        currBtn.current.style = `--distLeft: ${dist}px;`;
        currBtn.current.style.x = 0 - dist;
        // console.log('styling:', currBtn.current.style.cssText);
        
        
        if (isActive) {
            console.log('closing category...', currBtn.current.innerHTML, isActive);
            closeCategory();
        } else {
            console.log('opening category...', currBtn.current.innerHTML, isActive);
            openCategory();
        }
    }
    
    const openCategory = () => {
        console.log('opening category...', currBtn.current.innerHTML, active);
        const dist = parent.getBoundingClientRect().left - currBtn.current.getBoundingClientRect().left;
        currBtn.current.style = `--distLeft: ${dist}px;`;
        currBtn.current.style.x = 0 - dist;

        /*
        const fadeDone = () => {
            for (let btn of btns) {
                if (btn === currBtn.current) continue;
                btn.style.opacity = '0';
            }
            currBtn.current.addEventListener('animationend', removeDone);
        }

        const removeDone = () => {
            for (let btn of btns) {
                if (btn === currBtn.current) continue;
                btn.style.display = 'none';
            }
            parent.style.justifyContent = 'unset'; // reset to space-btwn
            setActive(true); // set to false
        }
        */


        currBtn.current.classList.add('active-category-button');
        for (let btn of btns) {
            if (btn === currBtn.current) {
                continue;
            }
            btn.classList.add('inactive');
        }
        const last = btns[btns.length - 1] === currBtn.current ? btns[btns.length - 2] : btns[btns.length - 1];
        last.addEventListener('animationend', () => {
            // console.log('this is running');
            for (let btn of btns) {
                if (btn === currBtn.current) continue;
                btn.style.opacity = '0';
            }
            currBtn.current.addEventListener('animationend', () => {
                for (let btn of btns) {
                    if (btn === currBtn.current) continue;
                    btn.style.display = 'none';
                }
                parent.style.justifyContent = 'unset'; // reset to space-btwn
                setActive(true); // set to false
            }, {once : true})
        }, {once : true})
        // a lot css to reset
    }


    // fadeout the container
    // set active to false
    // move active back to original location
    // fade in the others
    // lots to reset

    const closeCategory = () => {
        
        console.log('closing category...', currBtn.current.innerHTML, active);
        // move currBut back in place
        // after animation end
        // bring have display = block -> opacity is still 0
        // fadeIn 1s
        // clear up all the shit

        // IMPORTANT
        // might want to clear cssText of both games + parent...?



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
                
                // setTimeout(() => {
                    //     currBtn.current.classList.remove('deactive-category-button');
                    // }, 500);
                    
                currBtn.current.classList.remove('active-category-button');
                currBtn.current.classList.remove('deactive-category-button');
                setActive(false); // set to false
                parent.style.justifyContent = null; // reset to space-btwn
                currBtn.current.style.cssText = null;
            }, {once : true})


            games.style.animation = 'fadeOut 0.5s';
            games.addEventListener('animationend', () => {
                games.style.display = 'none';
                // currBtn.current.classList.remove('active-category-button');
                // currBtn.current.classList.add('inactive');
        
        
                // console.log('currently inline', currBtn.current.style.cssText);
                
                
            })
            // parent.style.justifyContent = 'space-between';
        }
    }


    /*
    something crazy to try if needed
        - make currBut pos absolute
        - put everything back -> opacity is still 0
        - move currBut back
        - fade other buts back as well
     */

    /*
    click on a category
        - other categories will fade
        - current category will move to the very left
        - games will fade in

        - fade others
        - change current button to absolute
        - change other buttons to display none
        - move button with left property
        - 
    */

    /*
    click on anything
        - games will fade
        - category will move back to its position
        - other games will fade back in
    */

    return (

        <>
        <div onClick={active ? closeCategory : openCategory} className={`style-button category-button`} ref={currBtn} >
            <p>{category.name.split('$')[0]}</p>
        </div>
        {active &&
        <div id="game-nav">
            {category.game_id.map((game, i) =>
                // change this to check if the game matches with the route
                // <Link onClick={() => {setCurrGame(i)}} className={`style-button game-button ${currGame === i ? 'active-style-button' : ''}`} key={i}
                <Link className={`style-button game-button`} key={i}
                to={`/games/${game.nameURL}`}
                onClick={closeCategory}
                >
                        {game.name}
                </Link>
            )}
            <p onClick={closeCategory} className="style-button game-button">{'X'}</p>
        </div>}
        </>


        // <>
        // <div onClick={active ? animateClose : animate} ref={currBut} className={`style-button category-button ${active ? 'active-category-button' : ''}`} >
        //     <p>{category.name.split('$')[0]}</p>
        // </div>
        // {active && category.game_id.map((game, i) =>
        //     // change this to check if the game matches with the route
        //     // <Link onClick={() => {setCurrGame(i)}} className={`style-button game-button ${currGame === i ? 'active-style-button' : ''}`} key={i}
        //     <Link onClick={animateClose} className={`style-button game-button ${currGame === i ? 'active-style-button' : ''}`} key={i}
        //     to={`/games/${game.nameURL}`}
        //     >
        //             {game.name}
        //     </Link>
        // )}
        // {active && <p onClick={animateClose} className="style-button game-button">{'X'}</p>}
        // </>
        
    )
}

export default CategoryButton;