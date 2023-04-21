import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchGamePosts, updatedPost } from "../../store/posts";

const UpdatePostForm = ({ setShowModal, post }) => {
    const dispatch = useDispatch();

    const { nameURL } = useParams();
    const errors = useSelector(state => state.errors?.posts);
    // const gameURL = useSelector(state => post.game)
    
    const [title, setTitle] = useState(post.title);
    const [description, setDescription] = useState(post.description);

    useEffect(() => {
        dispatch(fetchGamePosts(nameURL));
    }, [post.title, post.description]);

    const handleSubmit = () => {
        const updatedPostInfo = {
            ...post,
            title,
            description
        }
        console.log(updatedPostInfo);
        console.log(updatedPostInfo._id);
        dispatch(updatedPost(updatedPostInfo)).then(res => {
            if (res.ok) {
                setShowModal(false);
            }
        });
    }

    return (
        <div className="create-post-container">
            <form className="create-post-form">
                <h2>Edit Post</h2>
                <label >
                    <span>Title</span>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </label>
                <div>{errors?.title}</div>
                <label >
                <span>Description</span>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        />
                </label>
                <div>{errors?.description}</div>
                <div
                    className="submit-btn"
                    onClick={handleSubmit}
                >
                    Save Changes
                </div>
            </form>
        </div>
    )
}

export default UpdatePostForm;