import { Route, Switch } from 'react-router-dom';
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


const App = () => {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  
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
          {/* <ProtectedRoute exact path={`/:username`} component={Profile} /> */}
          <ProtectedRoute exact path={`/:username`} component={Profile} />
          <ProtectedRoute exact path="/games/:nameURL" component={GameShow} />
        </Switch>
      </div>
    </div>
  );
}

export default App;