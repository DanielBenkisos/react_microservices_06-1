import "./Header.css";
import {Link} from "react-router-dom";

const Header = ({ isLoggedIn, handleLogin }) => {
    return (
        <div className="header">
            <Link to="/">Logo</Link>
            <Link to="/about">About</Link>
            {!isLoggedIn && <Link to="/login">Login</Link>}
            <Link to="/signup">Sign Up</Link>
            {isLoggedIn && <Link to="/logout">Logout</Link>}
        </div>
    );
};

export default Header;