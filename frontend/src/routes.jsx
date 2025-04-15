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

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/campus-navigation" element={<CampusNavigation />} />
        <Route path="/alumni-engagement" element={<AlumniEngagement />} />
        <Route path="/alumni-directory" element={<AlumniDirectory />} />
        <Route path="/create-event" element={<CreateEvent />} />
        <Route path="/event-details" element={<EventDetails />} />
        <Route path="/event-management" element={<EventManagement />} />
        <Route path="/events-dashboard" element={<EventDashboard />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/admin-panel" element={<AdminPanel />} />
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;