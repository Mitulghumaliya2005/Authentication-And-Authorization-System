import axios from "axios";
import { useState } from "react"
import './SignIn.css'
import GoogleImg from '../../assets/Google_Icon.png'
import FaceBookImg from '../../assets/FaceBook_Icon.png'
import AppleImg from '../../assets/Apple_Icon.png'
import SignIn_Img from '../../assets/SignIn_Img.png'
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../ContextAPI/User";

export default function SignIn() {

    const navigate = useNavigate();

    const URL = "http://localhost:4000/";
    const UserState = useContext(UserContext)

    const [SignInForm, setSignInForm] = useState({
        Email: "",
        Password: "",
    })

    function handleSignInForm(Event) {
        setSignInForm((curr) => {
            return (
                { ...curr, [Event.target.name]: Event.target.value }
            )
        })
    }

    async function submitSignInForm(Event) {
        Event.preventDefault();

        try {
            const response = await axios.post(URL + `SignIn?Email=${SignInForm.Email}&Password=${SignInForm.Password}`)
            console.log(response.data);
            alert(response.data.message)

            // token store in local storage
            localStorage.setItem('token', response.data.Token)
            console.log(response.data)
            // go to the SecretPage using navigate method in react router dom 
            
            console.log(UserState.User);
            
            navigate("/")

        } catch (err) {
            console.log(err);
            return alert(err.response.data.message);
        }

        setSignInForm({
            Email: "",
            Password: "",
        })

    }

    return (
        <div className='sigin_main'>
            <div className='sigin_con'>
                <div className='sigin_content'>
                    <div className='signintitle'>
                        <h4>WELCOME BACK!</h4>
                    </div>
                    <div className='singup_way'>
                        <p>Don't have a account, <a href='/SignUp'>Sign up</a></p>
                    </div>
                    <form>
                        <div className='email'>

                            <div className='email_label'>
                                <label htmlFor='Email'>Email</label>
                            </div>

                            <div>
                                <input
                                    className='email_input'
                                    placeholder="Enter Your Email"
                                    name="Email"
                                    value={SignInForm.Email}
                                    onChange={handleSignInForm}
                                    id='username'
                                    type='email'
                                />
                            </div>
                        </div>
                        <div>
                            <div className='password_label'>
                                <label htmlFor='password'>Password</label>
                            </div>
                            <div>
                                <input
                                    placeholder="Enter Your Password"
                                    name="Password"
                                    value={SignInForm.Password}
                                    onChange={handleSignInForm}
                                    className='password_input'
                                    type='password'
                                    id='password'
                                />
                            </div>
                        </div>

                        <div className='forgetpass_con'>
                            <div className='radio'>
                                <input
                                    type="radio"
                                />
                                <label>Remember me</label>
                            </div>
                            <div className='forgetpass'>
                                <p><a href='#'>forget password?</a></p>
                            </div>
                        </div>

                        <div className='signin_button'>
                            <button onClick={submitSignInForm}>SignIn</button>
                        </div>

                    </form>

                    <div className='footer_con'>
                        <span>or continue with</span>
                    </div>
                    <div className='webimg_con'>
                        <div className='webimg'>
                            <img src={GoogleImg} alt="Google" />
                        </div>
                        <div className='webimg'>
                            <img src={FaceBookImg} alt="FaceBook" />
                        </div>
                        <div className='webimg'>
                            <img src={AppleImg} alt="Apple" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='signin_img'>
                <div>
                    <img src={SignIn_Img} alt="SignInImg" />
                </div>
            </div>
        </div>
    )
}