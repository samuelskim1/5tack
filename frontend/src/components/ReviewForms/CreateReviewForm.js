import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createReview, fetchUserReviews } from "../../store/reviews";
import './ReviewForms.scss';
import { clearSessionErrors } from "../../store/session";

const CreateReviewForm = ({ setShowModal, user }) => {
    const dispatch = useDispatch();

    const errors = useSelector(state => state?.errors?.reviews);
    const user_id = user._id;
    const reviewer_id = useSelector(state => state.session.user?._id);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [rating, setRating] = useState('');

    useEffect(() => {
        return () => {
            dispatch(clearSessionErrors());
        }
    }, [dispatch]);

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

    return (
        <div className="create-review-container">
            <form className="create-review-form">
                <h2>Create a Review</h2>
                <label><span>Title</span>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Title"
                    />
                </label>
                <div>{errors?.title}</div>
                <label >
                    <span>Rating</span>
                    <input
                        type="text"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                        placeholder="Rating"
                    />
                </label>
                <div>{errors?.rating}</div>
                <label><span>Description</span>
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Description"
                    />
                </label>
                <div>{errors?.description}</div>
                <div
                    className="submit-btn"
                    onClick={handleSubmit}
                >
                    Make Your Review</div>
            </form>
        </div>
    )
}

export default CreateReviewForm;