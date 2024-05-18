import { Request, Response, NextFunction } from 'express';
import { UserUseCase } from '../usecases/user.usecase';
import cookies from 'js-cookie'

const userUseCase = new UserUseCase();

export const verifyRole = async (req: Request, res: Response, next: NextFunction) => {
    const role = await obterPapeldoUsuario(req);
    console.log('role em vR', role)
    if (role === 0) {
        res.status(403).send({ message: 'Você não tem permissão para acessar esta rota!' });
    } else if (role === undefined) {
        return res.status(403).send({ message: 'Erro ao obter o papel do usuário. Acesso negado.' });
    } else {
        next();
    }
};

const obterPapeldoUsuario = async (req: Request): Promise<number | undefined> => {
    const email = req.body
    if (email === undefined) {
        return
    }
    console.log('email em obt', email)
    try {
        const userInfo = await userUseCase.view({ email });
        console.log(email)
        if (!userInfo || userInfo.role === undefined) {
            console.log(userInfo)
            console.error("Erro ao obter papel do usuário 1");
            return undefined;
        } else {
            const role = userInfo.role;
            return role;
        }
    } catch (error) {
        console.error("Erro ao obter papel do usuário", error);
        return undefined;
    }
};
