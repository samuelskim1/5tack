
import './PostIndex.scss';


const PostIndex = ({ posts }) => {


  return (
    <div className="post-index-container">
      {posts?.map((post, i) => (
        <div className='post-index-item' key={i} >
          <div className='post-index-title'>
            {post.title}
          </div>
          <div className='post-index-description'>
            {post.description}
          </div>
        </div>
      ))}
    </div>
  )
};

export default PostIndex;