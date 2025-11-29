import { DataSource } from "typeorm";
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER, } from "./envs";
import dotenv from "dotenv";
import User from "../entities/UserEntity";
import Credential from "../entities/CredentialEntity";
import Appointment from "../entities/AppointmentEntity";
dotenv.config();

export const AppDataSource = new DataSource({
    //*Credenciales
    type: "postgres",
    host: DB_HOST || "localhost",
    port: Number(DB_PORT) || 5432,
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    //*Configuracion extra
    synchronize: false, //*
    dropSchema: false,  //*
    logging: false,     //*
    entities: [User, Credential, Appointment],
    subscribers: [],
    migrations: [],
});