import { useDispatch } from "react-redux";
import { deletePost } from "../../store/posts";
import UpdatePostButton from "./UpdatePostButton";
import { Modal } from "../../context/modal";
import { useState } from "react";


const PostButtons = ({ post, type }) => {
  const dispatch = useDispatch();
  const [showConfirm, setShowConfirm] = useState(false);

  const handleDelete = () => {
    dispatch(deletePost(post._id));
    setShowConfirm(false);
  }

  return (
    <div className="post-buttons-holder">
      <UpdatePostButton post={post} type={type} />
      <div className="delete-post-btn" onClick={() => setShowConfirm(true)} >
        <i className="fa-solid fa-trash" />
      </div>

      {showConfirm && (
        <Modal onClose={() => setShowConfirm(false)} >
          <div className="delete-modal">
            <h2>Do you want to delete this post?</h2>
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

export default PostButtons;