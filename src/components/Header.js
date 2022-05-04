import "./Header.css";
import image from "../logo.svg"
import {Link} from "react-router-dom";
import {get} from "../api-crud";
import {BACKEND_USER_PORT, DOMAIN} from "../config";

const Header = ({ loggedIn, handleLogin }) => {

    const handleLogout = async (e) => {
        e.preventDefault();
        const json = await get(DOMAIN, BACKEND_USER_PORT, "/logout", true);

            handleLogin(false);

        console.log(json);
    };

    return (
        <div className="header">
            <img src={image} height={100} width={100}/>
            <Link to="/about" className={'nav-item'}>About</Link>
            {!loggedIn && <Link to="/login" className={'nav-item'}>Login</Link>}
            {!loggedIn && <Link to="/signup" className={'nav-item'}>Sign Up</Link>}
            {loggedIn && <a href="/" onClick={handleLogout} className={'nav-item'}  >Logout</a>}
            {loggedIn && <Link to="/profile" className={'nav-item'}>Profile</Link>}
        </div>
    );
};

export default Header;