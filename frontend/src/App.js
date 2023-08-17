import { Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUser } from './store/session';
import { AuthRoute, ProtectedRoute } from './components/Routes/Routes';
// import NavBar from './components/NavBar/NavBar';
import SplashPage from './components/SplashPage/SplashPage';
// import HomePage from './components/HomePage/HomePage';
import Profile from './components/Profile/Profile';
// import GameShow from './components/GameShow/GameShow'; 
// import AboutPage from './components/AboutPage/AboutPage'; 
// import LostPage from './components/LostPage/LostPage';
import AuthNavBar from './components/AuthNavBar/AuthNavBar';

const App = () => {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state?.session?.user);

  useEffect(() => {
    dispatch(getCurrentUser()).then(() => setLoaded(true));
  }, [dispatch]);

  return loaded && (
    <div>
      {currentUser && <AuthNavBar />}

      <Switch>
        <AuthRoute exact path="/" component={SplashPage} />
        {/* <ProtectedRoute exact path="/home" component={HomePage} /> */}
        {/* <Route exact path="/about" component={AboutPage} /> */}
        {/* <ProtectedRoute exact path="/games/:nameURL" component={GameShow} /> */}
        <ProtectedRoute exact path="/:username" component={Profile} />
        {/* <ProtectedRoute exact path="/uh-oh/404" component={LostPage} /> */}
        {/* <ProtectedRoute component={LostPage} /> */}
      </Switch>
    </div>
  );
}

export default App;