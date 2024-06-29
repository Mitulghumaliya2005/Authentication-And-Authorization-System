const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const app = express();
const saltRounds = 10;
const port = 4000;


app.use(cors());

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

const AuthenticationCollection = new mongoose.model('AuthenticationCollection', AuthenticationSchema);

app.get("/", (req, res) => {
    res.json("HEllo")
})

app.get("/tokenverify",(req,res)=>{
    console.log("HEllo");
})
app.post("/SignUp", (req, res) => {
    console.log(req.query.Email);
    console.log(req.query.Password);

    bcrypt.hash(req.query.Password, saltRounds, function (err, hash) {

        console.log(req.query.Password);
        console.log(hash);
        // hashpassword = hash;
        AuthenticationCollection.find().then((response) => {
            const result = new AuthenticationCollection({
                Email: req.query.Email,
                Password: hash,
            })
            result.save();
            console.log(response);
            res.status(200).json({
                message:"SignUp successfully",
                data:response
            })
        }).catch((err) => {
            console.log(err);
            res.status(404).json({
                message:"SignUp Error",
                data:err,
            })
        })
    });
})

app.post("/SignIn", (req, res) => {
    console.log("SignIN Called");
    console.log(req.query.Email);
    console.log(req.query.Password);

    AuthenticationCollection.findOne({ Email: req.query.Email }).then((response) => {
        console.log(response);

        const token = jwt.sign({Email:req.query.Email},"PrivateKey");
        console.log(token);

        if (!response) {
            res.status(404).json({
                message:"Email Error",
                data:response,
            })
        } else {
            bcrypt.compare(req.query.Password, response.Password, function (err, result) {
                // console.log(result);

                if (response.Email == req.query.Email && result == true) {
                    res.status(200).json({
                        message:"SignIn Scussefully",
                        Token:token,
                        Email:req.query.Email,
                    })
                }

                else if (result == false) {
                    // res.json("This User Are Not Exiest")
                    res.status(404).json({
                        message:"Password Error",
                        data:response,
                    })
                }
            })
        }
    }).catch((err) => {
        console.log(err);
        console.log("THis user is not ");
    })
})



app.listen(port, () => {
    console.log("app listening on port 4000");
})