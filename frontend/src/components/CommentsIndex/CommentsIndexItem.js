import { Link } from "react-router-dom";
import Avatar from "../UserInfo/Avatar";
import TimeStamp from "../TimeStamp/TimeStamp";
import { useDispatch, useSelector} from 'react-redux';
import { deleteComment, updateComment } from "../../store/comments";
import { updatedPost } from "../../store/posts";
import { useState } from "react";


const CommentsIndexItem = ({ comment, post }) => {
  const currentUser = useSelector(state => state.session.user)
  const isAuthor = comment?.author_id?._id === currentUser._id
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(comment?.content);
  const [canUpdate, setCanUpdate] = useState(false);
  


  // if (!comment.author_id) return null;
  const handleDelete = async (e) => {
    dispatch(deleteComment(comment?._id))
    dispatch(updatedPost(post));
  }

  const handleChange = (e) => {
    let currContent = e.target.value;
    setContent(currContent);
    if (currContent.length > 0 && currContent.length <= 200) {
      setCanUpdate(true);
    } else {
      setCanUpdate(false);
    }
  };

  const handleEnter = async (e) => {
    if (e.key === 'Enter') {
      dispatch(updateComment(comment));
      dispatch(updatedPost(post));
    }
  };

  const handleUpdate = async (e) => {
    debugger;
    let updatedComment = {
      _id: comment._id,
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
    console.log(updatedComment);
    const commentData = await dispatch(updateComment(updatedComment));
    console.log(commentData);
    post.comment_id.forEach((element, i) => {
      debugger;
      if (element._id === commentData._id)
      post.comment_id[i] = commentData;
      console.log(element);
    })
    console.log(post);
    dispatch(updatedPost(post));
  }



  return (
    <div className='comment-item'>
      <Link to={`/${comment?.author_id?.username}`}>
        <Avatar currentUser={comment?.author_id} />
      </Link>
      <div className='comment-text-holder'>
        <div className='author-block'>
          <div className='author-username'>
            <Link to={`/${comment?.author_id?.username}`}>
              {comment?.author_id?.username}
            </Link>
          </div>
          { isAuthor &&
            <div className='comment-buttons-holder'>
              <div className='comment-edit' onClick={() => setIsEditing(true)}>edit</div>
              <div className='delete-comment-btn' onClick={() => handleDelete()}>
                  <i className="fa-solid fa-trash"></i>
              </div>
            </div>
          }
          
          <TimeStamp comment={comment} />
        </div>
        { isEditing ?  
          (<textarea
            value={content}
            onChange={(e) => handleChange(e)}
          />
          )
          : (<div
          className='comment-body'>{comment?.content}
          </div> )
        }
        { isEditing && canUpdate ? <i
          className="fa-regular fa-paper-plane"
          onClick={(e) => handleUpdate(e)}
          onKeyDown={(e) => handleEnter(e)}
        />
        : <i
          className="fa-regular fa-paper-plane disable-btn"
        />}
        
      </div>
    </div>
  );
};

export default CommentsIndexItem;