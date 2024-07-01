import express from "express"
const router = express.Router();
import getOTP from "../../Controllers/Email/OTP.js";
import { setOTP } from "../../Controllers/Email/OTP.js";

router.get("/getOTP",getOTP)
router.post("/setOTP",setOTP)

export default router