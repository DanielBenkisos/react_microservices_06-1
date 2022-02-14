import "./Header.css"
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <Link to="/">Logo</Link>
            <Link to="/about">About</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
            <Link to="/logout">Logout</Link>
        </div>
    );
};

export default Header;