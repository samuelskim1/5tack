import { useSelector } from 'react-redux';
import ReviewIndexItem from './ReviewIndexItem';
import './ReviewIndex.scss';


const ReviewIndex = ({ reviews }) => {
  window.scrollTo(0,0);

  return (
    <div className='reviews-index-container'>
      {reviews?.map((review, idx) => (
        <ReviewIndexItem review={review} key={idx} />
      ))}
    </div>
  )
};

export default ReviewIndex;