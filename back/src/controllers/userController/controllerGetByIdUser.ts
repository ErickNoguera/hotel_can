import {Request, Response} from "express"
import { getUsersByIdService } from "../../services/userService";

//!GET /USERS/ID => OBTENER EL DETALLE DE UN USUARIO ESPECIFICO.
export const getUsersById = async (
    req: Request<{id: string}>, 
    res: Response
) => {
    const { id } = req.params;
    try {
        const user = await getUsersByIdService(Number(id));
        res
        .status(200)
        .json(user)
        
    } catch (error: any) {
        res.status(404).json({message: error.message})
    }
};