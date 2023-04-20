import './PostIndex.scss';
import PostIndexItem from './PostIndexItem';
import CreatePostForm from '../PostForms/CreatePostForm';


const PostIndex = ({ posts }) => {

  if (!posts || !posts.length) return null;

  return (
    <div className="posts-index-container">
      {posts?.map((post, i) => (
        <PostIndexItem post={post} key={i} />
      ))}
    </div>
  )
};

export default PostIndex;