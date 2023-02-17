import { Link } from 'react-router-dom';


const NavBar = () => {
    return(
        <nav>
            <ul>
                <li><Link to="/SubmitReviews">SubmitReviews</Link></li>
                <li><Link to="/MovieReviews">MovieReviews</Link></li>
            </ul>
        </nav>

    );
}

export default NavBar;