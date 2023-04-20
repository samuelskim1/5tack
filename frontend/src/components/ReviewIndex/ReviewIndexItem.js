import { Link } from 'react-router-dom';
import TimeStamp from '../TimeStamp/TimeStamp';
import Avatar from '../UserInfo/Avatar';

const ReviewIndexItem = ({ review }) => {

    return (
        <div className='review-index-item'>
            <div className='review-index-title'>
                {review?.title}
            </div>
            <div className='author-block'>
                <div className='author-info'>
                    <Link to={`/${review?.reviewer_id.username}`}>
                        <Avatar user={review?.reviewer_id} />
                    </Link>
                    <Link to={`/${review?.reviewer_id.username}`}>
                        <div className='author-username'>
                            {review?.reviewer_id.username}
                        </div>
                    </Link>
                </div>
                <TimeStamp review={review} />
            </div>
            <div className='review-index-description'>
                {review?.description}
            </div>
            <div className='review-comment-separator' />
        </div>
    );
};

export default ReviewIndexItem;