
import CommentsIndex from '../CommentsIndex/CommentsIndex';
import Avatar from '../UserInfo/Avatar';
import './PostIndex.scss';


const PostIndex = ({ posts }) => {
  

  return (
    <div className="posts-index-container">
      {posts?.map((post, i) => (
        <div className='post-index-item' key={i} >
          <div className='post-index-title'>
            {post.title}
          </div>
          <div className='author-block'>
            <div className='author-info'>
              <Avatar user={post.author_id} />
              <div className='author-username'>
                {post.author_id.username}
              </div>
            </div>
            <div className='post-timestamp'>
              {post.createdAt}
            </div>
          </div>
          <div className='post-index-description'>
            {post.description}
          </div>
          <div className='post-comment-separator' />
          <CommentsIndex />
        </div>
      ))}
    </div>
  )
};

export default PostIndex;