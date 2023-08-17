import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { destroyReview } from '../../store/reviews'
import { updateUser } from '../../store/users';
import { Modal } from '../../context/modal';
import UpdateReviewButton from './UpdateReviewButton';


const ReviewButtons = ({ review }) => {
  const dispatch = useDispatch();
  const { username } = useParams();
  const user = useSelector(state => state?.users[username]);
  const [showConfirm, setShowConfirm] = useState(false);


  const handleDelete = async () => {
    await dispatch(destroyReview(review._id));
    await dispatch(updateUser(user));
    setShowConfirm(false);
  }


  return (
    <div className='post-buttons-holder'>
      <UpdateReviewButton review={review} />
      <div className='delete-post-btn' onClick={() => setShowConfirm(true)}>
        <i className='fa-solid fa-trash' />
      </div>
      {showConfirm && (
        <Modal onClose={() => setShowConfirm(false)} >
          <div className="delete-modal">
            <h2>Do you want to delete this review?</h2>
            <div id="edit-profile-bottom">
              <div className="save-btn" onClick={handleDelete}>
                Delete
              </div>

              <div className="cancel-btn" onClick={() => setShowConfirm(false)}>
                Cancel
              </div>
            </div>
          </div> 
        </Modal>
      )}
    </div>
  )
};

export default ReviewButtons;