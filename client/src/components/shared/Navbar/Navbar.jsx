import NavbarTop from "./NavbarTop";
import NavbarBottom from "./NavbarBottom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full font-workSans z-50">
      <NavbarTop />
      <NavbarBottom />
    </nav>
  );
};

export default Navbar;
