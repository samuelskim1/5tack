import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createReview, fetchUserReviews } from "../../store/reviews";
import { useParams } from "react-router-dom";
import { updateUser } from "../../store/users";
import './ReviewForms.scss';
import { clearSessionErrors } from "../../store/session";
import Rating from "./Rating";

const CreateReviewForm = ({ setShowModal, user }) => {
    const dispatch = useDispatch();
    const { username } = useParams();
    const reviewedUser = useSelector(state => state?.users[username]);
    // const errors = useSelector(state => state?.errors?.reviews);
    const [errors, setErrors] = useState({title: '', description: ''});
    const user_id = user._id;
    const reviewer_id = useSelector(state => state.session.user?._id);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);

    const [canSubmit, setCanSubmit] = useState(false);

    // useEffect(() => {
    //     return () => {
    //         dispatch(clearSessionErrors());
    //     }
    // }, [dispatch]);

    const handleSubmit = async () => {
        const review = {
            reviewer_id,
            user_id,
            title,
            description,
            rating
        };
        // console.log("errors", errors);
        const returnedRequest = await dispatch(createReview(review));
        const res = returnedRequest[0]; //the response of the dispatch
        const reviewData = returnedRequest[1]; //the actual review object
        if (res.ok) {
            setShowModal(false);
        }

        //reviewedUserReviews is an array of the reviews of the user that is being reviewed
        //we spread here to prevent the actual previous state from being altered
        const reviewedUserReviews = [...reviewedUser?.review_id];
        console.log(reviewedUserReviews);

        // const nextUser = {...reviewedUser};
        // console.log(nextUser);

        reviewedUserReviews?.push(reviewData);
        console.log(reviewedUserReviews);

        const updatedReviewedUser = {
            ...reviewedUser,
            review_id: reviewedUserReviews
        }
        // reviewedUser.review_id = reviewedUserReviews
        console.log(updatedReviewedUser);
        
        dispatch(updateUser(updatedReviewedUser));

    }

    const changeHandler = (e, type) => {
        let currTitle = title;
        let currDescription = description;
        let currRating = rating;
        // console.log("rating", rating);
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
        // console.log(currTitle.length, currRating, currDescription.length);
        if (currTitle.length > 0 && currTitle.length <= 50 && currDescription.length > 0 && currDescription.length <= 400 && currRating > 0) {
            setCanSubmit(true);
        } else {
            setCanSubmit(false);
        }
    }

    return (
        <div className="create-review-container">
            <form className="create-review-form">
                <h2>Create a Review</h2>
                <label><span>Title</span>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => changeHandler(e, 'title')}
                        placeholder="Title"
                    />
                </label>
                <div className="errors">{errors?.title}</div>
                <label >
                    <span>Rating</span>
                    {/* <Rating setRating={setRating} setHoverRating={setHoverRating} rating={rating} hoverRating={hoverRating} /> */}
                    <div className="stars-container">
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
                        placeholder="Rating"
                    /> */}
                </label>
                {/* <div className="errors">{errors?.rating}</div> */}
                <label><span>Description</span>
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => changeHandler(e, 'description')}
                        placeholder="Description"
                    />
                </label>
                <div className="errors">{errors?.description}</div>
                { canSubmit ?
                    <div
                    className="submit-btn"
                    onClick={handleSubmit}
                    >
                    Make Your Review</div>
                    :
                    <div className="disabled-btn">
                        Make Your Review
                    </div>
                }
            </form>
        </div>
    )
}

export default CreateReviewForm;