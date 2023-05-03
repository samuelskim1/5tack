import { Route, Switch, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from './components/Routes/Routes';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import NavBar from './components/NavBar/NavBar';
import SplashPage from './components/SplashPage/SplashPage';
import HomePage from './components/HomePage/HomePage';
import Profile from './components/Profile/Profile';
import GameShow from './components/GameShow/GameShow'; 
import { getCurrentUser } from './store/session';
import CategoryNav from './components/NavBar/CategoryNav';
import AboutPage from './components/AboutPage/AboutPage'; 
import LostPage from './components/LostPage/LostPage';
import { fetchUser } from './store/users';
import { useSelector } from 'react-redux';

const App = () => {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  const userErrors = useSelector(state => state?.errors?.users)
  useEffect(() => {
    dispatch(getCurrentUser()).then(() => setLoaded(true));
  }, [dispatch]);

  return loaded && (
    <div id='entire-app'>
      <NavBar />

      <div className='main-content'>
        <Switch>
          <AuthRoute exact path="/" component={SplashPage} />
          <ProtectedRoute exact path="/home" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
          <ProtectedRoute exact path="/games/:nameURL" component={GameShow} />
          <ProtectedRoute exact path="/:username" component={Profile} />
          <ProtectedRoute exact path="/uh-oh/404" component={LostPage} />
          <ProtectedRoute component={LostPage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;