import { Link, Redirect, useHistory } from 'react-router-dom';
import './LostPage.scss';
import { useEffect } from 'react';
import { useRef } from 'react';

const LostPage = () => {
  const history = useHistory();

  // useEffect(() => {
  //   setTimeout(() => {
  //     history.push('/home');
  //   }, 5500)

  //   return () => clearTimeout();
  // }, [])

  return (
    <div id="lost-page-container">
      <div id="lost-text">
        {"Your requested 5TACK resource was not found :("}
      </div>

      <div id="lost-redirecting">
        Check out our awesome {" "}
        <Link to="/home">
          home page
        </Link>
         {" instead! :)"}
      </div>

      <div id="redirect-img">
        <img src="https://venngage-wordpress.s3.amazonaws.com/uploads/2022/09/meme_sad_frog.png" alt="pepe sad" />
      </div>
    </div>
  )
};

export default LostPage;