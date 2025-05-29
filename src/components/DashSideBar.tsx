import { JSX } from "react";
import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { GrTask } from "react-icons/gr";
import { GoInbox } from "react-icons/go";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"


interface props {
  orgId: string | undefined;
}

export default function DashSideBar({ orgId }: props): JSX.Element {
    const linkStyle: string = "flex items-center w-full p-3 hover:bg-neutral-700 hover:opacity-80 transition duration-150 rounded-xl";
  return (
    <div className="border-r-1 border-r-neutral-700 h-full bg-neutral-800 w-1/8 flex flex-col">
      <div className="p-3">
        <Link
          className={linkStyle}
          to={`/${orgId}/tasks`}
        >
          <IoHomeOutline className="mr-2" />
          Home
        </Link>
        <Link
          className={linkStyle}
          to={`/${orgId}/tasks`}
        >
          <GrTask className="mr-1.5" />
          Your Tasks
        </Link>
        <Link
          className={linkStyle}
          to={`/${orgId}/tasks`}
        >
          <GoInbox className="mr-2" />
          Inbox
        </Link>
      </div>
    </div>
  );
}
