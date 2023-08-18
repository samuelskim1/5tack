import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { fetchUser, updateUser } from "../../store/users";
import './ReviewForm.scss';
import { createReview } from "../../store/reviews";


const CreateReviewForm = ({ setIsReviewing }) => {
  // variables needed to display top section:
  const dispatch = useDispatch();
  const { username } = useParams();
  const showUser = useSelector(state => state?.users[username]);
  const reviews = useSelector(state => state?.reviews);
  const [avgRating, setAvgRating] = useState(0);
  const [stars, setStars] = useState([]);
  
  // variables needed to create a review:
  const currentUser = useSelector(state => state?.session?.user);
  const gamerId = showUser?._id;
  const reviewerId = currentUser?._id;

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [errors, setErrors] = useState({title: '', description: ''});
  const [canSubmit, setCanSubmit] = useState(false);


  // for top section: 
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

  // for creating a review:
  const handleSubmit = async () => {
    const review = {
      reviewer_id: reviewerId,
      user_id: gamerId,
      title,
      description,
      rating
    };

    const returnData = await dispatch(createReview(review));
    const res = returnData[0]; //the response of the dispatch
    const reviewData = returnData[1]; // the actual review object

    if (res.ok) {
      setIsReviewing(false);
    }

    // showUserReviews is an array of the reviews of the user that is being reviewed
    // we spread here to prevent the actual previous state from being altered
    const showUserReviews = [ ...showUser?.review_id];
    const nextUser = { ...showUser };
    showUserReviews?.unshift(reviewData);
    nextUser.review_id = showUserReviews;
    dispatch(updateUser(nextUser));
  };

  const handleChange = (e, type) => {
    let currTitle = title;
    let currDescription = description;
    let currRating = rating;
    if (type === 'title') {
        currTitle = e.target.value;
        setTitle(currTitle);
        if (currTitle.length > 50) {
          setErrors({ ...errors, "title": "Title cannot be longer than 50 characters" })
        } else if (!currTitle.length) {
          setErrors({ ...errors, "title": "Title cannot be blank"})
        } else {
          setErrors({ ...errors, "title": '' })
        }
    } else if (type === 'description') {
        currDescription = e.target.value;
        setDescription(currDescription);

        if (currDescription.length > 400) {
          setErrors({ ...errors, "description": "Description cannot be longer than 400 characters" })
        } else if (!currDescription.length) {
          setErrors({ ...errors, "description": "Description cannot be blank" })
        } else {
          setErrors({ ...errors, "description": '' })
        }
    } else {
        currRating = type;
    }
    if (currTitle.length > 0 && currTitle.length <= 50 && currDescription.length > 0 && currDescription.length <= 400 && currRating > 0) {
        setCanSubmit(true);
    } else {
        setCanSubmit(false);
    }
  }

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
    dispatch(fetchUser(username));
  }, [dispatch, username, showUser?.description, currentUser?.profileImageUrl]);

  useEffect(() =>  {
    getAverage();
  }, [reviews, showUser, getAverage, stars]);

  useEffect(() => {
    setStars(Array(Math.round(avgRating / 0.5)).fill(true));
  }, [avgRating]);




  return (
    <div id="summary-container">
      <div className="review-top" id="user-top-section">
      <img src={showUser?.profileImageUrl} alt={showUser?.username} />
        
        <p id="user-info-username">
          @{showUser?.username}
        </p>

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

        {(avgRating > 0) && (
          <div>
            <span id="rating-number">{avgRating}</span>
            (<span>{showUser?.review_id?.length} reviews</span>)
          </div>
        )}

        {(avgRating === 0) && (showUser?.username !== currentUser?.username) && (
          <p id='no-reviews'>
              {"Be the first to leave a review! :)"}
          </p>
        )}
      </div>

      <div id="create-review-container">
        <div id="create-review-content">
          <h2>Write a Review</h2>

          <div className="create-review-section-container">
            <div className="create-review-label">Title:</div>
            <div className="create-review-field">
              <input
                type="text"
                value={title}
                onChange={(e) => handleChange(e, 'title')}
                placeholder="How was your experience gaming with this person?"
                />
            </div>
            <div className="errors">{errors?.title}</div> 
          </div>


          <div className="create-review-section-container">
            <div className="create-review-label">Rating:</div>
            <div className="create-review-field">
              {[...Array(5)].map((star, i) => {
                i += 1;
                return (
                  <div
                    key={i}
                    onClick={(e) => {setRating(i); handleChange(e, i)}}
                    onMouseOver={() => setHoverRating(i)}
                    onMouseOut={() => setHoverRating(0)}
                    >

                    {i <= (hoverRating === 0 ? rating : hoverRating) ?
                    <i className="fa-solid fa-star" />
                    : <i className="fa-regular fa-star" />
                    }
                  </div>
                )
              })}
            </div>
            <div className="errors">{errors?.rating}</div>
          </div>


          <div className="create-review-section-container">
            <div className="create-review-label">Description:</div>
            <div className="create-review-field">
              <textarea
                value={description}
                onChange={(e) => handleChange(e, 'description')}
                placeholder="Provide some more details about your gaming experience"
                />
            </div>
            <div className="errors">{errors?.description}</div>
          </div>
        </div>


        <div id="edit-profile-bottom">
          {canSubmit ? 
            <div className="save-btn" onClick={handleSubmit}>
              Post
            </div>
            :
            <div className="save-btn cant-save">
              Post
            </div>
          }

          <div className="cancel-btn" onClick={() => setIsReviewing(false)}>
            Cancel
          </div>
        </div>
      </div>
    </div>
  )
};

export default CreateReviewForm;