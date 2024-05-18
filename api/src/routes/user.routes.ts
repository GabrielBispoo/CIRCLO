import express from "express";
import { UserUseCase } from '../usecases/user.usecase'
import { UserCreate, UserLogin, UserViewByEmail, UserViewById } from "../interfaces/users.interface";
import { UserLoginCase } from "../usecases/user.logincase";
import { authToken } from "../middleware/verificarToken";
import { verifyRole } from "../middleware/adminAuth";

const router = express.Router();
const userUseCase = new UserUseCase();
const userLoginCase = new UserLoginCase();


router.post<{ Body: UserCreate }>('/user', async (req, res) => { // Create
    try {
        const { name, email, password } = req.body;

        if (!email) {
            return res.status(400).json({ error: "Email invalido!" });
        }
        if (!password) {
            return res.status(400).json({ error: "Senha invalida!" });
        }
        if (!name) {
            return res.status(400).json({ error: "Nome invalido!" });
        }

        const data = await userUseCase.create({
            name,
            email,
            password
        });

        return res.status(200).json(data);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Erro interno do servidor" });
    }
});

router.get('/user/:identifier', async (req, res) => {
    const { identifier } = req.params;

    if (!identifier) {
        console.error("Identificador ausente!");
        return res.status(400).json({ error: "Identificador ausente na solicitação" });
    }

    try {
        let data;

        if (isNaN(Number(identifier))) {
            const params: UserViewByEmail = { email: identifier };
            data = await userUseCase.view(params);
        } else {
            const params: UserViewById = { id: parseInt(identifier) };
            data = await userUseCase.viewById(params);
        }

        return res.status(200).json(data);

    } catch (error) {
        console.error("Erro interno do servidor:", error);
        return res.status(500).json({ error: "Erro interno do servidor" });
    }
});

router.get('/user', async (req, res) => { // read all
    try {
        const data = await userUseCase.viewAll()
        console.log(data)
        return res.status(200).json(data)
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Erro interno do servidor" });
    }
})


router.get('/teste', (req, res) => { // Init
    res.status(200).json({ hello: 'world' });
});

router.put('/user/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const { email, password, name } = req.body;

    try {
        const data = await userUseCase.update({
            id,
            name,
            password,
            email
        })
        return res.status(200).json(data);
    } catch (error) {
        console.error(error)
        return res.status(500).json({ error: "Erro interno do servidor" });
    }
})

router.delete('/user/:id', async (req, res) => { // Delete
    const { id } = req.params;
    try {
        const data = await userUseCase.delete(id)
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json({ error: "Erro interno do servidor" });
    }
})


router.post('/user/login', async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password || email === undefined || password === undefined) {
        return res.status(400).json({ error: 'Email ou senha passados incorretamente' });
    }

    try {
        const user = await userLoginCase.login({
            email,
            password
        });
        console.table(user)
        console.log(user?.token)
        if (user !== null && user !== undefined) {
            if (user.success == true) {
                return res.status(200).json({ message: 'Login bem sucedido!', token: user.token })
            } else {
                return res.status(401).json({ error: 'Credenciais Incorretas' })
            }
        }

    } catch (error) {
        return res.status(500).json({ error: "Erro interno do servidor" });
    }
})



export { router as userRoutes };
