import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min"
import { fetchGamePosts } from "../../store/posts";
import AuthCards from "../AuthCards/AuthCards";
import PostIndex from "../Posts/PostIndex";
import GameCard from "./GameCard";


const GameShow = () => {
  const history = useHistory();
  const { nameURL } = useParams();
  const game = useSelector(state => state?.games[nameURL]);
  const gamePosts = useSelector(state => Object.values(state.posts));
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchGamePosts(nameURL))
      .then(data => {
        if (data.errors) {
          history.push('/uh-oh/404');
        }
      });
      window.scrollTo(0,0);
  }, [dispatch, nameURL, history]);


  if (!game || !gamePosts) return null;

  return (
    <AuthCards
      card1={<GameCard game={game} />}
      card2={<PostIndex posts={gamePosts} />}
      />
  )
};

export default GameShow;