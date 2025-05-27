import { JSX } from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export default function NavBar(): JSX.Element {
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
          <Button
            asChild
            variant="outline"
            className="border border-gray-400 text-gray-800 hover:bg-gray-100 transition duration-300"
          >
            <Link to="/login">Log In</Link>
          </Button>
          <Button
            asChild
            className="bg-blue-600 hover:bg-blue-500 text-white transition duration-300"
          >
            <Link to="/demo">Demo</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
