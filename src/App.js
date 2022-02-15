import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import {useState} from "react";

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function handleLogin(value) {
        setIsLoggedIn(value)
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
