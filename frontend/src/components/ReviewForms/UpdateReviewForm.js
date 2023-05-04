import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchUserReviews, updateReview } from "../../store/reviews";
import { updateUser } from "../../store/users";

const UpdateReviewForm = ({ setShowModal, review }) => {
    const dispatch = useDispatch();
    const { username } = useParams();
    const reviewedUser = useSelector(state => state?.users[username]);
    // const errors = useSelector(state => state.errors?.reviews);
    const [errors, setErrors] = useState({title: '', description: ''})
    // const gameURL = useSelector(state => review.game)

    const [title, setTitle] = useState(review.title);
    const [description, setDescription] = useState(review.description);
    // const [rating, setRating] = useState(review.rating);
    
    const [rating, setRating] = useState(review.rating);
    const [hoverRating, setHoverRating] = useState(0);
    const [canSubmit, setCanSubmit] = useState(false);

    // Hook
    function usePrevious(value) {
        // The ref object is a generic container whose current property is mutable ...
        // ... and can hold any value, similar to an instance property on a class
        const ref = useRef();
        // Store current value in ref
        useEffect(() => {
            ref.current = value;
        }, [value]); // Only re-run if value changes
        // Return previous value (happens before update in useEffect above)
        return ref.current;
    }

    const prevRating = usePrevious(rating);
    console.log(prevRating);

    useEffect(() => {
        dispatch(fetchUserReviews(username));
    }, [review.title, review.description, review.rating]);

    const handleSubmit = async () => {
        console.log(prevRating);
        const ratingIndex = reviewedUser?.ratings.indexOf(prevRating)
        reviewedUser?.ratings.splice(ratingIndex, 1);
        //this line deletes the initial rating prior to the update
        console.log(reviewedUser?.ratings);
        const updatedReviewInfo = {
            ...review,
            title,
            description,
            rating
        }
        // console.log(updatedReviewInfo);
        // console.log(updatedReviewInfo._id);
        const reviewData = await dispatch(updateReview(updatedReviewInfo));
        if (reviewData.ok) {
            setShowModal(false);
        }
        reviewedUser.ratings.push(rating);
        dispatch(updateUser(reviewedUser));
    }

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
    }

    return (
        <div className="create-review-container">
            <form className="create-review-form">
                <h2>Edit Review</h2>
                <label >
                    <span>Title</span>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => changeHandler(e, 'title')}
                    />
                </label>
                <div className="errors">{errors?.title}</div>
                <label >
                    <span>Rating</span>
                    <div>
                        {[...Array(5)].map((star, i) => {
                            i += 1;
                            return (
                                <span
                                    key={i}
                                    onClick={(e) => {setRating(i); changeHandler(e, i)}}
                                    onMouseOver={() => setHoverRating(i)}
                                    onMouseOut={() => setHoverRating(0)}
                                    >
                                        {i <= (hoverRating === 0 ? rating : hoverRating) ?
                                        <i className="fa-solid fa-star" />
                                        : <i className="fa-regular fa-star" />
                                        }
                                </span>
                            )
                        })}
                    </div>
                    {/* <input
                        type="text"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                    /> */}
                </label>
                {/* <div>{errors?.rating}</div> */}
                <label >
                    <span>Description</span>
                    <textarea
                        value={description}
                        onChange={(e) => changeHandler(e, 'description')}
                    />
                </label>
                <div className="errors">{errors?.description}</div>
                { canSubmit ? <div
                    className="submit-btn"
                    onClick={handleSubmit}
                >
                    Save Changes
                </div>
                :
                <div className="disabled-btn">
                    Save Changes
                </div>
                }
            </form>
        </div>
    )
}

export default UpdateReviewForm;