import { Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from './components/Routes/Routes';
import NavBar from './components/NavBar/NavBar';
import SplashPage from './components/SplashPage/SplashPage';
import HomePage from './components/HomePage/HomePage';

const App = () => {

  return (
    <>
      <NavBar />
      <Switch>
        <AuthRoute exact path="/" component={SplashPage} />
        <ProtectedRoute exact path="/home" component={HomePage} />
      </Switch>
    </>
  );
}

export default App;