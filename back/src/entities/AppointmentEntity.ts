import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { AppointmentStatus } from "../interfaces/IAppointment";
import User from "./UserEntity";


@Entity({
    name: "Appointments"
})
class Appointment {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    date!: string;
    
    @Column()
    time!: string;

    @Column({
    default: "ACTIVE"
    })
    status!: string;

    @Column()
    description!: string;


    @ManyToOne(() => User, user => user.appointments)
    @JoinColumn({ name: "user_id"})
    user!: User;

}


export default Appointment;