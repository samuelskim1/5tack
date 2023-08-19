import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchUserReviews, updateReview } from "../../store/reviews";
import { updateUser } from "../../store/users";
import './ReviewForm.scss';


const UpdateReviewForm = ({ review, setShowModal }) => {
  const dispatch = useDispatch();
  const { username } = useParams();
  const reviewedUser = useSelector(state => state?.users[username]);
  const [errors, setErrors] = useState({title: '', description: ''})
  const [title, setTitle] = useState(review.title);
  const [description, setDescription] = useState(review.description);
  const [rating, setRating] = useState(review.rating);
  const [hoverRating, setHoverRating] = useState(0);
  const [canSubmit, setCanSubmit] = useState(false);


  const handleSubmit = async () => {
    const updatedReviewInfo = {
        ...review,
        title,
        description,
        rating
    }

    const returnedRequest = await dispatch(updateReview(updatedReviewInfo));
    const res = returnedRequest[0]; //the response of the dispatch
    const reviewData = returnedRequest[1]; //the actual review object
    if (res.ok) {
        setShowModal(false);
    }
    //reviewedUserReviews is an array of the reviews of the user that is being reviewed
    //we spread here to prevent the actual previous state from being altered
    const reviewedUserReviews = [...reviewedUser?.review_id];
    for (let i = 0; i < reviewedUserReviews?.length; i++) {
        if (reviewedUserReviews[i]._id === reviewData._id ) {
            reviewedUserReviews[i].rating = reviewData.rating;
        }
    }
    dispatch(updateUser(reviewedUser));
  };

  const changeHandler = (e, type) => {
    let currTitle = title;
    let currDescription = description;
    let currRating = rating;
    if (type === 'title') {
        currTitle = e.target.value;
        setTitle(currTitle);
        if (currTitle.length > 50) {
            setErrors({ ...errors, "title": "Title cannot be longer than 50 characters" })
        } else if (!currTitle.length) {
            setErrors({ ...errors, "title": 'Title cannot be blank'})
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
  };


  useEffect(() => {
    dispatch(fetchUserReviews(username));
  }, [review.title, review.description, review.rating, dispatch, username]);



  return (
    <div id="update-review-container">
        <div id="create-review-container">
            <div id="create-review-content">
                <h2>Write a Review</h2>

                <div className="create-review-section-container">
                <div className="create-review-label">Title:</div>
                <div className="create-review-field">
                    <input
                    type="text"
                    value={title}
                    onChange={(e) => changeHandler(e, 'title')}
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
                        onClick={(e) => {setRating(i); changeHandler(e, i)}}
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
                    onChange={(e) => changeHandler(e, 'description')}
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

                <div className="cancel-btn" onClick={() => setShowModal(false)}>
                Cancel
                </div>
            </div>
        </div>
    </div>
  )
};

export default UpdateReviewForm;