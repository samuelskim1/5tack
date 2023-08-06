import './PostIndex.scss';
import PostIndexItem from './PostIndexItem';


const PostIndex = ({ posts, type }) => {

  if (!posts) return null;

  return (
    <div className="posts-index-container">
      {posts?.map((post, i) => (
        <PostIndexItem post={post} key={i} type={type}/>
      ))}
    </div>
  )
};

export default PostIndex;