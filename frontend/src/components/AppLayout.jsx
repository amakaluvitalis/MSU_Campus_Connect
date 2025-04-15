import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <>
      <Navbar />
      <div className="page-content">
        <Outlet /> {/* This will render the current page */}
      </div>
    </>
  );
}

export default AppLayout;
