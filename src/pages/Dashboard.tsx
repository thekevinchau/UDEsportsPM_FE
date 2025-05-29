import DashSideBar from "@/components/DashSideBar";
import NavBar from "@/components/NavBar";
import DashNavBar from "@/components/DashNavBar";
import { JSX, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

export default function Dashboard(): JSX.Element {
  const { id } = useParams();
  return (
    <div className="flex flex-col h-screen bg-neutral-900 text-white">
      <DashNavBar />
      <div className="flex h-full">
        <DashSideBar orgId={id} />
        Dashboard {id}
      </div>
      <div className="fixed bottom-0 left-0 w-full h-1 bg-red-500 z-50" />
    </div>
  );
}
