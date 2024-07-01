import express from "express";
const router = express.Router();
import { TokenVerify } from "../../Controllers/TokenVerify/TokenVerify.js";

router.get("/tokenverify", TokenVerify);

export default router