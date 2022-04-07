import {useOutletContext} from "react-router-dom";
import {useEffect, useState} from "react";
import {get} from "../api-crud";
import {put} from "../api-crud";
import {BACKEND_PORT, DOMAIN} from "../config";

const Profile = () => {
    const { loggedIn, handleLogin } = useOutletContext();
    const [profile, setProfile] = useState({});

    function handleChange(event) {
        const { name, value } = event.target;

        setProfile(prevState => {
            const copy = {...prevState}
            copy[name] = value;
            return copy;
        })
    }

    useEffect( async () => {
       await handleLoad();
    }, []);

   async function handleLoad(){
        try{
            const json = await get(DOMAIN, BACKEND_PORT, "/profile", true);

                setProfile(json);

        } catch (error){
            console.log(error);
        }
    }

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const payload = profile;
            const json = await put(DOMAIN, BACKEND_PORT, "/profile", true, payload);

            setProfile(json);

        } catch (error) {
            console.error(error);
        }
    }

    if (!loggedIn) {
        return <div>
            <h1>Please login to access this page.</h1>
        </div>
    }

    return (
        <div>
            <h1>Profile</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="userName">UserName</label><br/>
                <input value={profile.userName ?? ""} onChange={handleChange} name="userName" id="userName" type="text"
                       placeholder="Enter userName"/><br/><br/>
                <label htmlFor="firstName">FirstName</label><br/>
                <input value={profile.firstName ?? ""} onChange={handleChange} name="firstName" id="firstName" type="text"
                       placeholder="Enter firstName"/><br/><br/>
                <label htmlFor="lastName">LastName</label><br/>
                <input value={profile.lastName ?? ""} onChange={handleChange} name="lastName" id="lastName" type="text"
                       placeholder="Enter lastName"/><br/><br/>
                <label htmlFor="email">Email</label><br/>
                <input value={profile.email ?? ""} onChange={handleChange} name="email" id="email" type="text"
                       placeholder="Enter email"/><br/><br/>
                <button>Update profile</button>
            </form>
        </div>
    );
};

export default Profile;