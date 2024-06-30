import axios from "axios";
import { useContext, useEffect } from "react"
import { UserContext } from "../../ContextAPI/User";

export default function SecretPage() {

    const UserState = useContext(UserContext);

    console.log(UserState.User);


    return(
        <div>
            <h1>This Is SecretPage</h1>
        </div>
    )
}