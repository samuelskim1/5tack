import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";


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


  
};

export default PostIndexItem;