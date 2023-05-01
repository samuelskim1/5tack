import { Link } from 'react-router-dom';
import TimeStamp from '../TimeStamp/TimeStamp';
import Avatar from '../UserInfo/Avatar';
import ReviewButtons from './ReviewButtons';
import { useSelector } from 'react-redux';

const ReviewIndexItem = ({ review }) => {
    const user = useSelector(state => state.session.user)
    const isAuthor = review?.reviewer_id._id === user._id


    return (
        <div className='review-index-item'>
            <div className='review-index-rating'>
                {review?.rating}
                <i class="fa-solid fa-star" style={{color: `$#e4dfd5`}}></i>
                { isAuthor &&
                    <ReviewButtons review={review} />
                }
            </div>
            <div className="review-index-item-information">
                <div className='review-index-title'>
                    {review?.title}
                </div>
                <div className='author-block'>
                    <div className='author-info'>
                        <Link to={`/${review?.reviewer_id?.username}`}>
                            <Avatar user={review?.reviewer_id} />
                        </Link>
                        <Link to={`/${review?.reviewer_id?.username}`}>
                            <div className='author-username'>
                                {review?.reviewer_id?.username}
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
        </div>
    );
};

export default ReviewIndexItem;