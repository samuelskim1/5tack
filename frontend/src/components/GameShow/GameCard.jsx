import { useDispatch, useSelector } from 'react-redux';
import './GameCard.scss';
import { useState } from 'react';
import { createPost } from '../../store/posts';


const GameCard = ({ game }) => {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({title: '', description: ''});
  const game_id = game._id;
  const author_id = useSelector(state => state?.session?.user?._id);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [canSubmit, setCanSubmit] = useState(false);


  const handleChange = (e, field) => {
    let currTitle = title;
    let currDescription = description;

    if (field === 'title') {
      currTitle = e.target.value;
      setTitle(currTitle);
      if (currTitle.length > 50) {
        setErrors({ ...errors, "title": "Title cannot be longer than 50 characters" });
      } else if (!currTitle.length) {
        setErrors({ ...errors, "title": "Title cannot be blank" });
      } else {
        setErrors({ ...errors, "title": '' });
      }
    } else {
      currDescription = e.target.value;
      setDescription(currDescription);
      if (currDescription.length > 400) {
        setErrors({ ...errors, "description": "Description cannot be longer than 400 characters"});
      } else if (!currDescription.length) {
        setErrors({ ...errors, "description": "Description cannot be blank" });
      } else {
        setErrors({ ...errors, "description": '' });
      }
    }

    if (currTitle.length > 0 && currTitle.length <= 50 && currDescription.length > 0 && currDescription.length <= 400) {
      setCanSubmit(true);
    } else {
      setCanSubmit(false);
    }
  };

  const handleSubmit = () => {
    const post = {
      comment_id: [],
      author_id,
      game_id,
      title,
      description
    };

    dispatch(createPost(post));
  };

  const handleReset = () => {
    setErrors({title: '', description: ''});
    setTitle(''); 
    setDescription(''); 
    setCanSubmit(false)
  };


  return (
    <div className="game-show-container">
      <div className="game-show-top">
        <h2>{game?.name?.toUpperCase()}</h2>
        <img src={game?.imageUrls[0]} alt={`${game?.name} ${1}`} />

      </div>

      <div className="game-show-bottom">
        <div id="create-review-content">
          <h2>Create a Post</h2>

          <div className="create-review-section-container">
            <div className="create-review-label">Title:</div>
            <div className="create-review-field">
              <input
                type="text"
                value={title}
                onChange={(e) => handleChange(e, 'title')}
                placeholder="How was your experience gaming with this person?"
                />
            </div>
            <div className="errors">{errors?.title}</div> 
          </div>

          <div className="create-review-section-container">
            <div className="create-review-label">Description:</div>
            <div className="create-review-field">
              <textarea
                value={description}
                onChange={(e) => handleChange(e, 'description')}
                placeholder="Provide some more details about your gaming experience"
                />
            </div>
            <div className="errors">{errors?.description}</div>
          </div>
        </div>


        <div id="edit-profile-bottom">
          {canSubmit ? 
            <div className="save-btn" onClick={handleSubmit}>
              Post
            </div>
            :
            <div className="save-btn cant-save">
              Post
            </div>
          }

          <div className="cancel-btn" onClick={handleReset}>
            Reset
          </div>
        </div>
      </div>
    </div>
  )
};

export default GameCard;