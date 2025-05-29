import { JSX, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { RxHamburgerMenu } from "react-icons/rx";
import { Button } from "./ui/button";
import { FiSearch, FiX } from "react-icons/fi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useAppDispatch } from "@/redux/hooks";
import { logout } from "@/redux/authSlice";
import { Input } from "./ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function DashNavBar(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const [search, setSearch] = useState("");

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
    setShowDropdown(false);
  };

  return (
    <div className="w-full h-14 border-b border-neutral-700 bg-neutral-800 flex items-center justify-between px-1 sm:px-2 md:px-5">
      {/* Left Side - Hamburger + Logo */}
      <div className="flex items-center gap-x-3">
        <Button variant="ghost" size="icon" className="text-white">
          <RxHamburgerMenu className="h-5 w-5" />
        </Button>
        <Link
          to="/"
          className="text-lg sm:text-xl font-bold tracking-tight text-white cursor-pointer"
        >
          Roster<span className="text-blue-600">U</span>
        </Link>
      </div>

      <div className="relative w-1/3">
        <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />

        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search"
          className="pl-10 pr-10 text-white rounded-3xl bg-transparent border border-gray-500"
        />

        {search && (
          <button
            onClick={() => setSearch("")}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
          >
            <FiX />
          </button>
        )}
      </div>

      {/* Right Side - Avatar + Dropdown Icon */}
      <div className="flex items-center gap-x-2">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className="text-gray-400 border w-8 h-8 rounded-3xl cursor-pointer hover:text-white transition duration-200 mr-1">?</TooltipTrigger>
            <TooltipContent className="">
              <p className="text-white">Help with RosterU</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <div className="cursor-pointer flex items-center">
          <Avatar className="h-8 w-8">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <MdOutlineKeyboardArrowDown className="text-white text-2xl" />
        </div>
      </div>
    </div>
  );
}
