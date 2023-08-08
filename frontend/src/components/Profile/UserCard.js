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
  }, [reviews, showUser, getAverage])

  return (
    <section className="splash-card" id="user-card">
      <div className="splash-card-content">
        <h3></h3>
      </div>
    </section>
  )
};

export default UserCard;