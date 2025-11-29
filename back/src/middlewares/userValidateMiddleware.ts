import { NextFunction, Request, Response } from "express";
import ICreateUserDto from "../dtos/ICreateUserDto";
import { log } from "console";

//TODO  VALIDACION DEL NAME
const userValidate = (
  req: Request<{}, {}, ICreateUserDto>,
  res: Response,
  next: NextFunction
) => {
  const { name, email, birthdate, nDni, username, password } = req.body;

  try {
    if (!name) throw new Error("name es requerido");
    if (typeof name !== "string") throw new Error("name debe ser un string");
    if (name.length < 3) throw new Error("name debe ser mayor a 2 caracteres");

    //TODO  VALIDACION DEL EMAIL
    if (!email) throw new Error("email es requerido");
    if (typeof email !== "string") throw new Error("email debe ser un string");
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) throw new Error("email no es válido");

    //TODO  VALIDACION DEL BIRTHDATE
    if (!birthdate) throw new Error("birthdate es requerido");
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    //*yyyy-mm-dd
    if(!dateRegex.test(birthdate))
      throw new Error("El campo Birthdate debe estar en formato yyy-mm-dd");
    const today = new Date();
    today.setHours(0,0,0,0);
    const birthdateDate = new Date(birthdate);
    const ageDiff = new Date(today.getTime() - birthdateDate.getTime());
    const age = ageDiff.getUTCFullYear() - 1970;
    if (age < 16) throw new Error("La persona debe tener al menos 16 años");

    //TODO  VALIDACION DEL NDNI
    if (!nDni) throw new Error("nDni es requerido");
    if (typeof nDni !== "number")
      throw new Error("El campo nDni debe ser un número");
    if (nDni < 0) throw new Error("El campo nDni debe ser un número positivo");
    

    //TODO  VALIDACION DEL USERNAME
    if (!username) throw new Error("username es requerido");
    if (typeof username !== "string")
      throw new Error("username debe ser un string");
    if (username.length < 3)
      throw new Error("username debe ser mayor a 2 caracteres");
    if (username.length > 20)
      throw new Error("username debe ser menor a 20 caracteres");

    //TODO  VALIDACION DEL PASSWORD
    if (!password) throw new Error("password es requerido");
    if (typeof password !== "string")
      throw new Error("password debe ser un string");
    if (password.length < 4 || password.length > 10)
      throw new Error("password debe tener entre 4 y 10 caracteres");
    if (!/(?=.*[A-Za-z])(?=.*\d)/.test(password))
      throw new Error("password debe contener letras y números");
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password))
      throw new Error("password debe contener al menos un carácter especial");
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({ error: error.message });
    }
  }
  next();
};


export default userValidate;

