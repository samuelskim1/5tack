
import Avatar from '../UserInfo/Avatar';
import './CommentsIndex.scss';

const CommentsIndex = ({ post }) => {

  return (
    <div className='comments-index-container'>
      {post?.comments?.map((comment, i) => (
        <div className='comment-item' key={i}>
          <Avatar user={comment.author} />
          <div className='comment-text-holder'>
            <div className='author-block'>
              <div className='author-username'>{comment.author.username}</div>
              <div className='post-timestamp'>42 seconds ago</div>
            </div>
            <div className='comment-body'>{comment.body}</div> 
          </div>
        </div>
      ))}

        {/* TESTING PURPOSES, DELETE AFTER WE HAVE COMMENTS */}
        <div className='comment-item'>
          <Avatar />
          <div className='comment-text-holder'>
            <div className='author-block'>
              <div className='author-username'>thisisausername</div>
              <div className='post-timestamp'>42 seconds ago</div>
            </div>
            <div className='comment-body'>hello this is a comment. what a great comment. this is a wonderful comment! superlongwordforsomereason xd yesyesyes no</div> 
          </div>
        </div>
        <div className='comment-item'>
          <Avatar />
          <div className='comment-text-holder'>
            <div className='author-block'>
              <div className='author-username'>thisisausername</div>
              <div className='post-timestamp'>42 seconds ago</div>
            </div>
            <div className='comment-body'>hello this is a comment. what a great comment. this is a wonderful comment! superlongwordforsomereason xd yesyesyes no</div> 
          </div>
        </div>
        <div className='comment-item'>
          <Avatar />
          <div className='comment-text-holder'>
            <div className='author-block'>
              <div className='author-username'>thisisausername</div>
              <div className='post-timestamp'>42 seconds ago</div>
            </div>
            <div className='comment-body'>hello this is a comment. what a great comment. this is a wonderful comment! superlongwordforsomereason xd yesyesyes no</div> 
          </div>
        </div>
    </div>
  );
};

export default CommentsIndex;