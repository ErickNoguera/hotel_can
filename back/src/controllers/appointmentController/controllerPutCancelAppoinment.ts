import { Request, Response } from "express";
import { cancelAppointmentService } from "../../services/appointmentsService";

//! POST /APPOINMENT/CANCEL/:TURNID => CAMBIAR EL ESTATUS DE UN TURNO A "CANCELADO"
export const cancel= async (
  req: Request<{ turnId: string },{},{}>,
  res: Response
): Promise<void> => {
  const { turnId } = req.params;

  try {
    await cancelAppointmentService(Number(turnId),);
    res.status(200).json({
      message: `turno con id: ${turnId} cancelado`});

  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

