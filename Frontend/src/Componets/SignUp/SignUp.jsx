import { useState } from "react"
import axios from 'axios';
import './SignUp.css'
import GoogleImg from '../../assets/Google_Icon.png'
import FaceBookImg from '../../assets/FaceBook_Icon.png'
import AppleImg from '../../assets/Apple_Icon.png'
import SignUpImg from '../../assets/SignUp_Img.png';
import { useNavigate } from "react-router-dom";

export default function SignUp() {

    // const [toggle, settoggle] = useState(true);
    const [OTP, setOTP] = useState(false);
    const URL = 'http://localhost:4000/';
    const Navigate = useNavigate();

    const [SignUpForm, setSignUpForm] = useState({
        Email: "",
        Password: "",
        ConformPassword: "",
        OTP: "",
    })


    // let Display = { display: toggle == true ? "block" : "none" };

    async function getOTP(Event) {
        Event.preventDefault();
        try {
            const response = await axios.get(URL + "getOTP");
            console.log(response.data);
            setOTP(response.data.value);
        } catch (err) {
            console.log(err);
        }
    }

    async function handlesetOTP(Event) {
        Event.preventDefault();
        try {
            const response = await axios.post(URL + "setOTP");
            console.log(response.data);
        } catch (err) {
            console.log(err);
        }
    }

    // function handledisplay(Event) {
    //     Event.preventDefault();
    //     settoggle(!toggle);
    //     console.log(toggle);
    // }
    // console.log(toggle);

    function handleSignUpForm(Event) {
        setSignUpForm((curr) => {
            return (
                { ...curr, [Event.target.name]: Event.target.value }
            )
        })
    }

    async function submitSignUpForm(Event) {

        Event.preventDefault();
        // console.log(SignUpForm);

        if (SignUpForm.Password == SignUpForm.ConformPassword) {

            try {
                // console.log("HEllo");
                const response = await axios.post(URL + `SignUp?Email=${SignUpForm.Email}&Password=${SignUpForm.Password}`);
                console.log(response.data);
                alert(response.data.message)
                localStorage.setItem('token', response.data.token);

                Navigate("/");

                // return response.data;
            } catch (err) {
                alert(err.response.data.message)
                console.log(err);
            }

        } else {
            alert("Please Enter the Valid Password")
        }

        setSignUpForm({
            Email: "",
            Password: "",
            ConformPassword: "",
        })
    }

    return (
        <div className='signup_main'>
            <div className='signup_con'>
                <div className='signup_content'>
                    <div className='signuptitle'>
                        <h4>Sign Up</h4>
                    </div>
                    <div className='webimgsignup_con'>
                        <div>
                            <img src={GoogleImg} alt="Google" />
                        </div>
                        <div>
                            <img src={FaceBookImg} alt="FaceBook" />
                        </div>
                        <div>
                            <img src={AppleImg} alt="Apple" />
                        </div>
                    </div>
                    <div>
                        <hr />
                    </div>

                    <div className='signup_form_con'>
                        <form>
                            <div className='signup_D'>
                                <div className='singup_label'>
                                    <label htmlFor='Email'>Email</label>
                                </div>
                                <div>
                                    <input
                                        className='singup_input'
                                        type='email'
                                        id='Email'
                                        placeholder="Enter Your Email"
                                        name="Email"
                                        value={SignUpForm.Email}
                                        onChange={handleSignUpForm}
                                    />
                                </div>
                            </div>

                            {
                                OTP == false ?
                                    (<div className='signup_button'>
                                        <button onClick={getOTP}>GET OTP</button>
                                    </div>
                                    ) : null
                            }


                            {
                                OTP ? (

                                    <div style={Display}>
                                        <div>
                                            <label htmlFor="OTP">OTP</label>
                                        </div>
                                        <div>
                                            <input
                                                className='singup_input'
                                                type='number'
                                                id='OTP'
                                                placeholder="Enter 6 Digit Code"
                                                name="OTP"
                                                // value={SignUpForm.OTP}
                                                onChange={handleSignUpForm}
                                            />
                                        </div>

                                        <div className='signup_button'>
                                            <button onClick={handlesetOTP}>SetOTP</button>
                                        </div>
                                    </div>


                                ) : (
                                    null
                                    // <div style={Display}>
                                    //     <div className='signup_D'>
                                    //         <div className='singup_label'>
                                    //             <label htmlFor='Password'>Password</label>
                                    //         </div>
                                    //         <div>
                                    //             <input
                                    //                 className='singup_input'
                                    //                 type='Password'
                                    //                 id='Password'
                                    //                 placeholder="Enter Your Password"
                                    //                 name="Password"
                                    //                 value={SignUpForm.Password}
                                    //                 onChange={handleSignUpForm}
                                    //             />
                                    //         </div>
                                    //     </div>

                                    //     <div className="signup_D">
                                    //         <div className="singup_label">
                                    //             <label htmlFor="ConformPassword">ConformPassword</label>
                                    //         </div>
                                    //         <div>
                                    //             <input
                                    //                 className="singup_input"
                                    //                 type='Password'
                                    //                 id='Password'
                                    //                 placeholder="Re-enter Password"
                                    //                 name="ConformPassword"
                                    //                 onChange={handleSignUpForm}
                                    //                 value={SignUpForm.ConformPassword}
                                    //             />
                                    //         </div>
                                    //     </div>

                                    //     <div className='signup_button'>
                                    //         <button onClick={handledisplay}>SignUp With OTP</button>
                                    //     </div>

                                    // </div>
                                )
                            }



                        </form>
                    </div>
                    <div>
                        <hr />
                        {/* <span> OR </span> */}
                    </div>
                    <div className='condition_con'>
                        <div>
                            <input
                                type='checkbox'
                            />
                        </div>
                        <div>
                            <p> I agree with <a href='#'>Terms</a> and <a href='#'>Privacy</a> </p>
                        </div>
                    </div>

                    <div className='signup_button'>
                        <button onClick={submitSignUpForm}>SignUp</button>
                    </div>

                    <div>
                        <hr />
                    </div>
                    <div className='signup_footer'>
                        <p>Already have an account?</p>
                        <p><a href='/SignIn'>Log in</a></p>
                    </div>

                </div>
            </div>
            <div className='signup_img'>
                <div>
                    <img src={SignUpImg} alt="SignUp" />
                </div>
            </div>
        </div>
    )
}
