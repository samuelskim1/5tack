import LoginForm from "./LoginForm";
import './SessionForm.scss';

const { useState, useEffect } = require("react");
const { useDispatch, useSelector } = require("react-redux");
const { clearSessionErrors, login, signup } = require("../../store/session");

const SignupForm = () => {
    const dispatch = useDispatch();
    const errors = useSelector(state => state?.errors?.session);
    const [currModal, setCurrModal] = useState('signup');
    
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            email,
            username,
            password
        };
        dispatch(signup(user));
    }

    const demoLogin = (e) => {
        e.preventDefault();
        dispatch(clearSessionErrors());
        dispatch(login({ username: "demo", password: "password" }));
    };

    useEffect(() => {
        return () => dispatch(clearSessionErrors());
    }, [dispatch])

    return (
        <>
            {currModal === 'signup' && (
            <div id="session-form-container">
                <form className="session-form">
                <img src="../../../big-logo.png" alt="5TACK logo" />
                <h2>5TACK</h2>
                    <label>
                        <span>Email</span>
                        <input
                        type="text"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Email"
                        />
                    <div className="errors">{errors?.email}</div>
                    </label>
                    <label>
                        <span>Username</span>  
                        <input
                        type="text"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        placeholder="Username"
                        />
                    <div className="errors">{errors?.username}</div>
                    </label>
                    <label>
                        <span>Password</span>
                        <input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder="Password"
                        />
                    <div className="errors">{errors?.password}</div>
                    </label>
                    <div id="log-demo-btn-holder">
                        <input 
                        type="submit"
                        id="submit-login-btn"
                        value="Sign Up"
                        onClick={handleSubmit}
                        >
                        </input>
                        <div 
                        id="submit-demo-btn"
                        onClick={demoLogin}
                        >
                        Demo Login
                        </div>
                    </div>
                    <div 
                        id="alternate-form"
                    >
                        Already have an account? <span onClick={() => {setCurrModal('login'); dispatch(clearSessionErrors())}}>Click here to log in!</span>
                    </div>
                </form>
            </div>
        )}
        {currModal === 'login' && <LoginForm />}
        </>
        
        
    )
}

export default SignupForm;