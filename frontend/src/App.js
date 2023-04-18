import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from './components/Routes/Routes';
import NavBar from './components/NavBar/NavBar';
import SplashPage from './components/SplashPage/SplashPage';
import HomePage from './components/HomePage/HomePage';
import Profile from './components/Profile/Profile';

const App = () => {

  return (
    <>
      <NavBar />
      <Switch>
        <AuthRoute exact path="/" component={SplashPage} />
        <ProtectedRoute exact path="/home" component={HomePage} />
        {/* <ProtectedRoute exact path={`/:username`} component={Profile} /> */}
        <Route exact path={`/:username`} component={Profile} />
      </Switch>
    </>
  );
}

export default App;