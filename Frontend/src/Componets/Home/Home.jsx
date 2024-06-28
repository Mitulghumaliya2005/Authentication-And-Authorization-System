import { Link, NavLink } from "react-router-dom";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";

export default function () {
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