import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { removeReview } from '../../store/reviews'
import UpdateReviewModal from '../ReviewForms/UpdateReviewModal';

const ReviewButtons = ({ review }) => {
    const dispatch = useDispatch();

    return (
        <div className='review-buttons-holder'>
            <UpdateReviewModal review={review} />
            <div className='delete-review-btn' onClick={() => dispatch(removeReview(review._id))}>
                <i class="fa-solid fa-trash"></i>
            </div>
        </div>
    )
}

export default ReviewButtons;