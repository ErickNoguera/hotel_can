import imgAppointment from "../../assets/imagen_de_appointment.jpg";
import Appointments from "../../views/Appointments/appointment";
import styles from "../CardAppointment/CardAppointment.module.css";
export default function CardAppointment({
  id,
  date,
  time,
  status,
  description,
  handleAppointmentCancel,
}) {
  const handleClick = () => {
    if (
      window.confirm(
        `¿Desea cancelar el turno del dia ${date} a las ${time}hrs`
      )
    ) {
      handleAppointmentCancel(id);
    }
  };

  return (
    <div key={id} className={styles.cardContainerAppointment}>
      <img src={imgAppointment} alt="imgAppointment" />
      <span>{date}</span>
      <span>{time}</span>
      <span>{description}</span>
      {status === "ACTIVE" ? (
        <span className={styles.active} onClick={handleClick}>
          Activo
        </span>
      ) : (
        <span className={styles.cancelled}>Cancelado</span>
      )}
    </div>
  );
}
