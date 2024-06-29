import axios from "axios";
import { useContext, useEffect } from "react"
import { UserContext } from "../../ContextAPI/User";

export default function SecretPage() {

    const URL = "http://localhost:4000/";
    const UserState = useContext(UserContext);

    console.log(UserState);


    return(
        <div>
            <h1>This Is SecretPage</h1>
        </div>
    )
}