import './ReviewIndex.scss';
import ReviewIndexItem from './ReviewIndexItem';
import { useSelector } from 'react-redux';


const ReviewIndex = ({ reviews, user }) => {

    const currentUser = useSelector(state => state.session.user);
    if (!reviews) return null;

    return (
        <div className="reviews-index-container">
            {reviews?.map((review, i) => (
                <ReviewIndexItem review={review} key={i} />
            ))}
        </div>
    )
};

export default ReviewIndex;