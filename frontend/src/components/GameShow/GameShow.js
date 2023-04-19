// frontend/src/components/GameShow/GameShow.js
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchGame } from "../../store/games";
import { fetchGamePosts } from "../../store/posts";
import "./GameShow.scss";

const GameShow = () => {
  const { nameURL } = useParams();
  const game = useSelector(state => state.games[nameURL]);
  console.log("gameState:", game);
  console.log(game)
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchGame(nameURL)).then(() => setLoading(false));
    dispatch(fetchGamePosts(nameURL));
  }, [dispatch, nameURL]);

  return (
    <div className="game-show-container">
      {loading ? (
        <h3>Loading...</h3>
      ) : game ? (
        <div className="game-show-content">
          <div className="game-show-images">
            {game.imageUrls.map((imageUrl, index) => (
              <img key={index} src={imageUrl} alt={`${game.name} ${index + 1}`} />
            ))}
          </div>
          <h2 className="game-Name">{game.name}</h2>
        </div>
      ) : (
        <h3>Game not found</h3>
      )}
    </div>
  );
  
};

export default GameShow;