import {useState} from "react";

const Signup = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleChange(event) {
        const { name, value } = event.target;

        if (name === "username") {
            setUsername(value);
        } else if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        }
    }

    async function handleSubmit(event) {
        event.preventDefault();
        const url = "http://localhost:8087/signup";
        const payload = { username, email, password };
        const response = await fetch(url,
            {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify(payload),
            });
    }

    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label><br/>
                <input value={username} onChange={handleChange} id="username" name="username" type="text"
                       placeholder="Enter an username"/><br/><br/>

                <label htmlFor="email">E-mail</label><br/>
                <input value={email} onChange={handleChange} id="email" type="email" name="email"
                       placeholder="Enter an e-mail"/><br/><br/>

                <label htmlFor="password">Password</label><br/>
                <input value={password} onChange={handleChange} id="password" type="password" name="password"
                       placeholder="Enter a password"/><br/><br/>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default Signup;