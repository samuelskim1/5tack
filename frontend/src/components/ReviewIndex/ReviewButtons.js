import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { destroyReview } from '../../store/reviews'
import UpdateReviewModal from '../ReviewForms/UpdateReviewModal';
import { Modal } from '../../context/modal';
import { useParams } from 'react-router-dom';
import { updateUser } from '../../store/users';

const ReviewButtons = ({ review }) => {
    const dispatch = useDispatch();
    const { username } = useParams();
    const user = useSelector(state => state?.users[username]);
    const [showConfirm, setShowConfirm] = useState(false);


    const handleDelete = async () => {
        await dispatch(destroyReview(review._id));
        await dispatch(updateUser(user));
        setShowConfirm(false);
    }

    return (
        <div className='review-buttons-holder'>
            <UpdateReviewModal review={review} />
            <div className='delete-review-btn' onClick={() => setShowConfirm(true)}>
                <i className="fa-solid fa-trash"></i>
            </div>
            {showConfirm && (
                <Modal onClose={() => setShowConfirm(false)}>
                    <div className='create-post-container create-post-form'>
                        <h2>Do you want to delete this review?</h2>
                        <div className='delete-btns'>
                            <div className='submit-btn' onClick={handleDelete}>Delete</div>
                            <div className='submit-btn cancel-btn' onClick={() => setShowConfirm(false)}>Cancel</div>
                        </div>
                    </div>
                </Modal>
            )}
        </div>
    )
}

export default ReviewButtons;

// dispatch(destroyReview(review._id))