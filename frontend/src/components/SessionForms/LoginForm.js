import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearSessionErrors, login } from "../../store/session";
import SignupForm from "./SignupForm";
import './SessionForm.scss';


const LoginForm = () => {
  const dispatch = useDispatch();
  const errors = useSelector(state => state?.errors?.session);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginForm, setLoginForm] = useState(true);
  const [signupForm, setSignupForm] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ username, password }));
  };

  const demoLogin = (e) => {
    e.preventDefault();
    dispatch(clearSessionErrors());
    dispatch(login({ username: "demo", password: "password" }));
  };

  const update = (field) => {
    const setField = field === 'username' ? setUsername : setPassword;
    return (e) => setField(e.currentTarget.value);
  };

  return (
    <>
    {loginForm && (
      <div id="session-form-container">
        <form className="session-form">
          <img src="../../../apple-touch-icon.png" alt="5TACK logo" />
          <h2>5TACK</h2>
          <div className="errors">{errors?.credentials}</div>
            <label>
              <span>Username</span>
              <input type="text"
                value={username}
                onChange={update('username')}
                placeholder="Enter your username"
              />
            </label>
          <div className="errors">{errors?.username}</div>
            <label>
              <span>Password</span>
              <input type="password"
                value={password}
                onChange={update('password')}
                placeholder="Enter your password"
              />
            </label>
          <div className="errors">{errors?.password}</div>
          <div id="log-demo-btn-holder">
            <input 
              type="submit"
              value="Log In"
              id="submit-login-btn"
              onClick={handleSubmit}
              >
              {/* Log In */}
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
            Don't have an account yet?<span onClick={() => {setLoginForm(false); setSignupForm(true); dispatch(clearSessionErrors());}}> Click here to sign up! </span>
          </div>
        </form>
      </div>
      )}
    {signupForm && <SignupForm />}
    </>
  );
};

export default LoginForm;