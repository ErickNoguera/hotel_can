import React from 'react'
import { Link } from 'react-router-dom';
import styles from "../Landing/Landing.module.css"

function Landing() {
    return (
    <div className={styles.LandingStyles}>
        <h1>Bienvenido a Hotel Can</h1>
        <h2>¿Nos visitas por Primera Vez?</h2>
        <Link to="/register">
        <button>Registrarse</button>
        </Link>

        <h2>Tienes una cuenta?</h2>
        <Link to="/login">
        <button>Ingresar</button>
        </Link>
    </div>
    )
}

export default Landing;