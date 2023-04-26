import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost, fetchGamePosts } from "../../store/posts";
import './PostForms.scss';
import { clearSessionErrors } from "../../store/session";

const CreatePostForm = ({ setShowModal, game }) => {
    const dispatch = useDispatch();

    const errors = useSelector(state => state?.errors?.posts);
    const game_id = game._id;
    const author_id = useSelector(state => state.session.user?._id);
    // const posts = useSelector(state => state.posts);
    // console.log('game id', game.id);
    // console.log('author id', author_id);
    
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
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
        return () => {
            dispatch(clearSessionErrors());
            // dispatch(fetchGamePosts(game.gameURL));
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
        console.log("errors", errors);
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
                <div>{errors?.title}</div>
                <label><span>Description</span>
                    <input
                    type="text"
                    value={description}
                    onChange={(e) => changeHandler(e, 'description')}
                    placeholder="Description"
                    />
                </label>
                <div>{errors?.description}</div>
                { canSubmit ?
                    <div
                    className="submit-btn"
                    onClick={handleSubmit}
                    >
                    Make Your Stack Request</div>
                    :
                    <div className="submit-btn disabled-btn">
                        Make Your Stack Request
                    </div>
                }
            </form>
        </div>
    )
}

export default CreatePostForm;