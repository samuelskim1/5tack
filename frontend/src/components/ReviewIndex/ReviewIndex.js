import './ReviewIndex.scss';
import ReviewIndexItem from './ReviewIndexItem';


const ReviewIndex = ({ reviews }) => {

    if (!reviews || !reviews.length) return null;

    return (
        <div className="reviews-index-container">
            {reviews?.map((review, i) => (
                <ReviewIndexItem review={review} key={i} />
            ))}
        </div>
    )
};

export default ReviewIndex;