import './ReviewIndex.scss';
import ReviewIndexItem from './ReviewIndexItem';
import CreateReviewModal from "../ReviewForms/CreateReviewModal";


const ReviewIndex = ({ reviews, user }) => {

    if (!reviews || !reviews.length) return null;

    return (
        <div className="reviews-index-container">
            <CreateReviewModal user={user} />
            {reviews?.map((review, i) => (
                <ReviewIndexItem review={review} key={i} />
            ))}
        </div>
    )
};

export default ReviewIndex;