import styles from "./Navbar.module.css";
import logo2 from "../../assets/Logo2.png";
import avatar from "../../assets/avatar1.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {

  const login = useSelector(state => state.actualUser.userData.login);

  // const userName = useSelector(state => state.actualUser.userData.user.name);
  return (
    <div className={styles.navContainer}>
      <div>
        <img id={styles.logoSection} src={logo2} alt="Logo" />
      </div>
      <div className={styles.linkSection}>
        <Link to="/home" >
        <span>PRINCIPAL</span>
        </Link>

        <Link to="/appointments">
          <span>RESERVAS</span>
        </Link>
        
        
        
        <Link to="/appointmentForm">
          <span>NUEVA RESERVA</span>
        </Link>
          

        <Link to="/about">
        <span>QUIENES SOMOS</span>
        </Link>

        <Link to="/contacts">
        <span>CONTACTO</span>
        </Link>
      </div>
      <div>
        <img src={avatar} alt="Avatar" />
      </div>
    </div>
  );
}
