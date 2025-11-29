import ICreateCredentialDto from "../dtos/ICreateCredentialDto";
import Credential from "../entities/CredentialEntity";
import ICredential from "../interfaces/ICredential";
import { credentialRepository } from "../repositories/indexRepository";


export const createCredential = async (
  createCredentialDto: ICreateCredentialDto
): Promise<ICredential> => {
  const { username, password } = createCredentialDto;

  //*1. Validar que la credencial no exista
  const foundCredential: Credential | null = await credentialRepository.findOneBy({username});
  if(foundCredential) throw Error(`Ya existe la credencial del usuario ${username}`)

    //* 2. Creamos Instancia => Objeto a insertar en BBDD
  const newCredential: Credential = credentialRepository.create({
    username,
    password,
  });

//*3. Guardar en BBDD
  await credentialRepository.save(newCredential);

  return newCredential;
};

export const validateCredential = async (
  validateCredencialDto: ICreateCredentialDto
): Promise<Credential> => {
  const { username, password } = validateCredencialDto;

  //* 1.Verifico que exista credencial de ese username
  const foundCredential: Credential | null = await credentialRepository.findOneBy({username});
  if(!foundCredential) throw Error(`Credenciales incorrectas`);

  //* 2. Validar password
  if(password !== foundCredential.password)
    throw Error(`Credenciales incorrectas`);

    return foundCredential;
};
