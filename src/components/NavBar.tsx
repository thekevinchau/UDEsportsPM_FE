import { JSX, useState } from "react";
import { Button } from "./ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logout } from "@/redux/authSlice";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function NavBar(): JSX.Element {
  const [dropDownVisibility, setDropDownVisibility] = useState<boolean>(false);
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <header className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-black">
        {/* Logo */}
        <div className="text-xl font-bold tracking-tight">
          <Link to="/" className="hover:opacity-90 transition">
            Roster<span className="text-blue-600">U</span>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex gap-8 text-sm font-medium items-center">
          <Link
            to="/features"
            className="text-gray-800 hover:text-blue-500 transition duration-200"
          >
            Features
          </Link>
          <Link
            to="/pricing"
            className="text-gray-800 hover:text-blue-500 transition duration-200"
          >
            Pricing
          </Link>
          <Link
            to="/contact"
            className="text-gray-800 hover:text-blue-500 transition duration-200"
          >
            Contact
          </Link>
        </nav>

        {/* CTA Buttons */}
        <div className="flex gap-3">
          {isAuthenticated ? (
            <Link
              to="/pricing"
              className="flex items-center text-sm text-gray-500 font-semibold hover:opacity-60 transition duration-200"
            >
              Launch RosterU
            </Link>
          ) : null}

          {isAuthenticated ? (
            <Button
              asChild
              className="border border-blue-500 hover:bg-blue-500 hover:text-white text-blue-500 transition duration-200"
            >
              <Link to="/demo">Upgrade</Link>
            </Button>
          ) : (
            <Button
              asChild
              className="bg-blue-600 hover:bg-blue-500 text-white transition duration-300"
            >
              <Link to="/demo">Demo</Link>
            </Button>
          )}

          <Button className="border cursor-pointer mr-2">
            <Link to="/contact" className="w-full h-full">Contact Us</Link>
          </Button>

          <div className="flex items-center hover:cursor-pointer" onClick={() => console.log('Open panel')}>
            <Button className="w-9.5 h-9.5 rounded-full bg-blue-500 text-white text-xs flex items-center justify-center cursor-pointer hover:opacity-80">
              KC
            </Button>
            <MdOutlineKeyboardArrowDown className="text-2xl"/>
          </div>

        </div>
      </div>
    </header>
  );
}
