import { JSX, useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logout } from "@/redux/authSlice";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
  MdMenu,
  MdClose,
} from "react-icons/md";
import NavBarDropDown from "./NavBarDropDown";

export default function NavBar(): JSX.Element {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
    setShowDropdown(false);
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

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="text-2xl text-gray-700 focus:outline-none"
          >
            {showMobileMenu ? <MdClose /> : <MdMenu />}
          </button>
        </div>

        {/* Navigation Links - Desktop */}
        <nav className="hidden md:flex gap-8 text-sm font-medium items-center">
          <Link to="/features" className="hover:text-blue-500 transition">
            Features
          </Link>
          <Link to="/pricing" className="hover:text-blue-500 transition">
            Pricing
          </Link>
          <Link to="/contact" className="hover:text-blue-500 transition">
            Contact
          </Link>
        </nav>

        {/* CTA Buttons - Desktop */}
        <div className="hidden md:flex gap-3 items-center">
          {isAuthenticated && (
            <Link
              to="/dashboard"
              className="text-sm text-gray-500 font-semibold hover:opacity-60 transition pr-2"
            >
              Launch RosterU
            </Link>
          )}

          {isAuthenticated ? (
            <Button
              asChild
              className="border border-blue-500 hover:bg-blue-500 hover:text-white text-blue-500"
            >
              <Link to="/demo">Upgrade</Link>
            </Button>
          ) : (
            <Button className="bg-blue-600 hover:bg-blue-500 text-white">
              <Link to="/demo">Demo</Link>
            </Button>
          )}

          <Button variant="outline">
            <Link to="/contact">Contact Us</Link>
          </Button>

          {isAuthenticated ? (
            <div
              className="flex items-center cursor-pointer"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <Button className="w-10 h-10 rounded-full bg-blue-500 text-white text-xs flex items-center justify-center cursor-pointer">
                KC
              </Button>
              {showDropdown ? (
                <MdOutlineKeyboardArrowUp className="text-2xl" />
              ) : (
                <MdOutlineKeyboardArrowDown className="text-2xl" />
              )}
            </div>
          ) : (
            <Button onClick={() => navigate("/login")}>Log In</Button>
          )}

          {showDropdown && <NavBarDropDown logout={handleLogout} />}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {showMobileMenu && (
        <div className="md:hidden px-6 pt-4 pb-6 flex flex-col gap-4 bg-white border-t border-gray-200 shadow-md">
          <Link to="/features" onClick={() => setShowMobileMenu(false)}>
            Features
          </Link>
          <Link to="/pricing" onClick={() => setShowMobileMenu(false)}>
            Pricing
          </Link>
          <Link to="/contact" onClick={() => setShowMobileMenu(false)}>
            Contact
          </Link>

          {isAuthenticated && (
            <>
              <Link
                to="/demo"
                onClick={() => setShowMobileMenu(false)}
                className="text-blue-500 font-semibold"
              >
                Upgrade
              </Link>
              <Button
                onClick={() => {
                  handleLogout();
                  setShowMobileMenu(false);
                }}
                className="bg-red-100 text-red-600"
              >
                Log Out
              </Button>
            </>
          )}

          {!isAuthenticated && (
            <>
              <Link
                to="/demo"
                onClick={() => setShowMobileMenu(false)}
                className="text-blue-600 font-semibold"
              >
                Demo
              </Link>
              <Button
                onClick={() => {
                  navigate("/login");
                  setShowMobileMenu(false);
                }}
              >
                Log In
              </Button>
            </>
          )}
        </div>
      )}
    </header>
  );
}
