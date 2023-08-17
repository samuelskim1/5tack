import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchUserReviews, updateReview } from "../../store/reviews";
import { updateUser } from "../../store/users";


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
            setErrors({ ...errors, ["title"]: "Title cannot be longer than 50 characters" })
        } else {
            setErrors({ ...errors, ["title"]: '' })
        }
    } else if (type === 'description') {
        currDescription = e.target.value;
        setDescription(currDescription);

        if (currDescription.length > 400) {
            setErrors({ ...errors, ["description"]: "Description cannot be longer than 400 characters" })
        } else {
            setErrors({ ...errors, ["description"]: '' })
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
    <div>
      
    </div>
  )
};

export default UpdateReviewForm;