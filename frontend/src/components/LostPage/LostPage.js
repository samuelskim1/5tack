import { Link } from 'react-router-dom/cjs/react-router-dom';
import './LostPage.scss';

const LostPage = () => {
    return (
        <div id='auth-cards-background'>
            <div>
                <div>Your requested 5TACK resource was not found :(</div>
                <img src="https://venngage-wordpress.s3.amazonaws.com/uploads/2022/09/meme_sad_frog.png" alt="pepe sad" />
            </div>
            <p>Check out our awesome{" "}
                <Link to='/home'>home page</Link>
                {" "}instead :)
            </p>
        </div>
    )
}

export default LostPage;