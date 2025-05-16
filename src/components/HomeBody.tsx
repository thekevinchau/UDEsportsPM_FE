import { JSX, useEffect, useState } from "react";

const bodyText = ["Competition", "Results", "Insights"];

export default function HomeBody(): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fade out
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % bodyText.length);
        setFade(true); // Fade in after change
      }, 500); // Time to fade out
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-4/5 bg-orange-200 text-gray-900 flex flex-col justify-center items-center px-10 relative overflow-hidden">
      {/* Gradient orange shape */}
      <div className="absolute -right-40 top-0 h-[150%] w-[60%] bg-gradient-to-br from-orange-400 via-orange-500 to-red-500 rounded-full mix-blend-multiply blur-3xl opacity-30 pointer-events-none"></div>
      

      {/* Text Content */}
      <div className="max-w-7xl z-10 mt-10">
        <h1 className="text-7xl font-bold leading-tight">
          Powerful eSports <br />
          Management Software <br />
          That Drives{" "}
          <span
            key={currentIndex}
            className={`text-7xl font-bold bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent transition-opacity duration-500 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          >
            {bodyText[currentIndex]}
          </span>
        </h1>
        <p className="mt-6 text-2xl text-gray-700 max-w-1/2">
          Organize tournaments, track team stats, and streamline your
          operations. Empower your team and dominate the digital arena with
          {"  "}
          <b>RosterU</b>.
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition duration-300 mt-5">
          Book a Demo
        </button>
      </div>
    </div>
  );
}
