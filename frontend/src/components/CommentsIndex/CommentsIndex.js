
import { useDispatch, useSelector } from 'react-redux';
import TimeStamp from '../TimeStamp/TimeStamp';
import Avatar from '../UserInfo/Avatar';
import './CommentsIndex.scss';
import { useEffect, useState } from 'react';
import { fetchAllComments } from '../../store/comments';
import { Link } from 'react-router-dom';

const CommentsIndex = ({ post }) => {
  const dispatch = useDispatch();
  const comments = useSelector(state => Object.values(state.comments).slice(1, 5));
  const currentUser = useSelector(state => state.session.user)
  const [content, setContent] = useState('');

  useEffect(() => {
    dispatch(fetchAllComments());
  }, [dispatch])


  return (
    <div className='comments-index-container'>
      {comments?.map((comment, i) => (
        <div className='comment-item' key={i}>
            <Link to={`/${comment.author_id.username}`}>
              <Avatar user={comment.author_id} />
            </Link>
          <div className='comment-text-holder'>
            <div className='author-block'>
              <div className='author-username'>
                <Link to={`/${comment.author_id.username}`}>
                  {comment.author_id.username}
                </Link>
              </div>
              <TimeStamp comment={comment} />
            </div>
            <div className='comment-body'>{comment.content}</div> 
          </div>
        </div>
      ))}

      <div className='comment-item'>
          <Link to={`/${currentUser.username}`}>
            <Avatar user={currentUser} />
          </Link>
        <div className='comment-text-holder'>
          <div className='author-block'>
            <div className='author-username'>
              <Link to={`/${currentUser.username}`}>
                {currentUser.username}
              </Link>
            </div>
          </div>
          <div className='comment-body'>
            <textarea
              placeholder='Say something to begin your premade journey!'
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div> 
        </div>
      </div>
    </div>
  );
};

export default CommentsIndex;