export enum AppointmentStatus {
    ACTIVE = "active",
    CANCELLED = "canceled",
}

interface IAppointment {
    id: number;
    date: string;
    time: string;
    userId: number;
    status: AppointmentStatus;
    description: string;
}


export default IAppointment;