import React, { useState } from "react";
import validateUser from "../../helpers/validateUser";
import axios from "axios";
import style from "../Register/Register.module.css"
import { useNavigate } from "react-router-dom";

const POSTUSER_URL = "http://localhost:3000/user/register";

function Register() {
  //*Declaramos Estado Inicial:
  const initialState = {
    name: "",
    email: "",
    birthdate: "",
    nDni: "",
    username: "",
    password: "",
    confirmPassword: "",
  };

  //* ESTADOS
  const [user, setUser] = useState(initialState);
  const [errors, setErrors] = useState(initialState);

  //*HANDLERS:
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
    setErrors(validateUser({ ...user, [name]: value }));
  };

  const handleReset = (event) => {
    event.preventDefault();
    setUser(initialState);
  };

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = {
      name: user.name,
      email: user.email,
      birthdate: user.birthdate,
      nDni: Number(user.nDni),
      username: user.username,
      password: user.password,
    };
    axios
      .post(POSTUSER_URL, userData)
      .then(({ data }) => {
        alert(data.message);
        setUser(initialState);
        navigate("/login");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  //*Array con los Datos de los campos:
  const formData = [
    { label: "Nombre: ", name: "name", type: "text" },
    { label: "Username: ", name: "username", type: "text" },
    { label: "Password: ", name: "password", type: "password" },
    {
      label: "Confirmar Password: ",
      name: "confirmPassword",
      type: "password",
    },
    { label: "Email: ", name: "email", type: "text" },
    { label: "Fecha de Nacimiento: ", name: "birthdate", type: "date" },
    { label: "DNI: ", name: "nDni", type: "text" },
  ];

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        {formData.map(({ label, name, type }) => (
          <div>
            <label htmlFor={name}>{label}</label>
            <input key= {name}
              id={name}
              name={name}
              type={type}
              value={user[name]}
              placeholder={`Ingreser ${label.toLocaleLowerCase()}`}
              onChange={handleChange}
            />
            {errors[name] && <span>{errors[name]}</span>}
          </div>
        ))}
        <button type="submit"
        disabled={Object.keys(user).some(e => !user[e])}
        >Registrar</button>
        <button type="reset" onClick={handleReset}>Borrar Datos</button>
      </form>
    </div>
  );
}

export default Register;
