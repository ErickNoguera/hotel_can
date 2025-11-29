import { Request, Response } from "express"
import { getAllAppointmentsService } from "../../services/appointmentsService";
import Appointment from "../../entities/AppointmentEntity";


//! GET /APPOINMENT => OBTENER EL LISTADO DE TODOS LOS TURNOS DE TODOS LOS TURNOS
export const getAllAppointments = async (
    req: Request,
    res: Response
  ): Promise<void> => {
  
    try {
      const allAppointments: Appointment[] = await
        getAllAppointmentsService();
      res.status(200).json(allAppointments);
    } catch (error: any) {
      res.status(404).json({ error: error.message });
    }
  };