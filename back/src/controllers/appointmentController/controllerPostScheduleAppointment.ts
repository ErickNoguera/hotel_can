import { Request, Response } from "express"
import Appointment from "../../entities/AppointmentEntity";
import { scheduleAppointmentService } from "../../services/appointmentsService";


//! POST /APPOINMENT/SCHEDULE => AGENDAR UN NUEVO TURNO
export const schedule = async (
    req: Request,
    res: Response
    ): Promise<void> => {
      const { userId, date, time, description } = req.body;
      try {
        const newAppointment: Appointment = await scheduleAppointmentService({
          userId,
          date,
          time,
          description
      });
        res.status(200).json(newAppointment);
      } catch (error: any) {
        res.status(400).json({ error: error.message });
      }
    };