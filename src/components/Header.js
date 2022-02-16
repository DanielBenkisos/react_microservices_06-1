import "./Header.css";
import {Link} from "react-router-dom";

const Header = ({ isLoggedIn, handleLogin }) => {

    const handleLogout = async () => {
            const url = "http://localhost:8087/logout";
            const response = await fetch(url, {credentials: "include"});
            if (response.ok) {
                handleLogin(false)
            }
    }

    return (
        <div className="header">
            <Link to="/">Logo</Link>
            <Link to="/about">About</Link>
            {!isLoggedIn && <Link to="/login">Login</Link>}
            <Link to="/signup">Sign Up</Link>
            {isLoggedIn && <a href="/" onClick={handleLogout}>Logout</a>}
        </div>
    );
};

export default Header;