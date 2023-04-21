import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { deletePost } from '../../store/posts';
import UpdatePostModal from '../PostForms/UpdatePostModal';

const PostButtons = ({ post }) => {
    const dispatch = useDispatch();

    return (
        <div className='post-buttons-holder'>
            <UpdatePostModal post={post} />
            <div className='delete-post-btn' onClick={() => dispatch(deletePost(post._id))}>
                <i class="fa-solid fa-trash"></i>
            </div>
        </div>
    )
}

export default PostButtons;