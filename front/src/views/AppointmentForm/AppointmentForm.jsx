import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "../Register/Register.module.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const POSTAPPOINTMENT_URL = "http://localhost:3000/appointments/schedule";

export default function AppointmentForm(props) {
    const navigate = useNavigate();
    const userId = useSelector((state) => 
    state.actualUser?.userData.user.id);
    const login = useSelector((state) => state.actualUser.userData.login);

    useEffect(() => {
        if(!userId){
            navigate("/");
        }
    }, [userId, navigate]);

    const initialState = {
        date: "",
        hours: "09",
        minutes: "00",
        description: "",
    };
    const [appointment, setAppointment] = useState(initialState);
    const [errors, setErrors] = useState({
        date: "debe ingresar una fecha"
    });

    const validateApppointment = ({
        date, hours, minutes, description
    }) => {
        const errors = {};
        if (!date) errors.date = "Ingresar fecha";
        else if (isWeekend(date)) errors.date =
        "No se puede programar en fin de semana";
        if (!description) errors.description = "Ingresar descrpcion";
        else if (description.length < 5) errors.description = 
        "Descripcion de no mas de 25 caracteres";
        return errors;
    };

    const isWeekend = (date) => {
        const day = new Date(date).getDay();
        return day === 5 || day === 6;
    };

    const handleChange = (event) => {
        const { value, name } = event.target;
        const updateAppointment = {
            ...appointment, [name]: value,
        };
        setAppointment(updateAppointment);
        setErrors(validateApppointment(updateAppointment));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const newAppointment = {
            date: appointment.date,
            time:`${appointment.hours}:${appointment.minutes}`,
            description: appointment.description,
            userId
        };
        axios
        .post(POSTAPPOINTMENT_URL, newAppointment)
        .then(({data}) => {
            alert(`Ha sido creada la reserva: fecha ${data.date}, hora ${data.time}`);
            setAppointment(initialState);
            navigate("/appointments");
        })
        .catch((error) => {
            alert(`Error: ${error.response.data.error}`);
        });
    };

    const validHours = ["09", "10", "11", "12", "13", "14", "15", "16", "17"];
    const validMinutes = ["00", "30"];

    function getTomorrow() {
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        return tomorrow.toISOString().split("T")[0];
    }

    function getFourteenDaysAhead() {
        const today = new Date();
        const fourteennDaysAhead = new Date(today);
        fourteennDaysAhead.setDate(fourteennDaysAhead.getDate() + 13)
        return fourteennDaysAhead.toISOString().split("T")[0];
    }

    return (
        <div className={styles.formContainer}>
            <h2>Nueva Reserva</h2>
            <hr />
            <form onSubmit={handleSubmit}>

                <div>
                    <label htmlFor="date">Fecha: </label>
                    <input 
                    type="date"
                    id="date"
                    name="date"
                    min={getTomorrow()}
                    max={getFourteenDaysAhead()}
                    value={appointment.date}
                    onChange={handleChange}
                     />
                     {errors.date && <span style={{color: "red"}}>
                        {errors.date}
                        </span>}
                </div>
                <div>
                    <select
                    id="hours"
                    name="hours"
                    value={appointment.hours}
                    onChange={handleChange}
                    >

                    {validHours.map((hour) => (
                        <option key={hour} value ={hour}>{hour}</option>))}
                        </select>
                        <select
                        id="minutes"
                        name="minutes"
                        value={appointment.minutes}
                        onChange={handleChange}>
                            {validMinutes.map((minute) => (
                                <option key={minute} value={minute}>{minute}</option>))}
                        </select>
                </div>
                <br />

                <div>
                    <label htmlFor="description">Descripcion: </label>
                    <input type="text"
                    id="descrption"
                    name="description"
                    value={appointment.description}
                    placeholder="Ingresar description..."
                    onChange={handleChange} 
                    />
                    {errors.description && (<span style={{ color: "red"}}>
                        {errors.description}
                    </span>
                )}
                </div>

                <button
                type="submit"
                disabled={Object.keys(errors).length > 0}
                >
                    Enviar
                </button>
            </form>
        </div>
    );

}