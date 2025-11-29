import ICreateUserDto from "../../dtos/ICreateUserDto";
import { Request, Response } from "express";
import { createUserService } from "../../services/userService";
import User from "../../entities/UserEntity";

//!POST /USERS/REGISTER => REGISTRO DE UN NUEVO USUARIO.
export const register = async (req: Request<{},{},ICreateUserDto>, res: Response) => {
  const { name, email, birthdate, nDni, username, password} = req.body;


  try {
    const newUser: User = await createUserService({
      name, 
      email, 
      birthdate, 
      nDni, 
      username, 
      password,
    })
    res.status(201).json({message: "Usuario Registrado con éxito"});
    
    return;

  } catch (error: any) {
    res.status(400).json({message: error.message})
  }

};
