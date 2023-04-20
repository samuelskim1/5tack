
import { useDispatch, useSelector } from 'react-redux';
import TimeStamp from '../TimeStamp/TimeStamp';
import Avatar from '../UserInfo/Avatar';
import './CommentsIndex.scss';
import { useEffect, useState } from 'react';
import { createComment, fetchAllComments } from '../../store/comments';
import { Link } from 'react-router-dom';

const CommentsIndex = ({ post }) => {
  const dispatch = useDispatch();
  const errors = useSelector(state => state?.errors?.comments)
  const comments = useSelector(state => Object.values(state.comments));
  const currentUser = useSelector(state => state.session.user)
  const [content, setContent] = useState('');

  useEffect(() => {
    dispatch(fetchAllComments());
  }, [dispatch])

  const handleSubmit = (e) => {
    if (e.key === 'Enter') {
      dispatch(createComment({
        author_id: {
          profileImageUrl: currentUser.profileImageUrl, 
          username: currentUser.username,
          _id: currentUser._id
        },
        content: content,
        post_id: {
          _id: post._id
        }
      }))
    }
  };

  const handleChange = (e) => {
    setContent(e.target.value);
  };


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
          {/* <div className='author-block'>
            <div className='author-username'>
              <Link to={`/${currentUser.username}`}>
                {currentUser.username}
              </Link>
            </div>
          </div> */}
          <div className='comment-body'>
            <textarea
              placeholder='Say something to begin your premade journey!'
              value={content}
              onChange={(e) => handleChange(e)}
              onKeyDown={(e) => handleSubmit(e)}
            />
          </div> 
          {!!errors?.content && <div className='errors'>{errors?.content}</div>}
        </div>
      </div>
    </div>
  );
};

export default CommentsIndex;