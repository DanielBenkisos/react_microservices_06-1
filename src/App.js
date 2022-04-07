import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import {useEffect, useState} from "react";
import {get} from "./api-crud";
import {BACKEND_PORT, DOMAIN} from "./config";

const App = () => {
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(async () => {
        handleLogin(await isLoggedIn());
    }, []);

    async function isLoggedIn() {
        let loggedIn = false;
        try {
            const json = await get(DOMAIN, BACKEND_PORT, "/login", true);
            loggedIn = json.loggedIn;
        } catch (error) {
            console.error(error);
        }
        return loggedIn;
    }


    function handleLogin(value) {
        setLoggedIn(value);
    }

    return (
        <div className="app">
            <Header loggedIn={loggedIn} handleLogin={handleLogin}/>
            <Main loggedIn={loggedIn} handleLogin={handleLogin}/>
            <Footer/>
        </div>
    );
};

export default App;
