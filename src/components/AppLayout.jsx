import { useLocation } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";

export default function AppLayout({ children, handlePopupOpen }) {
  const location = useLocation();

  // Check if the current route starts with `/admin`
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <div className="h-full m-0 p-0 w-full">
      {/* Conditionally Render NavBar */}
      {!isAdminRoute && <Navbar handlePopupOpen={handlePopupOpen} />}

      {/* Main Content */}
      {children}
      {!isAdminRoute && <Footer />}
    </div>
  );
}
