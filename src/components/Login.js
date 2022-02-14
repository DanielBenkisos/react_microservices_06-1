const Login = () => {
    return (
        <div>
            <h1>Login</h1>
            <form>
                <label htmlFor="username-email">Username or E-mail</label><br/>
                <input id="username-email" type="text" placeholder="Enter username or e-mail"/><br/><br/>
                <label htmlFor="password">Password</label><br/>
                <input id="password" type="password" placeholder="Enter password"/><br/><br/>
                <button>Log In</button>
            </form>
        </div>
    );
};

export default Login;