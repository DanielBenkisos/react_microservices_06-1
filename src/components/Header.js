import "./Header.css";
import {Link} from "react-router-dom";
import {get} from "../api-crud";
import {BACKEND_PORT, DOMAIN} from "../config";

const Header = ({ loggedIn, handleLogin }) => {

    const handleLogout = async (e) => {
        e.preventDefault();
        const response = await get(DOMAIN, BACKEND_PORT, "authentication/logout", true);
        if (response.ok) {
            handleLogin(false);
        }
        const json = await response.json();
        console.log(json);
    };

    return (
        <div className="header">
            <Link to="/">Logo</Link>
            <Link to="/about">About</Link>
            {!loggedIn && <Link to="/login">Login</Link>}
            <Link to="/signup">Sign Up</Link>
            {loggedIn && <a href="/" onClick={handleLogout}>Logout</a>}
        </div>
    );
};

export default Header;