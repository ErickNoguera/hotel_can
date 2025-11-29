
import ICreateUserDto from "../dtos/ICreateUserDto";
import Credential from "../entities/CredentialEntity";
import User from "../entities/UserEntity";
import { credentialRepository, userRepository } from "../repositories/indexRepository";
import { createCredential } from "./credentialService";

export const getAllUsersService = async (): Promise<User[]> => {
    const allUsers: User[] = await userRepository.find({
        relations: ["appointments"],
});
    return allUsers;
};

export const getUsersByIdService = async (id: number): Promise<User> => {
    const foundUsers: User | null = await userRepository.findOne({
        where: { id },
        relations: ["appointments"],
    });
    if(!foundUsers) throw Error(`Usuario con id: ${id} no encontrado`);

    return foundUsers;
};

export const createUserService = async (createUserDto: ICreateUserDto) => {
    const { name, email, birthdate, nDni, username, password} = createUserDto;

    //* 1. Verificar que el usuario no se encuentre registrado
    const foundUser = await userRepository.findOneBy({ email });
    if(foundUser) throw new Error(`El mail ${email} ya se encuentra registrado`);

    //* 2. Crear Credencial
    const newCredential:Credential = await createCredential({
        username,
        password,
    });
    //* 3. Crear Usuario
    const newUser: User = userRepository.create({
        name,
        email,
        birthdate,
        nDni,
    });
    //* 4. Asociar a "newCredential"
    newUser.credential = newCredential;
    //* 5. Guardar en BBDD
    await userRepository.save(newUser);

    return newUser;
};

export const findUserByCredentialId = async (credentialId: number): Promise<User> => {
    const foundUser: User | null = await userRepository.findOneBy({
        credential: { id: credentialId }
    });
    if(!foundUser) throw new Error(`Usuario con el Id: ${credentialId} NO encontrado`);
    return foundUser;
};


