import {useState} from "react";
import {useOutletContext, Navigate} from "react-router-dom";

const Login = () => {
    const { authorized, handleLogin } = useOutletContext();
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
        const url = "http://localhost:8087/login";
        const payload = { credential, password };
        const response = await fetch(url,
            {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                    "Accept": "application/json",
                },
                credentials: "include",
                body: JSON.stringify(payload),
            });
        if (response.ok) {
            handleLogin(true);
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
            {authorized && <Navigate to="/store"/>}
        </div>
    );
};

export default Login;