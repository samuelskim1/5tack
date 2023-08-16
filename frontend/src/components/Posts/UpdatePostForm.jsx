import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { fetchGamePosts, fetchUserPosts, updatedPost } from "../../store/posts";
import './UpdatePostForm.scss';


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

    if (field === 'title') {
      currTitle = e.target.value;
      setTitle(currTitle);
      if (currTitle.length > 50) {
        setErrors({ ...errors, "title": "Title cannot be longer than 50 characters" })
      } else if (currTitle.length === 0) {
        setErrors({ ...errors, "title": 'Title cannot be blank'})
      } else {
        setErrors({ ...errors, "title": '' })
      }
    } else {
      currDescription = e.target.value;
      setDescription(currDescription);

      if (currDescription.length > 400) {
          setErrors({ ...errors, "description": "Description cannot be longer than 400 characters" })
      } else if (currDescription.length === 0) {
        setErrors({ ...errors, "description": "Description cannot be blank"})
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
    <div id="create-post-container">
      <h2>Edit Post</h2>

      <div className="edit-profile-section">
        <div className="edit-profile-label">
          Title:
        </div>
        <div className="edit-profile-field">
          <input
            type="text"
            value={title}
            onChange={(e) => handleChange(e, 'title')}
            placeholder="What kind of stack are you looking for?"
            />
        </div>
        <div className="errors">{errors?.title}</div>
      </div>

      <div className="edit-profile-section" id="edit-about">
        <div className="edit-profile-label">
          Description: 
        </div>

        <div className="edit-profile-field">
          <textarea
            value={description}
            onChange={(e) => handleChange(e, 'description')}
            placeholder="Provide specific details, such as scheduling, play style, or game mode"
            />
        </div>
        <div className="errors">{errors?.description}</div>
      </div>


      <div id="edit-profile-bottom">
        {canSubmit ? 
          <div className="save-btn" onClick={handleSubmit}>
            Save
          </div>
          :
          <div className="save-btn cant-save">
            Save
          </div>
        }

        <div className="cancel-btn" onClick={() => setShowModal(false)}>
          Cancel
        </div>
      </div>
    </div>
  )
};

export default UpdatePostForm;