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
    const [canSubmit, setCanSubmit] = useState(false);

    const changeHandler = (e, type) => {
        let currTitle = title;
        let currDescription = description;
        if (type === 'title') {
            currTitle = e.target.value;
            setTitle(currTitle);
        } else {
            currDescription = e.target.value;
            setDescription(currDescription);
        }
        if (currTitle.length > 0 && currTitle.length <= 50 && currDescription.length > 0 && currDescription.length <= 400 ) {
            setCanSubmit(true);
        } else {
            setCanSubmit(false);
        }
    }

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
                        onChange={e => changeHandler(e, 'title')}
                    />
                </label>
                <div>{errors?.title}</div>
                <label >
                <span>Description</span>
                    <textarea
                        value={description}
                        onChange={e => changeHandler(e, 'description')}
                        />
                </label>
                <div>{errors?.description}</div>
                { canSubmit ?
                    <div
                        className="submit-btn"
                        onClick={handleSubmit}
                    >
                        Save Changes
                    </div>
                    :
                    <div
                        className="disabled-btn"
                    >
                        Save Changes
                    </div>
                }
            </form>
        </div>
    )
}

export default UpdatePostForm;