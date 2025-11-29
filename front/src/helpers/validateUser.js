const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).+$/;

const validateUser = ({
  name,
  username,
  password,
  confirmPassword,
  email,
  birthdate,
  nDni,
}) => {
  const errors = {};

  //Validacion de name:
  if (!name) errors.name = "El campo name es requerido";
  else {
    if (name.length < 4)
      errors.name = "El campo name debe tener al menos 4 caracteres";
    if (name.length > 50)
      errors.name = "El campo name debe tener como maximo 50 caracteres";
  }

  //Validacion email:
  if (!email) errors.email = "El campo email es requerido";
  else {
    if (!emailRegex.test(email))
      errors.email = "El campo email debe ser un mail válido";
  }

  //Validacion de birthdate:
  if (!birthdate) errors.birthdate = "El campo birthdate es requerido";
  else {
    if (!dateRegex.test(birthdate))
      errors.birthdate = "El campo birthdate debe estar en formato yyyy-mm-dd";
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const birthdateDate = new Date(birthdate);
    const ageDiff = new Date(today.getTime() - birthdateDate.getTime());
    const age = ageDiff.getUTCFullYear() - 1970;
    if (age < 16) errors.birthdate = "La persona debe ser mayor a 16 años";
  }

  //Validacion del numero de DNI:
  if (!nDni) errors.nDni = "El campo nDni es requerido";
  else {
    if (isNaN(Number(nDni))) errors.nDni = "El campo nDni debe ser un número";
    if (Number(nDni < 0)) errors.nDni = "El campo nDni debe ser un numero positivo";
  }

  //Validacion de username:
  if (!username) errors.username = "El campo username es requerido";
  else {
    if (username.length < 4)
      errors.username = "El campo username debe tener al menos 4 caracteres";
    if (username.length > 20)
      errors.username =
        "El campo username debe tener como maximo 20 caracteres";
  }

  //Validacion de password
  if (!password) errors.password = "El campo password es requerido";
  else {
    if (password.length < 4 || password.length > 10)
      errors.password = "password debe tener entre 4 y 10 caracteres";
    if (!passwordRegex.test(password))
      errors.password =
        "password debe contener al menos una letra, un numero y un caracter especial (@#$%^&*(),.?)";
  }

  //Validacion de confirmacion de password:
  if (!confirmPassword)
    errors.confirmPassword = "El campo confirmPassword es requerido";
  else {
    if (password !== confirmPassword)
      errors.confirmPassword = "La confirmacion de password no coincide";
  }
  return errors;
};

export default validateUser;
