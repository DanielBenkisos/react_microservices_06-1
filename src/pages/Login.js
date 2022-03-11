import {useState} from "react";
import {useOutletContext, Navigate} from "react-router-dom";
import {post} from "../api-crud";
import {BACKEND_PORT, DOMAIN} from "../config";

const Login = () => {
    const { loggedIn, handleLogin } = useOutletContext();
    const [credential, setCredential] = useState("");
    const [password, setPassword] = useState("");

    function handleChange(event) {
        const { name, value } = event.target;

        if (name === "credential") {
            setCredential(value);
        } else if (name === "password") {
            setPassword(value);
        }
    }

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const payload = { credential, password };
            const response = await post(DOMAIN, BACKEND_PORT, "authentication/login", true, payload);

            if (response.ok) {
                handleLogin(true);
            }
        } catch (error) {
            console.error(error);
        }
    }


    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="credential">Username or E-mail</label><br/>
                <input value={credential} onChange={handleChange} name="credential" id="credential" type="text"
                       placeholder="Enter username or e-mail"/><br/><br/>
                <label htmlFor="password">Password</label><br/>
                <input value={password} onChange={handleChange} name="password" id="password" type="password"
                       placeholder="Enter password"/><br/><br/>
                <button>Log In</button>
            </form>
            {loggedIn && <Navigate to="/store"/>}
        </div>
    );
};

export default Login;