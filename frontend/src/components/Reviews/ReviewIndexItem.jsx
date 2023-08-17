import { useState } from "react";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import TimeStamp from "../Posts/TimeStamp";
import ReviewButtons from './ReviewButtons';
import { useEffect } from "react";


const ReviewIndexItem = ({ review }) => {
  const currentUser = useSelector(state => state?.session?.user);
  const isAuthor = (review?.reviewer_id._id || review?.reviewer_id) === currentUser?._id;
  const [stars, setStars] = useState([]);


  const getStarFill = (star1, star2) => {
    if (!star1 && !star2) {
      return "star-holder";
    } else if (star1 && !star2) {
      return "star-holder half-fill";
    } else if (star1 && star2) {
      return "star-holder full-fill";
    }
  };


  useEffect(() => {
    let starFill = (review?.rating * 2);
    setStars(Array(starFill).fill("kaiter"));
  }, [])
  

  return (
    <div className='post-index-item'>
      <div className='review-rating-row'>
        <div id="user-average-rating">
          <div className={getStarFill(stars[0], stars[1])}>
            <i className="fa-solid fa-star" />
          </div>

          <div className={getStarFill(stars[2], stars[3])}>
            <i className="fa-solid fa-star" />
          </div>

          <div className={getStarFill(stars[4], stars[5])}>
            <i className="fa-solid fa-star" />
          </div>

          <div className={getStarFill(stars[6], stars[7])}>
            <i className="fa-solid fa-star" />
          </div>

          <div className={getStarFill(stars[8], stars[9])}>
            <i className="fa-solid fa-star" />
          </div>
        </div>

        {isAuthor && <ReviewButtons review={review} />}
      </div>

      <div className='post-top-section'>
        <div className='post-index-title'>
          {review?.title}
        </div>
        <div className='author-block'>
          <div className='author-info'>
            <Link to={`/${review?.reviewer_id?.username}`}>
              <img src={review?.reviewer_id?.profileImageUrl} alt={review?.reviewer_id?.username} />
            </Link>
            <Link to={`/${review?.reviwer_id?.username}`}>
              <div className='author-username'>
                {review?.reviewer_id?.username}
              </div>
            </Link>
          </div>

          <TimeStamp review={review} />
        </div>
        <div className='post-index-description'>
          {review?.description}
        </div>
      </div>
    </div>
  )
};

export default ReviewIndexItem;