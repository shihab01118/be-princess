// images
import Logo from "../../../assets/logo/be-princess-logo.png";

// icons
import { MagnifyingGlassIcon, UserIcon } from "@heroicons/react/24/solid";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";

// components
import Container from "../../ui/Container";

const NavbarTop = () => {
  return (
    <div className="bg-black py-3 w-full">
      <Container>
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div>
            <img src={Logo} alt="be-princess-logo" className="h-16" />
          </div>

          {/* search bar */}
          <div className="h-11 max-w-xl w-full">
            <form className="flex items-center h-full">
              <input
                type="text"
                className="h-full w-full bg-gray-white border-none outline-none px-4 rounded-l-[4px] text-gray-600 text-sm placeholder:text-gray-600 placeholder:text-sm"
                placeholder="Search for Products, Brands"
              />
              <button className="bg-primary h-full px-3.5 rounded-r-[4px] hover:bg-primary-light">
                <MagnifyingGlassIcon className="w-5 h-5 text-white" />
              </button>
            </form>
          </div>

          {/* icons */}
          <div className="flex items-center gap-6">
            <div>
              <UserIcon className="w-7 h-7 text-white cursor-pointer" />
            </div>
            <div className="relative">
              <ShoppingBagIcon className="w-7 h-7 text-white cursor-pointer" />
              <div className="absolute  bg-primary h-5 w-5 rounded-full -top-2 -right-2 text-xs text-white flex items-center justify-center font-medium">
                <span>0</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NavbarTop;
