import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchUserReviews, updateReview } from "../../store/reviews";

const UpdateReviewForm = ({ setShowModal, review }) => {
    const dispatch = useDispatch();

    const { username } = useParams();
    const errors = useSelector(state => state.errors?.reviews);
    // const gameURL = useSelector(state => review.game)

    const [title, setTitle] = useState(review.title);
    const [description, setDescription] = useState(review.description);
    // const [rating, setRating] = useState(review.rating);
    
    const [rating, setRating] = useState(review.rating);
    const [hoverRating, setHoverRating] = useState(0);

    useEffect(() => {
        dispatch(fetchUserReviews(username));
    }, [review.title, review.description, review.rating]);

    const handleSubmit = () => {
        const updatedReviewInfo = {
            ...review,
            title,
            description,
            rating
        }
        console.log(updatedReviewInfo);
        console.log(updatedReviewInfo._id);
        dispatch(updateReview(updatedReviewInfo)).then(res => {
            if (res.ok) {
                setShowModal(false);
            }
        });
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
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </label>
                <div>{errors?.title}</div>
                <label >
                    <span>Rating</span>
                    <div>
                        {[...Array(5)].map((star, i) => {
                            i += 1;
                            return (
                                <span
                                    key={i}
                                    onClick={() => setRating(i)}
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
                <div>{errors?.rating}</div>
                <label >
                    <span>Description</span>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </label>
                <div>{errors?.description}</div>
                <div
                    className="submit-btn"
                    onClick={handleSubmit}
                >
                    Save Changes
                </div>
            </form>
        </div>
    )
}

export default UpdateReviewForm;