import { JSX } from "react";
import { MdLogout } from "react-icons/md";
import { Button } from "./ui/button";
import { Link, useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { BsMailbox } from "react-icons/bs";
import { MdTaskAlt } from "react-icons/md";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { GoGear } from "react-icons/go";
import { IoPeopleOutline } from "react-icons/io5";
import { IoCreateOutline } from "react-icons/io5";


const organizations = ["University of Delaware", "Chimp Club Esports"];

interface props {
  logout: () => void;
}

export default function NavBarDropDown({ logout }: props): JSX.Element {
  const navigate = useNavigate();
  return (
    <div className="w-96 h-80 fixed top-20 right-55 rounded-2xl shadow-2xl flex overflow-hidden border border-gray-200 bg-white">
      {/* Left Panel */}
      <div className="w-1/2 h-full bg-blue-50 flex flex-col justify-between">
        {/* Top Section */}
        <div className="p-4">
          <h1 className="font-semibold text-gray-800 mb-4 text-lg">
            Organizations
          </h1>
          <ul className="space-y-2">
            {organizations.map((item, idx) => (
              <li
                key={idx}
                className="flex items-center gap-2 px-2 py-2 rounded-md hover:bg-violet-100 transition cursor-pointer"
              >
                <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center text-xs text-white font-bold">
                  {item.charAt(0)}
                </div>
                <span className="text-sm font-medium text-gray-700">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Logout */}
        <button
          className="flex items-center gap-2 text-sm text-red-600 hover:bg-red-50 px-4 py-3 transition border-t border-gray-200 cursor-pointer"
          onClick={logout}
        >
          <MdLogout className="text-lg" />
          Log out
        </button>
      </div>

      {/* Right Panel (optional for extra content or illustration) */}
      <div className="w-1/2 h-full bg-white flex-col justify-center">
        <div className="border-b-1 border-b-gray-200 h-1/4 w-full flex items-center justify-evenly cursor-pointer">
          {" "}
          <Button className="w-11 h-11 rounded-full bg-blue-500 text-white text-xs flex items-center justify-center cursor-pointer">
            KC
          </Button>
          <div className="pr-5">
            <h1 className="font-semibold">Kevin Chau</h1>
            <p className="text-xs text-gray-500">kevinch@udel.edu</p>
          </div>
        </div>

        <div className="text-md flex-col h-1/2 justify-evenly mt-1 border-b-1 border-gray-200">
          <Link
            to="/profile"
            className="pl-3 pr-2 flex items-center w-full h-1/4 hover:bg-gray-100 transition duration-200 rounded-sm text-md"
          >
            {" "}
            <CgProfile className="mr-1.5" />
            Profile
          </Link>
          <Link
            to="/inbox"
            className="pl-3 pr-2 flex items-center w-full h-1/4 hover:bg-gray-100 transition duration-200 rounded-sm text-md"
          >
            <BsMailbox className="mr-1.5" />
            Inbox
          </Link>
          <Link
            to="/tasks"
            className="pl-3 pr-2 flex items-center w-full h-1/4 hover:bg-gray-100 transition duration-200 rounded-sm text-md"
          >
            <MdTaskAlt className="mr-1.5" /> My Tasks
          </Link>
          <Link
            to="/settings"
            className="pl-3 pr-2 flex items-center w-full h-1/4 hover:bg-gray-100 transition duration-200 rounded-sm text-md"
          >
            <GoGear className="mr-1.5" /> Settings
          </Link>
        </div>
        {/*Help Stuff */}
        <div className="flex flex-col mt-1 h-3/5">
          <Link
            to="/tasks"
            className="pl-3 pr-2 flex items-center w-full h-1/6 hover:bg-gray-100 transition duration-200 rounded-sm text-md"
          >
            <IoCreateOutline className="mr-1.5" /> Create Organization
          </Link>
          <Link
            to="/tasks"
            className="pl-3 pr-2 flex items-center w-full h-1/6 hover:bg-gray-100 transition duration-200 rounded-sm text-md"
          >
            <IoPeopleOutline className="mr-1.5" /> Join Organization
          </Link>
        </div>
      </div>
    </div>
  );
}
