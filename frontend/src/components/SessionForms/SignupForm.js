import { signup } from "../../store/session";

const { useState, useEffect } = require("react");
const { useDispatch, useSelector } = require("react-redux");
const { clearSessionErrors } = require("../../store/session");

const SignupForm = () => {
    const dispatch = useDispatch();
    const errors = useSelector(state => state.errors.session);
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
            <div className="session-form-container">
                <h1>yo, this is the sign up form</h1>
                <form >
                    <label>Email    
                        <input
                        type="text"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Email"
                        />
                    </label>
                    <label>Username    
                        <input
                        type="text"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        placeholder="Username"
                        />
                    </label>
                    <label>Password
                        <input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder="Password"
                        />
                    </label>
                    <div onClick={handleSubmit}>Sign Up</div>
                </form>
            </div>
        )}
        </>
        
        
    )
}

export default SignupForm;