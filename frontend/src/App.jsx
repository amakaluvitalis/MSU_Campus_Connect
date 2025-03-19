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
import InteractiveMap from "./pages/interactive_map"
import MentorshipProgram from "./pages/mentorship_program"
import Messaging from "./pages/messaging"
import NetworkingAndProfiles from "./pages/networking_and_profiles"
import NewsFeed from "./pages/news_feed"
import Notifications from "./pages/notifications"
import ProfilePage from "./pages/profile_page"
import ResetPassword from "./pages/reset_password"
import SearchBar from "./pages/search_bar"
import SignUp from "./pages/sign_up"
import UserAthentication from "./pages/user_authentication"
import UserDashboard from "./pages/user_dashboard"
import UserManagement from "./pages/user_management"

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
        <Route path="/interactive_map" element={<InteractiveMap />} />
        <Route path="/mentorship_program" element={<MentorshipProgram />} />
        <Route path="/messaging" element={<Messaging />} />
        <Route path="/networking_and_profiles" element={<NetworkingAndProfiles />} />
        <Route path="/news_feed" element={<NewsFeed />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/profile_page" element={<ProfilePage />} />
        <Route path="/reset_password" element={<ResetPassword />} />
        <Route path="/search_bar" element={<SearchBar />} />
        <Route path="/sign_up" element={<SignUp />} />
        <Route path="/user_athentication" element={<UserAthentication />} />
        <Route path="/user_dashboard" element={<UserDashboard />} />
        <Route path="/user_management" element={<UserManagement />} />
        <Route path="/error_page" element={<ErrorPage/>} />  {/* 404 page */}
      </Routes>
    </Router>
  );
}

export default App;
