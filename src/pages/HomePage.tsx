//Powerful eSports Management Software That Drives competition, results, and insights.

import HomeBody from "@/components/HomeBody";
import NavBar from "@/components/NavBar";
import { JSX } from "react";

export default function HomePage(): JSX.Element {

  return (
    <div className="h-screen">
      <NavBar />
      <HomeBody/>
      
    </div>
  );
}
