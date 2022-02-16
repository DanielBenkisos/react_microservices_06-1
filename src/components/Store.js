import {useOutletContext} from "react-router-dom";

const Store = () => {
    const { isLoggedIn, handleLogin } = useOutletContext();

    if (!isLoggedIn) {
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