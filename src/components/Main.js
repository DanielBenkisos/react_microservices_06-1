import "./Main.css";
import {Outlet} from "react-router-dom";

const Main = ({ isLoggedIn, handleLogin }) => {
    return (
        <div className={"main"}>
            <Outlet context={{ isLoggedIn, handleLogin }}/>
        </div>
    );
};

export default Main;