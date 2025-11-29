import { Request, Response } from "express"
import { getAppointmentsByIdService } from "../../services/appointmentsService";


//! GET /APPOINMENT/:TURNID => OBTENER EL LISTADO DE TODOS LOS TURNOS DE TODOS LOS TURNOS
export const getAppoimentById = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    const {turnId} = req.params;
    try {
      const appointment= await getAppointmentsByIdService(Number(turnId));
      res.status(200).json(appointment);
    } catch (error: any) {
      res.status(404).json({ error: error.message });
    }
  };