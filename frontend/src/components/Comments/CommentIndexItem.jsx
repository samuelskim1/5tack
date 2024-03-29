import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector} from 'react-redux';
import { deleteComment, updateComment } from "../../store/comments";
import { updatedPost } from "../../store/posts";
import { Modal } from "../../context/modal";
import TimeStamp from "../Posts/TimeStamp";


const CommentIndexItem = ({ comment, post }) => {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state?.session?.user);
  const isAuthor = (comment?.author_id?._id || comment?.author_id) === currentUser?._id;
  const commentAuthor = useSelector(state => state.users[comment?.author_id?.username]);
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(comment?.content);
  const [canUpdate, setCanUpdate] = useState(content !== comment?.content);
  const [count, setCount] = useState(content?.length);
  const [showConfirm, setShowConfirm] = useState(false);


  const handleDelete = async (e) => {
    dispatch(deleteComment(comment?._id))
    dispatch(updatedPost(post));
    setShowConfirm(false);
  };

  const handleChange = (e) => {
    let currContent = e.target.value;
    setContent(currContent);
    setCount(currContent.trim().length);
    if (currContent.trim().length > 0 && currContent.trim().length <= 200) {
      setCanUpdate(true);
    } else {
      setCanUpdate(false);
    }
  };

  const handleEnter = async (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (canUpdate) handleUpdate();
    }
    if (e.key === 'Escape') {
      setIsEditing(false);
      setContent(comment?.content);
    }
  };

  const handleUpdate = async (e) => {
    let updatedComment = {
      _id: comment._id,
      author_id: {
        profileImageUrl: currentUser.profileImageUrl,
        username: currentUser.username,
        _id: currentUser._id
      },
      content: content.trim(),
      post_id: {
        _id: post._id
      }
    }
    setContent(content.trim());
    const commentData = await dispatch(updateComment(updatedComment));
    post.comment_id.forEach((element, i) => {
      if (element._id === commentData._id)
      post.comment_id[i] = updatedComment;
    })
    dispatch(updatedPost(post));
    setIsEditing(false);
    setCanUpdate(false);
  };



  return (
    <div className='comment-item'>
      <Link to={`/${commentAuthor?.username}`}>
        <img src={commentAuthor?.profileImageUrl} alt={commentAuthor?.username} />
      </Link>
      <div className='comment-text-holder'>
        <div className='author-block'>
          <div className='author-username'>
            <Link to={`/${commentAuthor?.username}`}>
              {commentAuthor?.username}
            </Link>
          </div>
          <TimeStamp comment={comment} />
        </div>

        <div id="comment-body-container">
          { isEditing ? 
            (
              <>
                <div className='comment-edit-section'>
                  <div id="comment-text-buttons">
                    <textarea
                      value={content}
                      onKeyDown={(e) => handleEnter(e)}
                      onChange={(e) => handleChange(e)}
                    />

                    <div className="comment-buttons-holder">
                      <i
                        className={"fa-regular fa-paper-plane" + (
                          canUpdate ? "" : " disable-btn" 
                        )}
                        onClick={(e) => canUpdate && handleUpdate(e)}
                      />
                      <i
                        className="fa-solid fa-xmark"
                        onClick={() => {setIsEditing(false); setContent(comment?.content)}}
                      />
                    </div>
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
              </>
            )
          : 
              (<div className='comment-body'>
                {comment?.content}
              </div>) 
          } 

          { (isAuthor && !isEditing) &&
            <div className='comment-buttons-holder'>
              <div className='comment-edit' onClick={() => setIsEditing(!isEditing)}>
                <i className="fa-solid fa-pen" />
              </div>
              <div className='delete-comment-btn' onClick={() => setShowConfirm(true)}>
                <i className="fa-solid fa-trash" />
              </div>
            </div>
          }

          {showConfirm && (
            <Modal onClose={() => setShowConfirm(false)} >
              <div className="delete-modal" id="delete-comment-modal">
                <h2>Do you want to delete this comment?</h2>
                <div id="edit-profile-bottom">
                  <div className="save-btn" onClick={handleDelete}>
                    Delete
                  </div>

                  <div className="cancel-btn" onClick={() => setShowConfirm(false)}>
                    Cancel
                  </div>
                </div>
              </div> 
            </Modal>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommentIndexItem;