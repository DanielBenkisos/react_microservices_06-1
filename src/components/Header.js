import "./Header.css"

const Header = () => {
    return (
        <div className="header">
            <div>Logo</div>
            <div>About</div>
            <a href="#">Login</a>
            <a href="#">Sign Up</a>
            <a href="#">Logout</a>
        </div>
    );
};

export default Header;