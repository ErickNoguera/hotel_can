import { useEffect } from "react";
import CardAppointment from "../../components/CardAppointment/CardAppointment";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUserAppointments } from "../../redux/userSlice";

const GETAPPOINTMENTS_URL = "http://localhost:3000/appointments";
const GETUSERBYID_URL = "http://localhost:3000/users/";
const CANCEL_URL = "http://localhost:3000/appointments/cancel/";

 const Appointments = () => {
  // const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const login = useSelector((state) => state.actualUser.userData.login);
  const id = useSelector((state) => state.actualUser.userData.user.id);

  const appointments = useSelector((state) => state.actualUser.Appointments);

  useEffect(() => {
    !login && navigate("/");
  }, [login]);

  useEffect(() => {
    axios
      .get(GETUSERBYID_URL + id)
      .then((response) => response.data)
      .then((actualUser) => {
        dispatch(setUserAppointments(actualUser.Appointments));
      })
      .catch((error) => console.log(error.message));
  }, [id, dispatch]);

  const handleAppointmentCancel = (appointmentId) => {
    axios
      .put(CANCEL_URL + appointmentId)
      .then((response) => response.data)
      .then((data) => {
        axios
          .get(GETUSERBYID_URL + id)
          .then((response) => response.data)
          .then((actualUser) => {
            dispatch(setUserAppointments(actualUser.Appointments));
          })
          .catch((error) => console.log(error.message));
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div>
      <h2>Mis Turnos</h2>
      {appointments.map((appointment) => (
        <CardAppointment
          key={appointment.id}
          id={appointment.id}
          date={appointment.date}
          time={appointment.time}
          status={appointment.status}
          description={appointment.description}
          handleAppointmentCancel={handleAppointmentCancel}
        />
      ))}
    </div>
  );
}


export default Appointments;