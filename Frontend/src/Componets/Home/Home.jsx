import { Link, NavLink } from "react-router-dom";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import { useContext,useEffect } from "react";
import { UserContext } from "../../ContextAPI/User";
import axios from "axios";

export default function () {
    const URL = "http://localhost:4000/";
    const UserState = useContext(UserContext);

    useEffect(()=>{

        // token read using getitem method
        const localStoragetoken = localStorage.getItem('token');
        console.log(localStoragetoken);

        async function TokenApi() {
            try{
                const response = await axios.get(URL+`tokenverify?token=${localStoragetoken}`);
                console.log(response);
                UserState.setUser(response.data.data)
                console.log(UserState.User);
                console.log("HEllooooooo");
            }catch(err){
                console.log(err);
            }
        }

        TokenApi().then((data)=>{
            // console.log(data);
        }).catch((err)=>{
            console.log("Erroe");
        })
    },[UserState.User]);

    return (
        <div>
            <div className="title">
                <h1>Home</h1>
            </div>
            <Link to="/SignIn"><button>SingIn</button></Link><br /><br />
            <Link to="/SignUp"><button>SingUp</button></Link>
        </div>
    )
}