import { JSX } from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export default function NavBar(): JSX.Element {
  return (
    <header className="fixed top-0 z-50 w-full backdrop-blur-md bg-black/70 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-white">
        {/* Logo */}
        <div className="text-xl font-bold tracking-tight">
          <Link to="/" className="hover:opacity-90 transition">
            Roster<span className="text-blue-500">U</span>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex gap-8 text-sm font-medium items-center">
          <Link to="/features" className="hover:text-blue-400 transition">
            Features
          </Link>
          <Link to="/pricing" className="hover:text-blue-400 transition">
            Pricing
          </Link>
          <Link to="/contact" className="hover:text-blue-400 transition">
            Contact
          </Link>
        </nav>

        {/* CTA Buttons */}
        <div className="flex gap-3">
          <Button
            asChild
            variant="outline"
            className="border-gray-500 text-white hover:bg-white hover:text-black transition duration-300 cursor-pointer"
          >
            <Link to="/login"> Log In</Link>
          </Button>
          <Button
            asChild
            className="bg-blue-600 hover:bg-blue-500 text-white transition"
          >
            <Link to="/demo">Demo</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
