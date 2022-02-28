import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import {useEffect, useState} from "react";
import {get} from "./api-crud";
import {BACKEND_PORT, DOMAIN} from "./config";

const App = () => {
    const [authorized, setAuthorized] = useState(false);

    useEffect(async () => {
        // handleLogin(await isAuthorized());
    }, []);

    async function isAuthorized() {
        let authorized = false;
        try {
            const json = await get(DOMAIN, BACKEND_PORT, "authentication/login", true);
            if (json.status === "loggedIn") {
                authorized = true;
            }
        } catch (error) {
            console.error(error);
        }
        return authorized;
    }


    function handleLogin(value) {
        setAuthorized(value);
    }

    return (
        <div className="app">
            <Header authorized={authorized} handleLogin={handleLogin}/>
            <Main authorized={authorized} handleLogin={handleLogin}/>
            <Footer/>
        </div>
    );
};

export default App;
