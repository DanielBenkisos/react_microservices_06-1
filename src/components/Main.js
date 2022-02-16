import "./Main.css";
import {Outlet} from "react-router-dom";

const Main = ({ authorized, handleLogin }) => {
    return (
        <div className={"main"}>
            <Outlet context={{ authorized, handleLogin }}/>
        </div>
    );
};

export default Main;