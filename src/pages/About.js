import {useOutletContext} from "react-router-dom";

const About = () => {
    const { loggedIn, handleLogin } = useOutletContext();

    return (
        <div>
            <h1>About</h1>
            <p>This site is a project made by Daniel Ben-kisos</p>
        </div>
    );
};

export default About;