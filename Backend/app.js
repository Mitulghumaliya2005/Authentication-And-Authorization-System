import express from "express"
import cors from "cors"
import mongoose from "mongoose";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
const app = express();
const saltRounds = 10;
const port = 4000;
app.use(cors());



//Importing Routes
import EmailRouter from "./Routes/Email/OTP.js";
import TokenVerifyRouter from "./Routes/TokenVerify/TokenVerify.js";
import SignInrouter from "./Routes/SignIn/SignIn.js";
import SignUprouter from "./Routes/SignUp/SignUp.js";









// Using Routes

app.use(EmailRouter);
app.use(TokenVerifyRouter);
app.use(SignInrouter);
app.use(SignUprouter);



main().then(() => {
    console.log("Connection succesefully");
}).catch((err) => {
    console.log(err);
})

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/Authentication');
}

const AuthenticationSchema = mongoose.Schema({
    Email: String,
    Password: String,
})

const OtpGeneratorSchema = mongoose.Schema({
    Email: String,
    otp: String,
})

const AuthenticationCollection = new mongoose.model('AuthenticationCollection', AuthenticationSchema);
export { AuthenticationCollection }

const OtpGeneratorCollection = new mongoose.model('OtpGeneratorCollection',OtpGeneratorSchema);
export { OtpGeneratorCollection}

app.listen(port, () => {
    console.log("app listening on port 4000");
}) 