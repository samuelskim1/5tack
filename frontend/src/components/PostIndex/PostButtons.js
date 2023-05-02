import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { deletePost } from '../../store/posts';
import UpdatePostModal from '../PostForms/UpdatePostModal';
import { Modal } from '../../context/modal';
import PostForms from '../PostForms/PostForms.scss';

const PostButtons = ({ post }) => {
    const dispatch = useDispatch();

    const [showConfirm, setShowConfirm] = useState(false);

    const handleDelete = () => {
        dispatch(deletePost(post._id));
        setShowConfirm(false);
    }

    return (
        <div className='post-buttons-holder'>
            <UpdatePostModal post={post} />
            <div className='delete-post-btn' onClick={() => dispatch(deletePost(post._id))}>
                <i className="fa-solid fa-trash"></i>
            </div>
            {showConfirm && (
                <Modal onClose={() => setShowConfirm(false)}>
                    <div className='create-post-container create-post-form'>
                        <h2>Do you want to delete this post?</h2>
                        <div className='delete-btns'>
                            <div className='submit-btn' onClick={handleDelete}>Delete</div>
                            <div className='submit-btn cancel-btn' onClick={() => setShowConfirm(false)}>Cancel</div>
                        </div>
                    </div>
                </Modal>
            )}
        </div>
    )
}

export default PostButtons;

// dispatch(deletePost(post._id))