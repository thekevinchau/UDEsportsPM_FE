import { JSX, useState } from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // hamburger and close icons
import { MdKeyboardArrowDown } from "react-icons/md";

export default function NavBar(): JSX.Element {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white w-full h-20 flex justify-evenly items-center px-6 shadow md:px-[10vw]">
      {/* Logo and nav links */}
      <div className="flex items-center w-full justify-evenly">
        <a href="/" className="h-full flex items-center">
          <img
            src="src/assets/rosterU-no-slogan.png"
            className="h-36 object-contain"
            alt="RosterU Logo"
          />
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-10 text-lg font-bold font-mono text-gray-600">
          <Link
            to="/features"
            className="hover:text-black transition duration-300 flex items-center"
          >
            Features <MdKeyboardArrowDown/>
          </Link>
          <Link
            to="/contact"
            className="hover:text-black transition duration-300 flex items-center"
          >
            Contact <MdKeyboardArrowDown/>
          </Link>
          <Link
            to="/pricing"
            className="hover:text-black transition duration-300 flex items-center"
          >
            Pricing
          </Link>
        </div>

        {/* Right side buttons */}
        <div className="hidden md:flex items-center gap-4 text-base">
          <Link to="/contact-us" className="text-black">
            Contact Us
          </Link>
          <Button className="bg-white text-black border border-orange-500 hover:bg-orange-100">
            <Link to="/login" className="">Log In</Link>
          </Button>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-sm shadow-md transition-all duration-300">
            Try It Free
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-black"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white shadow-md flex flex-col items-center gap-6 py-6 z-50">
          <Link to="/features" onClick={() => setMobileMenuOpen(false)}>
            Features
          </Link>
          <Link to="/pricing" onClick={() => setMobileMenuOpen(false)}>
            Pricing
          </Link>
          <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
            Contact
          </Link>
          <Link to="/contact-us" onClick={() => setMobileMenuOpen(false)}>
            Contact Us
          </Link>
          <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
            <Button className="bg-white text-black border border-orange-500 hover:bg-orange-100">
              Log In
            </Button>
          </Link>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 shadow-md transition-all duration-300">
            Try It Free
          </button>
        </div>
      )}
    </div>
  );
}
