import { JSX } from "react";
import { MdLogout } from "react-icons/md";

const organizations = ["University of Delaware", "Chimp Club Esports"];

interface props {
    logout: () => void;
}

export default function NavBarDropDown({logout}: props): JSX.Element {
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
                <span className="text-sm font-medium text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Logout */}
        <button className="flex items-center gap-2 text-sm text-red-600 hover:bg-red-50 px-4 py-3 transition border-t border-gray-200" onClick={logout}>
          <MdLogout className="text-lg" />
          Log out
        </button>
      </div>

      {/* Right Panel (optional for extra content or illustration) */}
      <div className="w-1/3 h-full bg-white flex items-center justify-center">
        {/* Add illustration or tagline here */}
        <span className="text-sm text-gray-400 italic">Team Tools</span>
      </div>
    </div>
  );
}
