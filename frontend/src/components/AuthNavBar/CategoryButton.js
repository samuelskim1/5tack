import { useRef, useState } from "react"
// import styled, {keyframes} from 'styled-components';

const CategoryButton = ({category}) => {

    const [active, setActive] = useState(false);
    const currBut = useRef();
    // get location -> pass to style -> use style inline
    // let xLocation = '500px';
    // let styles = {'--distLeft': xLocation}

    const animate = () => {
        const holder = document.getElementById('category-nav').getBoundingClientRect().left;
        console.log('hash', currBut.current.getBoundingClientRect());
        // xLocation = `-${currBut.current.getBoundingClientRect().left}px`;



        const xLocation = holder - currBut.current.getBoundingClientRect().left;
        console.log('this is where the element is located', xLocation);
        const test = document.getElementsByClassName('category-button');
        // test[0].classList.remove('category-button')


        // styles = {'--distLeft': xLocation}

        // console.log('currBUt', currBut);
        // currBut.current.style=`position:absolute; left:${xLocation}px;`;
        // currBut.current.animate([
        //     // {transform: `translateX(-${calc(xLocation)}px) 1s`}
        //     {transform: `translateX(-${calc(xLocation)}px) 1s`}
        // ])

        // // adds animation to currBut
        // currBut.current.animation = "moveLeft 1s";
        currBut.current.style.cssText = `--distLeft: ${xLocation}px;`;

        // styled components thing
        // const moveLeft = (dist) => keyframes`
        //     100% { transform: translateX(${dist}px) }
        // `;

        
        setActive(!active)

        // console.log('idsoinwohigengoigjwiognorign', currBut.current.style)

        // currBut.current.animation = `${xLocation => moveLeft(xLocation)} 1s`

        for (let but of test) {
            but.classList.add('inactive');
        }
        console.log(test);
        console.log(test[9].classList);


        setTimeout(() => {
            const otherButs = document.getElementsByClassName('inactive');
            for (let but of otherButs) {
                but.style.position = "absolute";
                but.style.opacity = "0";
            }
        }, 500)

        // getElementById -> active-category button -> get the x-value of this and move to this
    }

    return (
        <div onClick={e => animate(e)} ref={currBut} className={`category-button ${active ? 'active-category-button' : ''}`} >
            <p>{category.name.split('$')[0]}</p>
        </div>
    )
}

export default CategoryButton;