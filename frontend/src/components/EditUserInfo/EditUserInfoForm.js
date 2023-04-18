import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { clearSessionErrors, updateUser } from "../../store/session";
import { useHistory } from "react-router-dom";

const EditUserInfoForm = ({ currentUser, setEdit }) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const errors = useSelector(state => state.errors?.session);

    const [username, setUsername] = useState(currentUser.username);
    const [email, setEmail] = useState(currentUser.email);
    const [description, setDescription] = useState(currentUser.description);
    // const [password, setPassword] = useState('');

    useEffect(() => {
        return () => dispatch(clearSessionErrors());
    }, []);

    const handleSubmit = () => {
        const user = {
            ...currentUser,
            username,
            email,
            description
        }
        const res = dispatch(updateUser(user));
        // console.log(res);
        if (res) {
            setEdit(false);
            history.push(`/${username}`);
        };
        // .then(res => {
        //     if (res.ok) {
        //         console.log('testing if this part is being reached');
        //         history.push(`/${username}`);
        //     };
        // });
    }

    return (
        <div className="session-form-container">
            <h1>this is editing the user profile</h1>
            <form className="session-form">
                <div className="errors">{errors?.username}</div>
                <label>Username
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
                    />
                </label>
                <div className="errors">{errors?.email}</div>
                <label>Email
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                    />
                </label>
                <div className="errors">{errors?.description}</div>
                <label>description
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Description"
                    />
                </label>
                <div onClick={handleSubmit}>update</div>
            </form>
        </div>
    )
}

export default EditUserInfoForm;