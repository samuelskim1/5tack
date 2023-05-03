import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createReview, fetchUserReviews } from "../../store/reviews";
import './ReviewForms.scss';
import { clearSessionErrors } from "../../store/session";
import Rating from "./Rating";

const CreateReviewForm = ({ setShowModal, user }) => {
    const dispatch = useDispatch();

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

    const handleSubmit = () => {
        const review = {
            reviewer_id,
            user_id,
            title,
            description,
            rating
        };
        console.log("errors", errors);
        const res = dispatch(createReview(review)).then(res => {
            if (res.ok) {
                setShowModal(false);
            }
        });
    }

    const changeHandler = (e, type) => {
        let currTitle = title;
        let currDescription = description;
        let currRating = rating;
        console.log("rating", rating);
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
        console.log(currTitle.length, currRating, currDescription.length);
        if (currTitle.length > 0 && currTitle.length <= 50 && currDescription.length > 0 && currDescription.length <= 400 && currRating > 0) {
            console.log("should be submittable????");
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