import Footer from "@/components/shared/Footer/Footer";
import Navbar from "@/components/shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-[136px] font-workSans">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default HomeLayout;
