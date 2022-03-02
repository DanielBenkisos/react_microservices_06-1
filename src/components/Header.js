import "./Header.css";
import {Link} from "react-router-dom";
import {get} from "../api-crud";
import {BACKEND_PORT, DOMAIN} from "../config";

const Header = ({ authorized, handleLogin }) => {

    const handleLogout = async () => {
        const response = await get(DOMAIN, BACKEND_PORT, "authentication/logout", true, null);
        if (response.ok) {
            handleLogin(false);
        }
    };

    return (
        <div className="header">
            <Link to="/">Logo</Link>
            <Link to="/about">About</Link>
            {!authorized && <Link to="/login">Login</Link>}
            <Link to="/signup">Sign Up</Link>
            {authorized && <a href="/" onClick={handleLogout}>Logout</a>}
        </div>
    );
};

export default Header;