import { Request, Response } from "express"
import ICreateCredentialDto from "../../dtos/ICreateCredentialDto"
import { validateCredential } from "../../services/credentialService";
import { findUserByCredentialId } from "../../services/userService";
import Credential from "../../entities/CredentialEntity";



//!POST /USERS/LOGIN => LOGIN DEL USUARIO A LA APLICACION.
export const login = async (req: Request<{},{},ICreateCredentialDto>, res: Response) => {

    const{ username, password} = req.body;
    try {
        const credential: Credential = await validateCredential({username, password});
        
        const user = await findUserByCredentialId(credential.id)

        res.status(200).json({ 
            login: true, 
            user, 
            credential
        });
    } catch (error: any) {
        res.status(400).json({message: error.message});
    }
};
