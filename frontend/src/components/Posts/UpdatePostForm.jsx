import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { fetchGamePosts, fetchUserPosts, updatedPost } from "../../store/posts";


const UpdatePostForm = ({ setShowModal, post, type }) => {
  const dispatch = useDispatch();
  const games = useSelector(state => Object.values(state?.games));
  const game = games.find(el => el._id === post.game_id);
  const [title, setTitle] = useState(post.title);
  const [description, setDescription] = useState(post.description);
  const [errors, setErrors] = useState({title: '', description: ''});
  const [canSubmit, setCanSubmit] = useState(false);
  let { nameURL } = useParams();
  nameURL ||= game.nameURL;

  const handleChange = (e, field) => {
    let currTitle = title;
    let currDescription = description;

    if (type === 'title') {
      currTitle = e.target.value;
      setTitle(currTitle);
      if (currTitle.length > 50) {
        setErrors({ ...errors, "title": "Title cannot be longer than 50 characters" })
      } else {
        setErrors({ ...errors, "title": '' })
      }
    } else {
      currDescription = e.target.value;
      setDescription(currDescription);

      if (currDescription.length > 400) {
          setErrors({ ...errors, "description": "Description cannot be longer than 400 characters" })
      } else {
          setErrors({ ...errors, "description": '' })
      }
    }
    if (currTitle.length > 0 && currTitle.length <= 50 && currDescription.length > 0 && currDescription.length <= 400 ) {
      setCanSubmit(true);
    } else {
      setCanSubmit(false);
    }
  }
  

  const handleSubmit = () => {
    const updatedPostInfo = {
      ...post,
      title,
      description
    };

    dispatch(updatedPost(updatedPostInfo)).then(res => {
      if (res.ok) {
        setShowModal(false);
      }
    })
  }


  useEffect(() => {
    if (type === 'profile') dispatch(fetchUserPosts(post?.author_id.username));
    else dispatch(fetchGamePosts(nameURL));
  }, [post.title, post.description]);


  return (
    <div className="create-post-container">

    </div>
  )
};

export default UpdatePostForm;