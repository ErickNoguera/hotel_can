import { Request,Response, NextFunction } from "express";
import ICreateCredentialDto from "../dtos/ICreateCredentialDto";

const credentialValidate = (
    req: Request<{},{},ICreateCredentialDto>,
    res: Response,
    next: NextFunction
    ) => {
        const { username, password } = req.body;
        try {
            if(!username) throw new Error("El campo username es requerido");
            if(username.length <4) throw new Error(
                "El campo username debe tener al menos 4 caracteres");
            if(username.length > 20) throw new Error(
                "El campo username no debe tener mas de 20 caracteres");

            if(!password) throw new Error("El campo password es requerido");
            if(password.length < 4) throw new Error(
                "El campo password debe tener al menos 4 caracteres");
            
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({ message: error.message });
            }
        }
        next();
    };

    export default credentialValidate;
