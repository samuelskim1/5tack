import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import { fetchUser } from "../../store/users";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


const Summary = ({ moodyButton }) => {
  const dispatch = useDispatch();
  const { username } = useParams();
  const currentUser = useSelector(state => state?.session?.user);
  const showUser = useSelector(state => state?.users[username]);
  const reviews = useSelector(state => state?.reviews);
  const games = useSelector(state => Object.values(state?.games));
  const [avgRating, setAvgRating] = useState(0);
  const [stars, setStars] = useState([]);

  const getAverage = async () => {
    if (showUser?.review_id?.length) {
      let ratings = [];
      showUser?.review_id?.forEach(review => {
          ratings?.push(review?.rating);
      })
        const totalRating = ratings?.reduce((sum, rating) => sum + rating, 0);
        setAvgRating((totalRating / ratings?.length)?.toFixed(2));
    } else {
        setAvgRating(0);
    }
  };

  const createGameLink = (game) => {
    const url = games?.find(el => el.name === game)?.nameURL;
    if (game) {
      return (
        <Link to={`/games/${url}`}>
          <p className="user-info-tag" key={game + "fave-tag"}>#{game}</p>
        </Link>
      )
    }
  };

  useEffect(() => {
    dispatch(fetchUser(username));
  }, [dispatch, username, showUser?.description, currentUser?.profileImageUrl]);

  useEffect(() =>  {
    getAverage();
  }, [reviews, showUser, stars]);

  useEffect(() => {
    setStars(Array(Math.round(avgRating / 0.5)).fill(true));
  }, [showUser, avgRating]);


  return (
    <div id="summary-container">
      <div id="user-top-section">
        <img src={showUser?.profileImageUrl} alt={showUser?.username} />
        
        <p id="user-info-username">
          @{showUser?.username}
        </p>

        {moodyButton}

        <div id="user-average-rating">
          <div className="star-holder">
            <div className={stars[0] ? "star-half star-first-half fill-star" : "star-half star-first-half"}/>
            <div className={stars[1] ? "star-half star-second-half fill-star" : "star-half star-second-half"} />
            <i className="fa-solid fa-star" />
          </div>

          <div className="star-holder">
            <div className={stars[2] ? "star-half star-first-half fill-star" : "star-half star-first-half"} />
            <div className={stars[3] ? "star-half star-second-half fill-star" : "star-half star-second-half"} />
            <i className="fa-solid fa-star" />
          </div>

          <div className="star-holder">
            <div className={stars[4] ? "star-half star-first-half fill-star" : "star-half star-first-half"} />
            <div className={stars[5] ? "star-half star-second-half fill-star" : "star-half star-second-half"} />
            <i className="fa-solid fa-star" />
          </div>

          <div className="star-holder">
            <div className={stars[6] ? "star-half star-first-half fill-star" : "star-half star-first-half"} />
            <div className={stars[7] ? "star-half star-second-half fill-star" : "star-half star-second-half"} />
            <i className="fa-solid fa-star" />
          </div>

          <div className="star-holder">
            <div className={stars[8] ? "star-half star-first-half fill-star" : "star-half star-first-half"} />
            <div className={stars[9] ? "star-half star-second-half fill-star" : "star-half star-second-half"} />
            <i className="fa-solid fa-star" />
          </div>
        </div>

        {(avgRating > 0) && (
          <div>
            <span id="rating-number">{avgRating}</span>
            <span> ({showUser?.review_id?.length} reviews)</span>
          </div>
        )}

        {(avgRating === 0) && (showUser?.username !== currentUser?.username) && (
          <p id='no-reviews'>
              {"Be the first to leave a review! :)"}
          </p>
        )}
      </div>

      <div id="user-bottom-section">

        <div className="user-info-wrapper">
          <div className="user-info-label">About: </div>
          <div className="user-info-content">
            {showUser?.description || (
              <p className="no-user-info">This gamer has not yet added a description.</p>
            )}
          </div>
        </div>

        <div className="user-info-divider" />

        <div className="user-info-wrapper">
          <div className="user-info-label tags-label">Favorites: </div>
          <div className="user-info-content">
            {showUser?.favorites?.map(fave => (
              createGameLink(fave)
            ))}
            {((showUser?.favorites?.length === 1 && !showUser?.favorites[0]) || (!showUser?.favorites.length)) && (
              <p className="no-user-info">This gamer doesn't play favorites...</p>
            )}
          </div>
        </div>

        <div className="user-info-divider" />

        <div className="user-info-wrapper">
          <div className="user-info-label tags-label">Play style: </div>
          <div className="user-info-content">
            {showUser?.playStyle?.map((style, idx) => (
              style && <p className="user-info-tag" key={style + idx}>#{style}</p>
            ))}
            {((showUser?.playStyle?.length === 1 && !showUser?.playStyle[0]) || (!showUser?.playStyle.length)) && (
              <p className="no-user-info">This gamer has not yet added any usual play styles.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
};

export default Summary;