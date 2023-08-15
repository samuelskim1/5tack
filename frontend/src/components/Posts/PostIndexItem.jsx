import { useSelector } from "react-redux";
import { useLocation, Link } from "react-router-dom/cjs/react-router-dom.min";
import PostButtons from "./PostButtons";
import TimeStamp from "./TimeStamp";


const PostIndexItem = ({ post, type }) => {
  const currentUser = useSelector(state => state?.session?.user);
  const isAuthor = post?.author_id?._id === currentUser?._id;
  const games = useSelector(state => Object.values(state?.games));
  const game = games.find(el => el._id === post.game_id);
  const gameName = game?.name;
  const { pathname } = useLocation();
  const params = pathname.split('/');
  let tag;


  if (params.length === 2 && params[1] !== 'home') {
    tag = gameName;
  }


  return (
    <div className="post-index-item">
      <div className="post-top-section">
        <div className="post-index-title">
          {post?.title}
          {isAuthor &&
            <PostButtons post={post} type={type} />          
          }
        </div>

        <div className='author-block'>
          <div className='author-info'>
            <Link to={`/${post?.author_id?.username}`}>
              <img src={post?.author_id?.profileImageUrl} alt={post?.author_id?.username} />
            </Link>
            <Link to={`/${post?.author_id?.username}`}>
              <div className='author-username'>
                {post?.author_id?.username}
              </div>
            </Link>
          </div>
          <TimeStamp post={post} />
        </div>
        <div className='post-index-description'>
          {post?.description}
        </div>
        {tag && (
          <Link to={`/games/${game.nameURL}`}>
            <div className='profile-post-tag'>
              {"#" + tag}
            </div>
          </Link>
        )}
      </div>
      <div className='post-comment-separator' />
    </div>
  )
};

export default PostIndexItem;