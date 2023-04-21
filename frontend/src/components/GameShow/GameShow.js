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
register();


SwiperCore.use([Navigation, Pagination, Autoplay]);

const GameShow = () => {
  const { nameURL } = useParams();
  const game = useSelector(state => state.games[nameURL]);
  const gamePosts = useSelector(state => Object.values(state.posts));
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchGame(nameURL)).then(() => setLoading(false));
    dispatch(fetchGamePosts(nameURL));
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
  

  return (
    <div className="game-show-container">
      {loading ? (
        <h3>Loading...</h3>
      ) : game ? (
        <div className="game-show-content">
          <Swiper
            // navigation
            pagination
            loop
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            className="game-show-images"
          >
            {game.imageUrls.map((url, index) => (
              <SwiperSlide key={index}>{renderMedia(url, index)}</SwiperSlide>
            ))}
          </Swiper>

          <h2 className="game-Name">{game.name}</h2>
          <div className="game-posts">
          <CreatePostModal game={game} />
          <PostIndex posts={gamePosts} />
          </div>
        </div>
      ) : (
        <h3>Game not found</h3>
      )}
    </div>
  );
};

export default GameShow;
