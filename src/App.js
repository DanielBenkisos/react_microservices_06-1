import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import {useEffect, useState} from "react";
import {get} from "./api-crud";
import {DOMAIN, BACKEND_PORT} from "./config";

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(async () => {
        try {
            const json = await get(DOMAIN, BACKEND_PORT, "login", true);
            if (json.status === "loggedIn") {
                handleLogin(true);
            }
        } catch (error) {
            console.error(error);
        }
    }, []);

    function handleLogin(value) {
        setIsLoggedIn(value);
    }

    return (
        <div className="app">
            <Header isLoggedIn={isLoggedIn} handleLogin={handleLogin}/>
            <Main isLoggedIn={isLoggedIn} handleLogin={handleLogin}/>
            <Footer/>
        </div>
    );
};

export default App;
