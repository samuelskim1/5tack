import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { clearSessionErrors, updateUser } from "../../store/session";
import { useHistory, useParams } from "react-router-dom";

const EditUserInfoForm = ({ setEdit }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { username } = useParams();

    const errors = useSelector(state => state.errors?.session);
    const showUser = useSelector(state => state?.users[username]);

    const [showUsername, setShowUsername] = useState(showUser?.username);
    const [email, setEmail] = useState(showUser?.email);
    const [description, setDescription] = useState(showUser?.description || '');
    // const [password, setPassword] = useState('');

    useEffect(() => {
        return () => dispatch(clearSessionErrors());
    }, []);

    const handleSubmit = () => {
        const user = {
            ...showUser,
            showUsername,
            email,
            description
        }
        const res = dispatch(updateUser(user));
        // console.log(res);
        if (res) {
            setEdit(false);
            history.push(`/${showUsername}`);
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
                <label>
                    <span>Username</span>
                    <input
                        type="text"
                        value={showUsername}
                        onChange={(e) => setShowUsername(e.target.value)}
                        placeholder="Username"
                    />
                </label>
                <div className="errors">{errors?.email}</div>
                <label>
                    <span>Email</span>
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                    />
                </label>
                <div className="errors">{errors?.description}</div>
                <label>
                    <span>Description</span>
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