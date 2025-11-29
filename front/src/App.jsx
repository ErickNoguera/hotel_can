
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './views/Home/Home'
import Login from './views/Login/Login';
import Register from './views/Register/Register';
import Landing from './views/Landing/Landing';
import About from './views/About/About';
import Navbar from './components/Navbar/Navbar';
import Appointments from './views/Appointments/appointment';
import ErrorPage from './views/ErrorPage.jsx/ErrorPage';
import AppointmentForm from './views/AppointmentForm/AppointmentForm';
import Contastcs from './views/Contacts/Contastcs';


function App() {

  const { pathname } = useLocation();

  return (
    <>
    {pathname !== "/" ? <Navbar /> : null}
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contacto" element={<Contastcs />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/appointmentform" element={<AppointmentForm />} />
      <Route path="/appointments" element={<Appointments />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
    </>
  );
};

export default App;
