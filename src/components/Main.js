import "./Main.css";
import {Outlet} from "react-router-dom";

const Main = ({ loggedIn, handleLogin }) => {
    return (
        <div className={"main"}>
            <Outlet context={{ loggedIn, handleLogin }}/>
        </div>
    );
};

export default Main;