import { JSX } from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export default function NavBar(): JSX.Element {
  return (
    <div className="bg-gray-200 w-screen h-20 flex justify-evenly items-center px-6 shadow pl-40 pr-40">
      <div className="h-full w-screen pl-20 flex items-center">
        {/*}
        <img
          src="src/assets/rosterU-no-slogan.png"
          className="max-w-1/5 object-contain min-h-4/5 max-h-1/4"
          alt="RosterU Logo"
        />
        {*/}
        <h1 className="text-orange-400 text-3xl">RosterU</h1>
      </div>

      {/* Right side of navbar */}
      <div className="flex items-center w-3/4 text-2xl h-full">
        <Link to="/features" className="border h-full w-1/6 text-center">
          Features
        </Link>
        <Link to="/pricing" className="border h-full w-1/6 text-center">
          Pricing
        </Link>
        <Link to="/contact" className="border h-full w-1/6 text-center">
          Contact
        </Link>

        <div className="text-white">
          <Button className="mr-3 bg-white text-black border border-orange-500">
            Log In
          </Button>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full shadow-md transition-all duration-300">
  Try It Free
</button>
        </div>
      </div>
    </div>
  );
}
