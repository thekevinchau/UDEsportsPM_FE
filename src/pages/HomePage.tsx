
import NavBar from "@/components/NavBar";
import { JSX } from "react";
import { Button } from "@/components/ui/button"; // Assuming shadcn/ui or similar
import { Link } from "react-router-dom";

export default function HomePage(): JSX.Element {

  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      <NavBar />
      <main className="flex-grow flex items-center justify-center px-6 lg:px-16">
        <div className="max-w-4xl text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight">
            Powerful <span className="text-blue-500">eSports Management</span> Software
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Drive competition, track results, and unlock deep insights — all from a single, powerful platform built for collegiate teams and esports organizations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Link to="/register" className="px-6 py-1 text-lg text-white bg-blue-600 hover:text-blue-500 hover:bg-white hover:text-black hover:border border-blue-500  transition duration-300 rounded-sm font-semibold">Get Started</Link>
            <Link to="/pricing" className="px-6 py-1 flex justify-center items-center text-lg border border-blue-500 rounded-sm font-bold text-blue-500 hover:bg-blue-500 hover:text-white transition duration-300 w-1/6">Explore</Link>
          </div>
        </div>
      </main>
    </div>
  );
}
