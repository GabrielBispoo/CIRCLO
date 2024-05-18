import express from "express";
import { Request, Response, NextFunction } from "express";
import { verifyRole } from "../middleware/adminAuth";
import { authToken } from "../middleware/verificarToken";
import Cookies from 'js-cookie';

const router = express.Router();

const emailMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const { email } = req.body;
    console.log(email);
    Cookies.set('email', email)
    next()
}

router.post('/validate', authToken, emailMiddleware, async (_req, res) => {
    res.send('OKay')
})

export { router as ValidateRoute }