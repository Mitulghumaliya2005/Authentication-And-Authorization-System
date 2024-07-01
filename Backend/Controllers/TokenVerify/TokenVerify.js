import { AuthenticationCollection } from "../../app.js";
import jwt from "jsonwebtoken";

const TokenVerify = (req, res) => {
    console.log(req.query.token);
    const verified = jwt.verify(req.query.token, "PrivateKey");
    console.log(verified);
    AuthenticationCollection.findOne({ Email: verified.Email }).then((response) => {
        console.log("hELLO", response);
        res.status(200).json({
            data: response,
            message: "alrady SingIN"
        })
    }).catch((err) => {
        console.log("Error");
    })
}


export { TokenVerify }