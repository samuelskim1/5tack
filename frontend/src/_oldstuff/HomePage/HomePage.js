import { register } from 'swiper/element/bundle';
import './HomePage.scss';
register();

const HomePage = () => {

    return (
        <div className="home-container">
            <h1>5TACK</h1>
            <div className="header-text">
                The ultimate platform for creating your stacked dream team!
            </div>
            <div className='slider-holder'>
                <swiper-container className="mySwiper" pagination="true" pagination-clickable="true" space-between="30"
                    centered-slides="true" autoplay-delay="2500" autoplay-disable-on-interaction="false">
          
                    <swiper-slide id="home-slide">
                        <img className='swiper-image' src={"https://5tack.s3.amazonaws.com/public/league_of_legends.jpeg"} alt='hello'/>
                    </swiper-slide>
                    <swiper-slide id="home-slide">
                        <img className='swiper-image' src={"https://5tack.s3.amazonaws.com/public/valorant.webp"} alt='hello'/>
                    </swiper-slide>
                    <swiper-slide id="home-slide">
                        <img className='swiper-image' src={"https://5tack.s3.amazonaws.com/public/maplestory.png"} alt='hello'/>
                    </swiper-slide>
                    <swiper-slide id="home-slide">
                        <img className='swiper-image' src={"https://5tack.s3.amazonaws.com/public/minecraft.jpeg"} alt='hello'/>
                    </swiper-slide>
                    <swiper-slide id="home-slide">
                        <img className='swiper-image' src={"https://5tack.s3.amazonaws.com/public/gtaV.jpeg"} alt='hello'/>
                    </swiper-slide>
                </swiper-container>
            </div>
            <div className="body-text">
                Gone are the days of living in fear of randomly assigned teammates! We provide the tools you need to craft the perfect gaming experience. Whether casual or competitive, players across the web are discovering the superiority of enjoyable gameplay through intentional matchmaking. Click on a category to find the games you like and create a post to connect with others!
            </div>
        </div>
    )
};

export default HomePage;