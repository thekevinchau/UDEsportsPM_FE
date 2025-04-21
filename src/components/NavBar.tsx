import { JSX } from "react";
import { Button } from "./ui/button";

export default function NavBar(): JSX.Element {
  return (
    <div className="bg-white w-screen h-36 flex justify-evenly items-center px-6 shadow">
      <div className="h-full w-screen flex items-center">
        <img
          src="src/assets/rosterU-no-slogan.png"
          className="w-2/5 object-contain h-full"
          alt="RosterU Logo"
        />
      </div>

      {/* Right side of navbar */}
      <div className="flex justify-evenly items-center w-3/4">
        <p>Features</p>
        <p>Pricing</p>
        <p>Contact</p>

        <div className="text-white">
          <Button className="mr-3 bg-white text-black border border-orange-500">Log In</Button>
          <Button className="text-black bg-orange-400">Demo</Button>
        </div>
      </div>
    </div>
  );
}
