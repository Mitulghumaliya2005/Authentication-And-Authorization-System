import { AuthenticationCollection } from "../../app.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const SignIn = (req, res) => {
    console.log("SignIN Called");
    // console.log(req.query.Email);
    // console.log(req.query.Password);

    AuthenticationCollection.findOne({ Email: req.query.Email }).then((response) => {

        console.log(response);
        const token = jwt.sign({ Email: req.query.Email }, "PrivateKey", { expiresIn: "1m" });
        console.log(token);

        if (!response) {
            res.status(404).json({
                message: "Email Error",
                data: response,
            })
        } else {
            bcrypt.compare(req.query.Password, response.Password, function (err, result) {
                // console.log(result);

                if (response.Email == req.query.Email && result == true) {
                    res.status(200).json({
                        message: "SignIn Scussefully",
                        Token: token,
                        Email: req.query.Email,
                    })
                }

                else if (result == false) {
                    // res.json("This User Are Not Exiest")
                    res.status(404).json({
                        message: "Password Error",
                        data: response,
                    })
                }
            })
        }
    }).catch((err) => {
        console.log(err);
        console.log("THis user is not ");
    })
}

export { SignIn }