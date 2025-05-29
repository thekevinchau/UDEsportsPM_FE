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
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel minSize={3} maxSize={20} defaultSize={15}>
            <DashSideBar orgId={id} />
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={85}>Dashboard {id}</ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
}
