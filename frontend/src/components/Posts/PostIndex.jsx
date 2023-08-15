import PostIndexItem from "./PostIndexItem";


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
      {posts?.map((post, idx) => {
        <PostIndexItem post={post} key={post + idx} type={type} />
      })}
    </div>
  )
};

export default PostIndex;