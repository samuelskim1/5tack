import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearSessionErrors, login } from "../../store/session";


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

  const update = (field) => {
    const setField = field === 'username' ? setUsername : setPassword;
    return (e) => setField(e.currentTarget.value);
  };

  return (
    <div id="session-form-container">
      <form className="session-form" onSubmit={handleSubmit}>
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
        <input
          type="submit"
          value="Log In"
          disabled={!username || !password}
        />
      </form>
    </div>
  );
};

export default LoginForm;