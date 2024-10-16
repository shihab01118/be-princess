import { Outlet } from "react-router-dom";
import Footer from "@/components/shared/Footer/Footer";
import Navbar from "@/components/shared/Navbar/Navbar";

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