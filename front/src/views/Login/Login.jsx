import React, { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"
import { useDispatch } from "react-redux";
import { setUserData } from "../../redux/userSlice";

const POSTUSERLOGIN_URL = "http://localhost:3000/user/login";

function Login() {
  //*Declaramos Estado Inicial:
  const initialState = {
    username: "",
    password: "",
  };

  //* ESTADOS
  const [user, setUser] = useState(initialState);
  const [errors, setErrors] = useState(initialState);

  //*VALIDACION 
  const validateUserLogin = ({username, password}) => {
    const errors = {};
    if(!username) errors.username = "Ingresar username";
    if(!password) errors.password = "Ingresar password";
    return errors;
    }

  //*HANDLERS:
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
    setErrors(validateUserLogin({ ...user, [name]: value }));
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(POSTUSERLOGIN_URL, user)
      .then(({data}) => data)
      .then( data  => {
        //*Despachar accion:
        dispatch(setUserData(data))
        alert("Usuario logueado...");
        setUser(initialState);
        navigate("/home");
      })
      .catch((error) => {
        alert("Credenciales Incorrectas");
      });
  };

  //*Array con los Datos de los campos:
  const formData = [
    { label: "Username: ", name: "username", type: "text" },
    { label: "Password: ", name: "password", type: "password" },
  ];

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        {formData.map(({ label, name, type }) => (
          <div key={name}>
            <label htmlFor={name}>{label}</label>
            <input
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
      </form>
    </div>
  );
}

export default Login;
