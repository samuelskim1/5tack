import { signup } from "../../store/session";
import LoginForm from "./LoginForm";

const { useState, useEffect } = require("react");
const { useDispatch, useSelector } = require("react-redux");
const { clearSessionErrors } = require("../../store/session");

const SignupForm = () => {
    const dispatch = useDispatch();
    const errors = useSelector(state => state?.errors?.session);
    const [currModal, setCurrModal] = useState('signup');
    
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
        <>
            {currModal === 'signup' && (
            <div id="session-form-container">
                <form className="session-form">
                <h2>Welcome to 5tack!</h2>
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
                    <div 
                        id="submit-login-btn"
                        onClick={handleSubmit}
                        >
                        Sign Up
                    </div>
                    <div 
                        id="alternate-form"
                    >
                        Already have an account?<span onClick={() => setCurrModal('login')}>Click here to log in!</span>
                    </div>
                </form>
            </div>
        )}
        {currModal === 'login' && <LoginForm />}
        </>
        
        
    )
}

export default SignupForm;