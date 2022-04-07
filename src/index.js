import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import Store from "./pages/Store";
import Profile from "./pages/Profile";
import About from "./pages/About";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/signup" element={<SignUp/>}/>
                    <Route path="/store" element={<Store/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/about" element={<About/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root'),
);
