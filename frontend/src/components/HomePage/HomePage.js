import { register } from 'swiper/element/bundle';
import './HomePage.scss';
register();

const HomePage = () => {

    return (
        <div className="home-container">
            <div className='slider-holder'>
            <swiper-container class="mySwiper" pagination="true" pagination-clickable="true" space-between="30"
                centered-slides="true" autoplay-delay="2500" autoplay-disable-on-interaction="false">
          
                    <swiper-slide id="home-slide">
                        <img className='swiper-image' src={"https://5tack.s3.amazonaws.com/public/league_of_legends.jpeg"} />
                    </swiper-slide>
                    <swiper-slide id="home-slide">
                        <img className='swiper-image' src={"https://5tack.s3.amazonaws.com/public/valorant.webp"} />
                    </swiper-slide>
                    <swiper-slide id="home-slide">
                        <img className='swiper-image' src={"https://5tack.s3.amazonaws.com/public/fortnite.jpeg"} />
                    </swiper-slide>
                    <swiper-slide id="home-slide">
                        <img className='swiper-image' src={"https://5tack.s3.amazonaws.com/public/minecraft.jpeg"} />
                    </swiper-slide>
                    <swiper-slide id="home-slide">
                        <img className='swiper-image' src={"https://5tack.s3.amazonaws.com/public/gtaV.jpeg"} />
                    </swiper-slide>
                </swiper-container>
            </div>
            <div className="header-text">
                Welcome to Five Stack, the ultimate platform for gamers seeking to form the perfect team! Our mission 
                is to bring gamers together by offering a unique and interactive space where you can customize your 
                profile, connect with like-minded players, and create your dream team.
            </div>
            <div className="body-text">
                We understand the importance of compatibility and shared interests when it comes to gaming. That's why 
                we've made it easy for you to express your gaming preferences and playstyles, allowing you to find the 
                perfect teammates who share your passion for gaming. With Five Stack, you can create your own team from 
                a pool of players who have similar interests and gaming styles. No more random pairings or struggling to 
                find the right partners - we provide the tools you need to build a winning team. Moreover, we believe that 
                transparency and trust are essential in any team-based environment. To ensure a positive gaming experience 
                for everyone, we encourage our users to review their teammates after each session. By providing constructive 
                feedback, you not only help your teammates improve but also contribute to a stronger and more informed gaming 
                community.
            </div>
            <div className="ending-text">
                Join Five Stack today and discover the ultimate platform for gamers who want to level up their team-based 
                gaming experience!
            </div>
        </div>
    )
};

export default HomePage;