import {useState} from "react";
import {Navigate} from "react-router-dom";
import {DOMAIN, BACKEND_PORT} from "../config";
import {post} from "../api-crud";

const Signup = () => {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [success, setSuccess] = useState(false);

    function handleChange(event) {
        const { name, value } = event.target;

        if (name === "userName") {
            setUserName(value);
        } else if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        }
    }

    async function handleSubmit(event) {
        event.preventDefault();
        const payload = { userName, email, password };
        try {
            const response = await post(DOMAIN, BACKEND_PORT, "/signup", false, payload);
            if (response.ok) {
                setSuccess(() => true);
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="userName">UserName</label><br/>
                <input value={userName} onChange={handleChange} id="userName" name="userName" type="text"
                       placeholder="Enter an username"/><br/><br/>

                <label htmlFor="email">E-mail</label><br/>
                <input value={email} onChange={handleChange} id="email" type="email" name="email"
                       placeholder="Enter an e-mail"/><br/><br/>

                <label htmlFor="password">Password</label><br/>
                <input value={password} onChange={handleChange} id="password" type="password" name="password"
                       placeholder="Enter a password"/><br/><br/>
                <button>Submit</button>
            </form>
            {success && <Navigate to="/login"/>}
        </div>
    );
};

export default Signup;