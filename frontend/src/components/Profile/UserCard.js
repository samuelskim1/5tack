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

        {(avgRating > 0) && (
            <p id='user-average-rating'>
                {avgRating + " "}
                <i className="fa-solid fa-star" style={{ color: `$#e4dfd5` }}></i>
            </p>
        )}

        {(avgRating === 0) && (showUser?.username !== currentUser?.username) && (
            <p id='no-reviews'>
                {"Be the first to leave a review! :)"}
            </p>
        )}
      </div>

      <div id="user-bottom-section">
        <p id="user-info-description">
          {showUser?.description}
        </p>
      </div>
    </>
  )
};

export default UserCard;