import { AuthenticationCollection } from "../../app.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const saltRounds = 10;

const SignUp = (req, res) => {
    // console.log(req.query.Email);
    // console.log(req.query.Password);
    console.log("SignUp Called");
    bcrypt.hash(req.query.Password, saltRounds, function (err, hash) {
        // console.log(req.query.Password);
        console.log(hash);
        // hashpassword = hash;
        
        AuthenticationCollection.find().then((response) => {
            const token = jwt.sign({Email: req.query.Email},"PrivateKey",{expiresIn:"1m"});
            console.log(token);
            const result = new AuthenticationCollection({
                Email: req.query.Email,
                Password: hash,
            })
            result.save();
            console.log(response);
            res.status(200).json({
                message: "SignUp successfully",
                data: response,
                token:token,
            })
        }).catch((err) => {
            console.log(err);
            res.status(404).json({
                message: "SignUp Error",
                data: err,
            })
        })
    });
}

export { SignUp }