import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearSessionErrors, login } from "../../store/session";
import SignupForm from "./SignupForm";


const LoginForm = () => {
  const dispatch = useDispatch();
  const errors = useSelector(state => state?.errors?.session);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginForm, setLoginForm] = useState(true);
  const [signupForm, setSignupForm] = useState(false);


  useEffect(() => {
    return () => {
      dispatch(clearSessionErrors());
    };
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ username, password }));
    // .then(err => console.log(err));
  };

  const demoLogin = (e) => {
    e.preventDefault();
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
          <h2>Welcome back, gamer!</h2>
          <div className="errors">{errors?.username}</div>
          <label>
            <span>Username</span>
            <input type="text"
              value={username}
              onChange={update('username')}
              placeholder="Enter your username"
            />
          </label>
          <div className="errors">{errors?.password}</div>
          <label>
            <span>Password</span>
            <input type="password"
              value={password}
              onChange={update('password')}
              placeholder="Enter your password"
            />
          </label>
          <div id="log-demo-btn-holder">
            <div 
              id="submit-login-btn"
              onClick={handleSubmit}
              >
              Log In
            </div>
            {/* <div id="or-text">OR</div> */}
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
            Don't have an account yet?<span onClick={() => {setLoginForm(false); setSignupForm(true)}}>Click here to sign up!</span>
          </div>
        </form>
      </div>
      )}
    {signupForm && <SignupForm />}
    </>
  );
};

export default LoginForm;