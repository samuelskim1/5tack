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

    useEffect(() => {
        return () => {
            dispatch(clearSessionErrors());
            // dispatch(fetchGamePosts(game.gameURL));
        }
    }, []);

    const handleSubmit = () => {
        const post = {
            comment_id: [],
            author_id,
            game_id,
            title,
            description
        };
        console.log("errors", errors);
        const res = dispatch(createPost(post));
        console.log("res res res res", res.ok);
    }

    return (
        <div className="create-post-form">
            <h2>Create a Post</h2>
            <form className="post-form">
                <label>Title
                    <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                    />
                </label>
                <div>{errors?.title}</div>
                <label>Description
                    <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Description"
                    />
                </label>
                <div>{errors?.description}</div>
                <div
                onClick={handleSubmit}
                >
                Publish</div>
            </form>
        </div>
    )
}

export default CreatePostForm;