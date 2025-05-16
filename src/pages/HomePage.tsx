
import NavBar from "@/components/NavBar";
import { JSX } from "react";
import { Button } from "@/components/ui/button"; // Assuming shadcn/ui or similar
import { Link } from "react-router-dom";

export default function HomePage(): JSX.Element {

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#0f0f10] to-[#1a1a1d] text-white">
      <NavBar />
      <main className="flex-grow flex items-center justify-center px-6 lg:px-16">
        <div className="max-w-4xl text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight">
            Powerful <span className="text-blue-500">eSports Management</span> Software
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            Drive competition, track results, and unlock deep insights — all from a single, powerful platform built for collegiate teams and esports organizations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Button className="px-6 py-3 text-lg bg-blue-600 hover:bg-blue-500 transition">
              Get Started
            </Button>
            <Link to="/demo" className="px-6 py-1 flex items-center text-lg border border-gray-200 rounded-sm text-white hover:bg-white hover:text-black transition duration-300">Book A Demo</Link>
          </div>
        </div>
      </main>
    </div>
  );
}
