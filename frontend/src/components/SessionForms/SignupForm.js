import { signup } from "../../store/session";
import LoginModal from "./LoginModal";

const { useState, useEffect } = require("react");
const { useDispatch, useSelector } = require("react-redux");
const { clearSessionErrors } = require("../../store/session");

const SignupForm = () => {
    const dispatch = useDispatch();
    const errors = useSelector(state => state?.errors?.session);
    // const [currModal, setCurrModal] = useState('signup');
    
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        return () => {
            dispatch(clearSessionErrors());
        };
    }, [dispatch]);

    const handleSubmit = () => {
        const user = {
            email,
            username,
            password
        };
        dispatch(signup(user));
    }

    return (
        // <>
        //     {currModal === 'signup' && (
            <div id="session-form-container">
                <form className="session-form" onSubmit={handleSubmit}>
                <h2>yo, this is the sign up form</h2>
                    <label>
                        <span>Email</span>
                        <input
                        type="text"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Email"
                        />
                    </label>
                    <div className="errors">{errors?.email}</div>
                    <label>
                        <span>Username</span>  
                        <input
                        type="text"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        placeholder="Username"
                        />
                    </label>
                    <div className="errors">{errors?.username}</div>
                    <label>
                        <span>Password</span>
                        <input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder="Password"
                        />
                    </label>
                    <div className="errors">{errors?.password}</div>
                    <input 
                        type="submit"
                        value="Sign Up"
                        disabled={!email || !password || !username}
                    />
                    {/* <div onClick={setCurrModal('login')}>Login instead</div> */}
                </form>
            </div>
        // )}
        // {currModal === 'login' && <LoginModal />}
        // </>
        
        
    )
}

export default SignupForm;