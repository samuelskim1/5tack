// frontend/src/components/GameShow/GameShow.js
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchGame } from "../../store/games";
import { fetchGamePosts } from "../../store/posts";
import PostIndex from "../PostIndex/PostIndex";
import "./GameShow.scss";
import CreatePostModal from "../PostForms/CreatePostModal";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../components/Swiper/swiper.scss";
import "../../components/Swiper/pagination.scss";
import { register } from 'swiper/element/bundle';
import { clearGameErrors } from "../../store/games";
import { Redirect, useHistory } from "react-router-dom";
import LostPage from "../LostPage/LostPage.js";

const GameShow = () => {
  // register();
  // SwiperCore.use([Navigation, Pagination, Autoplay]);

  // const errors = useSelector(state => state.errors?.posts);
  const history = useHistory();
  const { nameURL } = useParams();
  const game = useSelector(state => state?.games[nameURL]);
  const gamePosts = useSelector(state => Object.values(state.posts));
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  
  //this fetches the proper user and redirects to our 404 page if that fetch request returns an error
  const grabError = async () => {
    const res = await dispatch(fetchGame(nameURL));
    if (res.statusCode >= 400) {
      history.push('/uh-oh/404');
      dispatch(clearGameErrors());
    } else {
      setLoading(false);
    }
  }

  useEffect(() => {
      // grabError();
      dispatch(fetchGamePosts(nameURL))
      .then(data => {
        if (data.errors) {
          history.push('/uh-oh/404');
        } else setLoading(false);
      });
      window.scrollTo(0, 0);
  }, [dispatch, nameURL]);


  const renderMedia = (url, index) => {
    const isVideo = /\.(mp4|webm)$/i.test(url);
    const isImage = /\.(jpg|jpeg|png|webp)$/i.test(url);
    const isGif = /\.gif$/i.test(url);
  
    if (isVideo) {
      return (
        <video key={index} src={url} alt={`${game.name} ${index + 1}`} controls />
      );
    } else if (isImage) {
      return (
        <img key={index} src={url} alt={`${game.name} ${index + 1}`} />
      );
    } else if (isGif) {
      return (
        <img key={index} src={url} alt={`${game.name} ${index + 1}`} />
      );
    }
  };
  
  if (!game || !gamePosts) return null;

  return (
    <div className="game-show-container">
      
        <div className="game-show-content">
          {/* <Swiper
            // navigation
            pagination
            loop
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            className="game-show-images"
          >
            {game.imageUrls.map((url, index) => (
              <SwiperSlide key={index}>{renderMedia(url, index)}</SwiperSlide>
            ))}
          </Swiper> */}
          <div className="game-show-images">
            <img src={game.imageUrls[0]} alt={`${game.name} ${1}`} />
          </div>
          <h2 className="game-Name">{game.name}</h2>
          <div className="game-posts">
          <CreatePostModal game={game} />
          <PostIndex posts={gamePosts} />
          </div>
        </div>
      
    </div>
  );
};

export default GameShow;
