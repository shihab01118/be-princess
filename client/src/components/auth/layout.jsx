import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";

const AuthLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-[136px] bg-red-400">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default AuthLayout;
