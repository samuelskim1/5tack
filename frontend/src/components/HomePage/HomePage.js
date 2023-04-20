import { register } from 'swiper/element/bundle';
import './HomePage.scss';
register();

const HomePage = () => {

    return (
        <div className="home-container">
            <div className="header-text">
                these are some words that.
            </div>
            <div className='slider-holder'>
            <swiper-container navigation="true" loop="true" >
                <swiper-slide id="home-slide">
                    <img className='swiper-image' src={"https://5tack.s3.amazonaws.com/public/league_of_legends.jpeg"} />
                </swiper-slide>
                <swiper-slide id="home-slide">
                    <img className='swiper-image' src={"https://5tack.s3.amazonaws.com/public/valorant.webp"} />
                </swiper-slide>
                <swiper-slide id="home-slide">
                    <img className='swiper-image' src={"https://5tack.s3.amazonaws.com/public/maplestory.jpeg"} />
                </swiper-slide>
                <swiper-slide id="home-slide">
                    <img className='swiper-image' src={"https://5tack.s3.amazonaws.com/public/minecraft.jpeg"} />
                </swiper-slide>
                <swiper-slide id="home-slide">
                    <img className='swiper-image' src={"https://5tack.s3.amazonaws.com/public/fifa23.jpeg"} />
                </swiper-slide>
            </swiper-container>
            </div>
        </div>
    )
};

export default HomePage;