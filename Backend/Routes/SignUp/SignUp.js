import express from "express";
const router = express.Router();
import { SignUp } from "../../Controllers/SignUp/SignUp.js";

router.post("/SignUp",SignUp)

export default router