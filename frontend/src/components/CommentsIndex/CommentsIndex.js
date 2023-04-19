
import Avatar from '../UserInfo/Avatar';
import './CommentsIndex.scss';

const CommentsIndex = () => {

  return (
    <div className='comments-index-container'>
      <div className='comment-item'>
        <Avatar />
        hello this is a comment
      </div>
    </div>
  );
};

export default CommentsIndex;