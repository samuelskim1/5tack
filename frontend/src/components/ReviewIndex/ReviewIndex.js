import './ReviewIndex.scss';
import ReviewIndexItem from './ReviewIndexItem';
import CreateReviewModal from "../ReviewForms/CreateReviewModal";
import { useSelector } from 'react-redux';


const ReviewIndex = ({ reviews, user }) => {

    const currentUser = useSelector(state => state.session.user);
    if (!reviews) return null;

    return (
        <div className="reviews-index-container">
            {currentUser?._id !== user?._id && <CreateReviewModal user={user} />}
            {reviews?.map((review, i) => (
                <ReviewIndexItem review={review} key={i} />
            ))}
        </div>
    )
};

export default ReviewIndex;