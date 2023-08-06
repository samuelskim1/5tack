import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost, fetchGamePosts } from "../../store/posts";
// import './PostForms.scss';
import { clearSessionErrors } from "../../store/session";

const CreatePostForm = ({ setShowModal, game }) => {
    const dispatch = useDispatch();
    const [errors, setErrors] = useState({title: '', description: ''});
    const game_id = game._id;
    const author_id = useSelector(state => state.session.user?._id);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [canSubmit, setCanSubmit] = useState(false);

    const changeHandler = (e, type) => {
        let currTitle = title;
        let currDescription = description;
        if (type === 'title') {
            currTitle = e.target.value;
            setTitle(currTitle);
            if (currTitle.length > 50) {
                setErrors({ ...errors, ["title"]: "Title cannot be longer than 50 characters" })
            } else {
                setErrors({ ...errors, ["title"]: '' })
            }
        } else {
            currDescription = e.target.value;
            setDescription(currDescription);
            
            if (currDescription.length > 400) {
                setErrors({ ...errors, ["description"]: "Description cannot be longer than 400 characters" })
            } else {
                setErrors({ ...errors, ["description"]: '' })
            }
        }
        if (currTitle.length > 0 && currTitle.length <= 50 && currDescription.length > 0 && currDescription.length <= 400 ) {
            setCanSubmit(true);
        } else {
            setCanSubmit(false);
        }
    }

    useEffect(() => {
        return () => {
            dispatch(clearSessionErrors());
        }
    }, [dispatch]);

    const handleSubmit = () => {
        const post = {
            comment_id: [],
            author_id,
            game_id,
            title,
            description
        };
        const res = dispatch(createPost(post)).then(res => {
            if (res.ok) {
            setShowModal(false);
            }
        });
    }

    return (
        <div className="create-post-container">
            <form className="create-post-form">
            <h2>Create a Post</h2>
                <label><span>Title</span>
                    <input
                    type="text"
                    value={title}
                    onChange={(e) => changeHandler(e, 'title')}
                    placeholder="Title"
                    />
                </label>
                <div className="errors">{errors?.title}</div>
                <label><span>Description</span>
                    <input
                    type="text"
                    value={description}
                    onChange={(e) => changeHandler(e, 'description')}
                    placeholder="Description"
                    />
                </label>
                <div className="errors">{errors?.description}</div>
                { canSubmit ?
                    <div
                    className="submit-btn"
                    onClick={handleSubmit}
                    >
                    Make Your Stack Request</div>
                    :
                    <div className="disabled-btn">
                        Make Your Stack Request
                    </div>
                }
            </form>
        </div>
    )
}

export default CreatePostForm;