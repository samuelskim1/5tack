import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { destroyReview } from '../../store/reviews'
import UpdateReviewModal from '../ReviewForms/UpdateReviewModal';

const ReviewButtons = ({ review }) => {
    const dispatch = useDispatch();

    return (
        <div className='review-buttons-holder'>
            <UpdateReviewModal review={review} />
            <div className='delete-review-btn' onClick={() => dispatch(destroyReview(review._id))}>
                <i className="fa-solid fa-trash"></i>
            </div>
        </div>
    )
}

export default ReviewButtons;