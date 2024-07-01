import express from 'express'
const router = express.Router();
import { SignIn } from '../../Controllers/SignIn/SignIn.js';

router.post("/SignIn",SignIn);

export default router