import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from './components/Routes/Routes';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import NavBar from './components/NavBar/NavBar';
import SplashPage from './components/SplashPage/SplashPage';
import HomePage from './components/HomePage/HomePage';
import Profile from './components/Profile/Profile';
import { getCurrentUser } from './store/session';


const App = () => {
  // const [loaded, setLoaded] = useState(false);
  // const dispatch = useDispatch();
  
  // useEffect(() => {
  //   dispatch(getCurrentUser()).then(() => setLoaded(true));
  // }, [dispatch]);

  return (
    <>
      <NavBar />
      <Switch>
        <AuthRoute exact path="/" component={SplashPage} />
        <ProtectedRoute exact path="/home" component={HomePage} />
        {/* <ProtectedRoute exact path={`/:username`} component={Profile} /> */}
        <ProtectedRoute exact path={`/:username`} component={Profile} />
      </Switch>
    </>
  );
}

export default App;