import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import { fetchUser } from "../../store/users";


const UserCard = () => {
  const dispatch = useDispatch();
  const { username } = useParams();
  const currentUser = useSelector(state => state?.session?.user);
  const showUser = useSelector(state => state?.users[username]);
  const reviews = useSelector(state => state?.reviews);
  const [avgRating, setAvgRating] = useState(0);


  const getAverage = async () => {
    if (showUser?.review_id?.length) {
        let ratings = [];
        showUser?.review_id?.forEach(review => {
            ratings?.push(review?.rating);
        })
        const totalRating = ratings?.reduce((sum, rating) => sum + rating, 0);
        setAvgRating((totalRating / ratings?.length)?.toFixed(2));
        console.log(ratings?.length)
    } else {
        setAvgRating(0);
    }
  };

  useEffect(() => {
    dispatch(fetchUser(username));
  }, [dispatch, username, showUser?.description, currentUser?.profileImageUrl]);

  useEffect(() =>  {
      getAverage();
  }, [reviews, showUser, getAverage]);


  return (
    <>
      <div id="user-top-section">
        <img src={showUser?.profileImageUrl} alt={showUser?.username} />
        
        <p id="user-info-username">
          @{showUser?.username}
        </p>
        <div id="user-average-rating">
          <div className="star-holder">
            <div className="star-half star-first-half" />
            <div className="star-half star-second-half" />
            <i className="fa-solid fa-star" />
          </div>

          <div className="star-holder">
            <div className="star-half star-first-half" />
            <div className="star-half star-second-half" />
            <i className="fa-solid fa-star" />
          </div>

          <div className="star-holder">
            <div className="star-half star-first-half" />
            <div className="star-half star-second-half" />
            <i className="fa-solid fa-star" />
          </div>

          <div className="star-holder">
            <div className="star-half star-first-half" />
            <div className="star-half star-second-half" />
            <i className="fa-solid fa-star" />
          </div>

          <div className="star-holder">
            <div className="star-half star-first-half" />
            <div className="star-half star-second-half" />
            <i className="fa-solid fa-star" />
          </div>
        </div>

        {(avgRating > 0) && (
          <div>
            <span id="rating-number">4.8</span>
            <span> (5 reviews)</span>
          </div>
        )}

        {(avgRating === 0) && (showUser?.username !== currentUser?.username) && (
          <p id='no-reviews'>
              {"Be the first to leave a review! :)"}
          </p>
        )}
      </div>

      <div id="user-bottom-section">
        {/* <div className="user-info-wrapper"> */}
          <div className="user-info-label">About: </div>
          <div>
            {showUser?.description}
          </div>
        {/* </div> */}

        {/* <div className="user-info-wrapper"> */}
          <div className="user-info-label">Favorites: </div>
          <div>
            #LeagueOfLegends, #MapleStory
          </div>
        {/* </div> */}

        {/* <div className="user-info-wrapper"> */}
          <div className="user-info-label">Play style: </div>
          <div>
            #Troll, #Casual
          </div>
        {/* </div> */}
        
        {/* <div className="user-info-wrapper"> */}
          <div className="user-info-label">Usual times: </div>
          <div>
            #Night
          </div>
        </div>
      {/* </div> */}
    </>
  )
};

export default UserCard;