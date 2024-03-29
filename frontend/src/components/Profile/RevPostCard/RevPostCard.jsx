import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { fetchUserPosts } from '../../../store/posts';
import { fetchUserReviews } from '../../../store/reviews';
import PostIndex from '../../Posts/PostIndex';
import './RevPostCard.scss';
import ReviewIndex from '../../Reviews/ReviewIndex';


const RevPostCard = ({ selectedTab, setSelectedTab }) => {
  const dispatch = useDispatch();
  const { username } = useParams();
  const history = useHistory();
  const showUser = useSelector(state => state?.users[username]);
  const posts = useSelector(state => Object.values(state?.posts));
  const reviews = useSelector(state => Object.values(state?.reviews));


  useEffect(() => {
    dispatch(fetchUserPosts(username))
      .then(data => {
        if (data.errors) history.push('/uh-oh/404');
      });

    dispatch(fetchUserReviews(username))
      .then(data => {
        if (data.errors) history.push('/uh-oh/404');
      });
    
    window.scrollTo(0,0);
  }, [dispatch, username, showUser?.profileImageUrl]);


  if (!showUser) return null;


  return (
    <div id="rev-post-card-container">
      <div id="top-buttons-holder">
        <div id="top-buttons-shadow" />

        <div 
          className={selectedTab === 'posts' ? 'rev-post-top-btn selected-tab' : 'rev-post-top-btn'}
          onClick={() => {setSelectedTab('posts'); window.scrollTo(0,0)}}
          id="post-idx-btn"
          >
          POSTS
        </div>
        <div 
          className={selectedTab === 'reviews' ? 'rev-post-top-btn selected-tab' : 'rev-post-top-btn'}
          onClick={() => {setSelectedTab('reviews'); window.scrollTo(0,0)}}
          id="rev-idx-btn"
          >
          REVIEWS
        </div>
      </div>

      {selectedTab === 'posts' ? (
        posts?.length ? <PostIndex posts={posts} type="profile" /> : "This gamer has not made any posts yet."
      ) : (
        reviews?.length ? <ReviewIndex reviews={reviews} /> : "This gamer does not have any reviews yet."
      )}
    </div>
  )
};

export default RevPostCard;