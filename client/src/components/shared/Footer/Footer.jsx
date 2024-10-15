import Container from "@/components/ui/Container";
import Logo from "../../../assets/logo/be-princess-logo.png";

// icons
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black py-20 font-workSans">
      <Container>
        <div className="flex flex-col md:flex-row justify-between lg:gap-[200px]">
          <div className="max-w-[320px] text-white">
            {/* logo */}
            <div>
              <img src={Logo} alt="logo" className="h-20 mb-6" />
            </div>
            {/* text & contact */}
            <div className="space-y-6">
              <div>
                <p className="mb-3 leading-6 font-medium text-lg">
                  Princess Happiness
                </p>
                <p className="leading-6">
                  Be Princess is One of The Most Authentic Platform in
                  Bangladesh for Providing Beauty & Skin Care Products.
                </p>
              </div>
              {/* contact */}
              <div className="space-y-1.5">
                <div className="flex gap-2.5 items-center">
                  <FaPhoneAlt className="text-lg text-primary" />
                  <p>01718-773029 & 01748-176745</p>
                </div>
                <div className="flex gap-2.5 items-center">
                  <FaEnvelope className="text-lg text-primary" />
                  <p>beprincess007@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* links */}
          <div className="flex flex-col lg:flex-row justify-between text-white flex-1">
            <div>
              <h5 className="text-xl font-medium border-b mb-5 w-fit">
                Useful Links
              </h5>
              <div className="space-y-1.5 flex flex-col">
                <Link
                  to="/privacy_policy"
                  className="hover:text-primary transition duration-200"
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/refund_policy"
                  className="hover:text-primary transition duration-200"
                >
                  Refund Policy
                </Link>
                <Link
                  to="/terms_and_conditions"
                  className="hover:text-primary transition duration-200"
                >
                  Terms & Conditions
                </Link>
              </div>
            </div>
            <div>
              <h5 className="text-xl font-medium border-b mb-5 w-fit">
                Company
              </h5>
              <div className="space-y-1.5 flex flex-col">
                <Link
                  to="/about_us"
                  className="hover:text-primary transition duration-200"
                >
                  About us
                </Link>
                <Link
                  to="/blogs"
                  className="hover:text-primary transition duration-200"
                >
                  Blogs
                </Link>
                <Link
                  to="/contact_us"
                  className="hover:text-primary transition duration-200"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div>
              <h5 className="text-xl font-medium border-b mb-5 w-fit">
                Profile
              </h5>
              <div className="space-y-1.5 flex flex-col">
                <Link
                  to="/my_cart"
                  className="hover:text-primary transition duration-200"
                >
                  Cart
                </Link>
                <Link
                  to="/my_profile"
                  className="hover:text-primary transition duration-200"
                >
                  My Account
                </Link>
                <Link
                  to="/products"
                  className="hover:text-primary transition duration-200"
                >
                  All Products
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="text-white text-sm text-center font-medium">
            <p className="mt-8">© {new Date().getFullYear()} <Link to="/" className="text-primary">Be Princess</Link>. All Rights Reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
