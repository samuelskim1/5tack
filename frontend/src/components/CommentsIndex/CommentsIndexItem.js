import { Link } from "react-router-dom";
import Avatar from "../UserInfo/Avatar";
import TimeStamp from "../TimeStamp/TimeStamp";


const CommentsIndexItem = ({ comment }) => {

  if (!comment.author_id) return null;

  return (
    <div className='comment-item'>
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
  );
};

export default CommentsIndexItem;