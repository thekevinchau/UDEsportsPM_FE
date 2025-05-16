import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f10] to-[#1a1a1d] flex flex-col items-center justify-center px-6 py-12">
      {/* Giant Broken Number */}
      <div className="text-[10rem] sm:text-[12rem] font-extrabold text-blue-500 leading-none drop-shadow-md">
        404
      </div>

      {/* Quirky Tagline */}
      <h2 className="text-2xl sm:text-3xl font-semibold text-gray-200 mt-4">
        Uh-oh! Page got benched.
      </h2>

      {/* Explanation */}
      <p className="text-gray-400 text-center max-w-md mt-3 mb-8">
        Looks like this page missed the queue — maybe it's practicing elsewhere. 
        Let's sub you back into the action!
      </p>

      {/* Button */}
      <Link to="/">
        <Button className="bg-blue-500 text-white px-6 py-2 hover:scale-105 transition-transform cursor-pointer">
          Return to Home
        </Button>
      </Link>

      {/* Easter Egg Style Message */}
      <p className="text-xs text-gray-400 mt-6 italic">
        (Psst... if you find the page hiding somewhere, let us know!)
      </p>
    </div>
  );
}
