import ICreateAppointmentDto from "../dtos/ICreateAppointmentsDto";
import Appointment from "../entities/AppointmentEntity";
import User from "../entities/UserEntity";
import { AppointmentStatus } from "../interfaces/IAppointment";
import {
  appointmentRepository,
  userRepository,
} from "../repositories/indexRepository";

//TODO  LLAMANDO A TODOS LOS APPOINTMENTS
export const getAllAppointmentsService = async (): Promise<Appointment[]> => {
  const allAppointments = await appointmentRepository.find({
    relations: ["user"],
  });
  return allAppointments;
};

//TODO  LLAMANDO A UN APPOINTMENT POR ID
export const getAppointmentsByIdService = async (
  id: number
): Promise<Appointment> => {
  const foundAppointment: Appointment | null =
    await appointmentRepository.findOneBy({ id: id });
  if (!foundAppointment) {
    throw new Error("Appointment no encontrado");
  }
  return foundAppointment;
};

//TODO  CREANDO UN APPOINTMENT
export const createAppointmentService = async (
  createAppointmentDto: ICreateAppointmentDto
) => {
  const { date, time, userId, description } = createAppointmentDto;

  //TODO BUSCO SI YA EXISTE UNA CITA PARA LA MISMA FECHA Y HORA
  const user: User | null = await userRepository.findOneBy({
    id: userId,
  });

  if (!user) throw new Error(`usuario con id ${userId}no encontrado`);

  const newAppointment: Appointment = appointmentRepository.create({
    date: date,
    time: time,
    user: user,
    description: description,
  });

  newAppointment.user = user;
  await appointmentRepository.save(newAppointment);
  return newAppointment;
};

export const scheduleAppointmentService = async (
  scheduleAppointmentDto: ICreateAppointmentDto
): Promise<Appointment> => {
  const { date, time, description, userId } = scheduleAppointmentDto;

  const user: User | null = await userRepository.findOneBy({ id: userId });
  if (!user) throw Error("usuario con id: ${userId} no existe");
  const newAppointment: Appointment = appointmentRepository.create({
    date,
    time,
    description,
    user,
  });
  //asociamos el usuario al turno creado:
  newAppointment.user = user;
  // guardamos el turno en la base de datos:
  await appointmentRepository.save(newAppointment);
  newAppointment;

  return newAppointment;
};




export const cancelAppointmentService = async (
  turnId: number
): Promise<void> => {
  const appointment: Appointment | null = await appointmentRepository.findOneBy(
    {
      id: turnId,
    }
  );
  if (!appointment) throw Error("turno inexistente");
  appointment.status = AppointmentStatus.CANCELLED;
  await appointmentRepository.save(appointment);
  return;
};
