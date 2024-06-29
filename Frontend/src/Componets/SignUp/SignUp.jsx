import { useState } from "react"
import axios from 'axios';
import './SignUp.css'
import GoogleImg from '../../assets/Google_Icon.png'
import FaceBookImg from '../../assets/FaceBook_Icon.png'
import AppleImg from '../../assets/Apple_Icon.png'
import SignUpImg from '../../assets/SignUp_Img.png';

export default function SignUp() {

    const URL = 'http://localhost:4000/';

    const [SignUpForm, setSignUpForm] = useState({
        Email: "",
        Password: "",
        ConformPassword:"",
    })

    function handleSignUpForm(Event) {
        setSignUpForm((curr) => {
            return (
                { ...curr, [Event.target.name]: Event.target.value }
            )
        })
    }

    async function submitSignUpForm(Event) {

        Event.preventDefault();
        console.log(SignUpForm);

        if(SignUpForm.Password==SignUpForm.ConformPassword){

                try {
                    console.log("HEllo");
                    const response = await axios.post(URL + `SignUp?Email=${SignUpForm.Email}&Password=${SignUpForm.Password}`);
                    console.log(response.data);
                    alert(response.data.message)
                    // return response.data;
                } catch (err) {
                    alert(err.response.data.message)
                    console.log(err);
                }
    
        }else{
            alert("Please Enter the Valid Password")
        }

        setSignUpForm({
            Email: "",
            Password: "",
            ConformPassword:"",
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
                            {/* <div className='signup_D'>
                                <div className='singup_label'>
                                    <label htmlFor='name'>Name</label>
                                </div>
                                <div>
                                    <input
                                        className='singup_input'
                                        type='text'
                                        id='name'
                                        name='Name'
                                        value={SignupData.Name}
                                        onChange={handleSignup}
                                        spellCheck={false}
                                    />
                                </div>
                            </div> */}
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

                            <div className='signup_D'>
                                <div className='singup_label'>
                                    <label htmlFor='Password'>Password</label>
                                </div>
                                <div>
                                    <input
                                        className='singup_input'
                                        type='Password'
                                        id='Password'
                                        placeholder="Enter Your Password"
                                        name="Password"
                                        value={SignUpForm.Password}
                                        onChange={handleSignUpForm}
                                    />
                                </div>
                            </div>
                            <div className="signup_D">
                                <div className="singup_label">
                                    <label htmlFor="ConformPassword">ConformPassword</label>
                                </div>
                                <div>
                                    <input
                                        className="singup_input"
                                        type='Password'
                                        id='Password'
                                        placeholder="Re-enter Password"
                                        name="ConformPassword"
                                        onChange={handleSignUpForm}
                                        value={SignUpForm.ConformPassword}
                                    />
                                </div>
                            </div>
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

// <div>
//     <h1>SignUp</h1>
//     <form>
//         <input
//             placeholder="Enter Your Email"
//             name="Email"
//             value={SignUpForm.Email}
//             onChange={handleSignUpForm}
//         /><br /><br />

//         <input
//             placeholder="Enter Your Password"
//             name="Password"
//             value={SignUpForm.Password}
//             onChange={handleSignUpForm}
//         /><br /><br />

//         <button onClick={submitSignUpForm}>SignUp</button>
//     </form>
// </div>