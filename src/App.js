import { Route, Routes } from "react-router-dom";
import About from './Pages/About/About';
import Appointment from "./Pages/Appointment/Appointment";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Home from './Pages/Home/Home';
import Login from "./Pages/Login/Login";
import NotFound from "./Pages/NotFound/NotFound";
import Reviews from "./Pages/Reviews/Reviews";
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div className="max-w-7xl mx-auto px-12">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/appointment" element={<Appointment/>} />
        <Route path="/reviews" element={<Reviews/>} />
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/*" element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
