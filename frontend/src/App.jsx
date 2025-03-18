import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CampusNavigation from "./pages/campus_navigation";
import AlumniEngagement from "./pages/alumni_engagement";
import ErrorPage from "./pages/error_page";
import AlumniDirectory from "./pages/alumni_directory";
import CreateEvent from "./pages/create_event";
import EventDetails from "./pages/event_details";
import EventManagement from "./pages/event_management";
import EventDashboard from "./pages/events_dashboard";
import ForgotPassword from "./pages/forgot_password";
import AdminPanel from "./pages/admin_panel";

import "./App.css";

// import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/campus_navigation" element={<CampusNavigation />} />
        <Route path="/alumni_engagement" element={<AlumniEngagement />} />
        <Route path="/alumni_directory" element={<AlumniDirectory />} />
        <Route path="/create_event" element={<CreateEvent />} />
        <Route path="/event_details" element={<EventDetails />} />
        <Route path="/event_management" element={<EventManagement />} />
        <Route path="/event_dashboard" element={<EventDashboard />} />
        <Route path="/forgot_password" element={<ForgotPassword />} />
        <Route path="/admin_panel" element={<AdminPanel />} />
        <Route path="/error_page" element={<ErrorPage/>} />  {/* 404 page */}
      </Routes>
    </Router>
  );
}

export default App;
