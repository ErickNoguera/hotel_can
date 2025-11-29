import { Request, Response, NextFunction } from "express";
import ICreateAppointmentDto from "../dtos/ICreateAppointmentsDto";

const appointmentValidate = (
    req: Request<{},{},ICreateAppointmentDto>,
    res: Response,
    next: NextFunction
) => {
    const { date, time, description } = req.body;
    try {
        //VALIDACION DE LA FECHA
        if(!date) throw new Error("El campo date es requerido");
        const apppointmentDate = new Date(date);
        const today = new Date();
        today.setHours(0,0,0,0);
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        const in14Days = new Date(today);
        in14Days.setDate(in14Days.getDate() + 14);

        if(apppointmentDate < tomorrow || apppointmentDate > in14Days) {
            throw new Error("La fecha debe ser dentro de los proximos 14 dias");
        }

        //VALIDACION DEL TIEMPO
        if(!time) throw new Error("El campo time es requerido");
        const validTimes = [
            "08:00",
            "08:30",
            "09:00",
            "09:30",
            "10:00",
            "10:30",
            "11:00",
            "11:30",
            "12:00",
            "12:30",
            "13:00",
            "13:30",
            "14:00",
            "14:30",
            "15:00",
            "15:30",
            "16:00",
            "16:30",
            "17:00",
            "17:30",
        ];
        if(!validTimes.includes(time)) {
            throw new Error("El campo time debe estar entre las 8:00 y 17:30 en intervalos de 30 Minutos");
        }

        //VALIDACION DE LA DESCRIPCION
        if(!description) throw new Error("El campo description es requerido");
        if(typeof description !== "string")
            throw new Error("El campo description debe ser un string");
        if(description.length < 5 || description.length > 50) {
            throw new Error("La descripción debe tener entre 5 y 50 caracteres");
        } 
    } catch (error) {
        if(error instanceof Error) {
            return res.status(400).json({error: error.message});
        }
    }
    next();
};

export default appointmentValidate;