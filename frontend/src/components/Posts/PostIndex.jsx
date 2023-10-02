import PostIndexItem from "./PostIndexItem";
import './PostIndex.scss';


const PostIndex = ({ posts, type }) => {
  
  if (!posts) {
    return (
      <div>
        No posts have been made yet :(
      </div>
    )
  }

  return (
    <div className="posts-index-container">
      {!type && (
        <div id="game-show-shadow-anchor">
          <div id="game-show-shadow" />
        </div>
      )}

      {posts.map((post, idx) => (
        <PostIndexItem post={post} key={post + idx} type={type} />
      ))}

    </div>
  )
};

export default PostIndex;