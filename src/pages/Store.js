import {useOutletContext} from "react-router-dom";

const Store = () => {
    const { loggedIn, handleLogin } = useOutletContext();

    if (!loggedIn) {
        return <div>
            <h1>Please login to access this page.</h1>
        </div>
    }

    return (
        <div>
            <h1>Welcome!</h1>
        </div>
    );
};

export default Store;