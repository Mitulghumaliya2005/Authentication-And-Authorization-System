import nodemailer from 'nodemailer';

const getOTP = (req, res) => {

    const transporter = nodemailer.createTransport({
        host: "smtp-relay.brevo.com",
        port: 587,
        secure: false, // Use `true` for port 465, `false` for all other ports
        auth: {
            user: "77c368001@smtp-brevo.com",
            pass: "PdL9WQFySMX5mnBt",
        },
    });

    // async..await is not allowed in global scope, must use a wrapper
    async function main() {
        // send mail with defined transport object
        const info = await transporter.sendMail({
            from: 'xyz@gmail.com', // sender address
            to: "mitulghumaliya76@gmail.com", // list of receivers
            subject: "Here's the 6-digit Verifications= Code You requested", // Subject line
            // text: "", // plain text body
            html: "<b>Hello world?</b>", // html body
        });

        console.log("Message sent: %s", info.messageId);
        // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
    }

    main().catch(console.error);

    res.json({
        value: true,
    })
}

const setOTP = (req, res) => {
    res.json({
        message: "SetOTP",
    })
}


export default getOTP
export { setOTP }