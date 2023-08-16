import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { createComment } from '../../store/comments';
import { updatedPost } from '../../store/posts';
import CommentsIndexItem from './CommentIndexItem';
import './CommentIndex.scss';


const CommentIndex = ({ post }) => {
  const dispatch = useDispatch();
  const commentIds = post.comment_id.map(comment => comment?._id);
  const allComments = useSelector(state => state?.comments);
  const comments = commentIds.map(id => allComments[id]);
  const currentUser = useSelector(state => state.session.user)
  const [content, setContent] = useState('');
  const [canSubmit, setCanSubmit] = useState(false);
  const [count, setCount] = useState(content?.length);
  const [editing, setEditing] = useState(false);


  const handleSubmit = async (e) => {
    let createdComment = {
      author_id: {
        profileImageUrl: currentUser.profileImageUrl, 
        username: currentUser.username,
        _id: currentUser._id
      },
      content: content.trim(),
      post_id: {
        _id: post._id
      }
    };
    const commentData = await dispatch(createComment(createdComment));
    post.comment_id.push(commentData);
    dispatch(updatedPost(post));
    setContent('');
    setCanSubmit(false);
    setCount(0);
  };
  
  const handleEnter = async (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (canSubmit) handleSubmit();
    }
  };

  const handleChange = (e) => {
    let currContent = e.target.value;
    setContent(currContent);
    setCount(currContent.trim().length);
    if (currContent.trim().length > 0 && currContent.trim().length <= 200) {
      setCanSubmit(true);
    } else {
      setCanSubmit(false);
    }
  };
  


  if (!Object.keys(allComments).length) return null;


  return (
    <div className='comments-index-container'>
      {comments?.map((comment, i) => (
        <CommentsIndexItem comment={comment} post={post} key={i}/>
      ))}

      <div className='comment-item'>
          <Link to={`/${currentUser?.username}`}>
            <img src={currentUser?.profileImageUrl} alt={currentUser?.username} />
          </Link>
        <div className='comment-text-holder'>
          <div className='comment-body'>
            <textarea
              placeholder='Say something to begin your premade journey!'
              value={content}
              onChange={(e) => handleChange(e)}
              onKeyDown={(e) => handleEnter(e)}
              onFocus={() => setEditing(true)}
              onBlur={() => setEditing(false)}
            />
            {canSubmit ? <i 
              className="fa-regular fa-paper-plane" 
              onClick={() => handleSubmit()}
            />
            : <i 
            className="fa-regular fa-paper-plane disable-btn"
          />}
          </div>
            <div id="edit-comment-count">
              <div 
                className={(count === 0 || count > 200) ? 'bad-count' : ""}
                >
                {`${count}`}
              </div>
              <p>/200</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CommentIndex;