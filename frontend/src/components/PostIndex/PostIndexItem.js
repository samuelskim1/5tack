import { Link, useLocation } from 'react-router-dom';
import CommentsIndex from '../CommentsIndex/CommentsIndex';
import TimeStamp from '../TimeStamp/TimeStamp';
import Avatar from '../UserInfo/Avatar';
import { useSelector } from 'react-redux';
import PostButtons from './PostButtons.js';

const PostIndexItem = ({ post }) => {
  const user = useSelector(state => state.session.user);
  const isAuthor = post?.author_id?._id === user?._id;
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
    <div className='post-index-item'>
      <div className='post-index-title'>
        {post?.title}
        { isAuthor && 
          <PostButtons post={post} />
        }
      </div>
      <div className='author-block'>
        <div className='author-info'>
          <Link to={`/${post?.author_id?.username}`}>
            <Avatar user={post?.author_id} />
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
      <div className='profile-post-tag'>
        {tag && ("#" + tag)}
      </div>
      <div className='post-comment-separator' />
      <CommentsIndex post={post} />
    </div>
  );
};

export default PostIndexItem;