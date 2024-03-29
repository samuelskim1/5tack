import { Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUser } from './store/session';
import { AuthRoute, ProtectedRoute } from './components/Routes/Routes';
import SplashPage from './components/SplashPage/SplashPage';
import HomePage from './components/HomePage/HomePage';
import Profile from './components/Profile/Profile';
import AboutPage from './components/AboutPage/AboutPage';
import GameShow from './components/GameShow/GameShow';
import LostPage from './components/LostPage/LostPage';
import AuthNavBar from './components/AuthNavBar/AuthNavBar';
import UnauthNav from './components/UnauthNav/UnauthNav';

const App = () => {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state?.session?.user);

  useEffect(() => {
    dispatch(getCurrentUser()).then(() => setLoaded(true));
  }, [dispatch]);

  return loaded && (
    <>
      {currentUser ? <AuthNavBar /> : <UnauthNav />}

      <Switch>
        <AuthRoute exact path="/" component={SplashPage} />
        <ProtectedRoute exact path="/home" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <ProtectedRoute exact path="/games/:nameURL" component={GameShow} />
        <ProtectedRoute exact path="/:username" component={Profile} />
        <ProtectedRoute component={LostPage} />
      </Switch>
    </>
  );
}

export default App;