import nodemailer from 'nodemailer';
import { OtpGeneratorCollection } from '../../app.js';
import mongoose from 'mongoose';
import otpGenerator from 'otp-generator';
import { response } from 'express';

const getOTP = (req, res) => {

    console.log(req.query.Email);
    const OTP = otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false, lowerCaseAlphabets: false });

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: "pmitulghumaliya53@gmail.com",
            pass: "wevzqhkqxoddnazi",
        },
    });

    async function main(otp) {
        const info = await transporter.sendMail({
            from: 'pmitulghumaliya53@gmail.com',
            to: "mitulghumaliya76@gmail.com",
            subject: "Here's the 6-digit Verifications= Code You requested",
            text: "MItul",
            html: `<br/><br/><h1>${OTP}</h1><br/><h5><b>If you didn't request a code kindly ignore! </b></h5>`,
        });

        console.log("Message sent: %s", info.messageId);
        console.log(otp);
    }

    OtpGeneratorCollection.findOneAndDelete({ Email: req.query.Email }).then((response) => {

        console.log(response);
        const result = new OtpGeneratorCollection({
            Email: req.query.Email,
            otp: OTP,
        })
        result.save();

        res.status(200).json({
            message: "OTP Send successfully",
            data: result,
            value: true,
        })

    }).catch((err) => {
        res.status(404).json({
            message: "OTP Insert error Error Error",
            data: err,
        })
    })


    main(OTP).then(() => {
        console.log("OTP send in your email");
    }).catch((err) => {
        console.log(err);
    }
    );
}

const setOTP = (req, res) => {
    console.log(req.query.OTP);

    OtpGeneratorCollection.findOne({ Email: req.query.Email }).then((response) => {
        console.log(response);
        if(response.otp===req.query.OTP){
            res.status(200).json({
                message: "verification successfully",
                data:response,
                value:true,
            })
        }else{
            res.status(404).json({
                message: "Invalid OTP",
                value:false,
            })
        }
    }).catch((err)=>{
        res.status(404).json({
            message:err
        })
    })
}


export default getOTP
export { setOTP }