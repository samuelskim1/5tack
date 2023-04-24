import { Link } from 'react-router-dom';
import CommentsIndex from '../CommentsIndex/CommentsIndex';
import TimeStamp from '../TimeStamp/TimeStamp';
import Avatar from '../UserInfo/Avatar';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchAllComments } from '../../store/comments';
import PostButtons from './PostButtons';

const PostIndexItem = ({ post }) => {
  const dispatch = useDispatch();
  // const postComments = useSelector(state => state.posts[post._id].comment_id);


  // useEffect(() => {
  //   dispatch(fetchAllComments());
  // }, [dispatch]);

  return (
    <div className='post-index-item'>
      <div className='post-index-title'>
        {post?.title}
        <PostButtons post={post} />
      </div>
      <div className='author-block'>
        <div className='author-info'>
          <Link to={`/${post?.author_id.username}`}>
            <Avatar user={post?.author_id} />
          </Link>
          <Link to={`/${post?.author_id.username}`}>
            <div className='author-username'>
              {post?.author_id.username}
            </div>
          </Link>
        </div>
        <TimeStamp post={post} />
      </div>
      <div className='post-index-description'>
        {post?.description}
      </div>
      <div className='post-comment-separator' />
      <CommentsIndex post={post} />
    </div>
  );
};

export default PostIndexItem;