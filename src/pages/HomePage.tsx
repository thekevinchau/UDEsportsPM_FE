//Powerful eSports Management Software That Drives competition, results, and insights.

import NavBar from "@/components/NavBar";
import { JSX } from "react";

export default function HomePage(): JSX.Element {
  return (
    <div className="h-screen">
      <NavBar />
      <div id="body" className="h-4/5 border bg-orange-400">
        <div>Powerful eSports Management Software That Drives</div>
      </div>
    </div>
  );
}
