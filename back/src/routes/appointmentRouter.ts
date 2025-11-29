import { Router } from "express";
import {
  getAllAppointments,
  schedule,
  cancel,
} from "../controllers/appointmentController/appointmentController";
import { getAppointmentsByIdService } from "../services/appointmentsService";
import appointmentValidate from "../middlewares/appointmentValidateMiddleware";

const appointmentRouter: Router = Router();
appointmentRouter.get("/", getAllAppointments);
appointmentRouter.get("/:turnId", getAppointmentsByIdService);
appointmentRouter.post("/schedule", appointmentValidate, schedule);
appointmentRouter.put("/cancel/:turnId", cancel);

export default appointmentRouter;
