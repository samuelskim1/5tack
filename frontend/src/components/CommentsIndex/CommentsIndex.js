
import { useDispatch, useSelector } from 'react-redux';
import TimeStamp from '../TimeStamp/TimeStamp';
import Avatar from '../UserInfo/Avatar';
import './CommentsIndex.scss';
import { useEffect, useState } from 'react';
import { createComment, fetchAllComments } from '../../store/comments';
import { Link } from 'react-router-dom';
import { receivePost, updatedPost } from '../../store/posts';

const CommentsIndex = ({ post }) => {
  const dispatch = useDispatch();
  const errors = useSelector(state => state?.errors?.comments);
  const commentIds = post.comment_id.map(comment => comment?._id);
  const allComments = useSelector(state => state?.comments);
  const comments = commentIds.map(id => allComments[id]);
  const currentUser = useSelector(state => state.session.user)
  const [content, setContent] = useState('');

  // useEffect(() => {
  //   dispatch(fetchAllComments());
  // }, [dispatch])
  
  const handleSubmit = async (e) => {
    if (e.key === 'Enter') {
      let createdComment = {
        author_id: {
          profileImageUrl: currentUser.profileImageUrl, 
          username: currentUser.username,
          _id: currentUser._id
        },
        content: content,
        post_id: {
          _id: post._id
        }
      }
      const commentData = await dispatch(createComment(createdComment));
      post.comment_id.push(commentData);
      dispatch(updatedPost(post));
    }
  };
  
  const handleChange = (e) => {
    setContent(e.target.value);
  };
  
  if (!Object.keys(allComments).length) return null;

  return (
    <div className='comments-index-container'>
      {comments?.map((comment, i) => (
        <div className='comment-item' key={i}>
          <Link to={`/${comment?.author_id?.username}`}>
            <Avatar user={comment?.author_id} />
          </Link>
          <div className='comment-text-holder'>
            <div className='author-block'>
              <div className='author-username'>
                <Link to={`/${comment?.author_id?.username}`}>
                  {comment?.author_id.username}
                </Link>
              </div>
              <TimeStamp comment={comment} />
            </div>
            <div className='comment-body'>{comment?.content}</div> 
          </div>
        </div>
      ))}

      <div className='comment-item'>
          <Link to={`/${currentUser.username}`}>
            <Avatar user={currentUser} />
          </Link>
        <div className='comment-text-holder'>
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