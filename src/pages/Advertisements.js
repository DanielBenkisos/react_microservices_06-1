
import {get} from "../api-crud";
import {BACKEND_AD_PORT, BACKEND_USER_PORT, DOMAIN} from "../config";

import Category from "../components/Category";
import {useEffect, useState} from "react";


function Advertisements() {

    const [cats, setCats] = useState([]);



    const categories = ["CAR", "MC", "BIKE", "TOOL", "ANIMAL", "TOY"]

    useEffect(() => {
        getCategories().then(c => setCats(c)).catch(e => console.log(e));
    }, []);

    async function getCategories() {
        try {
            const promises = categories.map(c => get(DOMAIN, BACKEND_AD_PORT, "/ads?category=" + c, true));
            const lists = await Promise.all(promises)
            const listCategoryObjects = lists.map(l => l.length).map((l, index) => {
                return {category: categories[index], count: l}
            })
            return listCategoryObjects
        } catch (e) {
            console.log(e)
        }
    }

    function generateCategoryComponents() {
        console.log(cats + " cats er her")
        if (!cats || cats.length === 0) {
            return null
        }
        return cats.map((c, index) => <Category Key={index} category={c.category} count={c.count}/>)
    }

    return (
        <div>
            <h1>Advertisements</h1>
            {generateCategoryComponents()}
        </div>
    );
}

export default Advertisements;