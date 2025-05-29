import { JSX, useState } from "react";
import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { GrTask } from "react-icons/gr";
import { GoInbox } from "react-icons/go";
import { GoGoal } from "react-icons/go";
import { Button } from "./ui/button";
import { IoCalendarOutline } from "react-icons/io5";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { MdOutlineAnalytics } from "react-icons/md";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface Props {
  orgId: string | undefined;
}

const workspaces: string[] = ["Valorant Varsity", "Valorant Academy"];

export default function DashSideBar({ orgId }: Props): JSX.Element {
  const [insightsOpen, setInsightsOpen] = useState<boolean>(true);
  const [insightsArrowVisible, setInsightsArrowVisible] =
    useState<boolean>(false);
  const [workspacesOpen, setWorkspacesOpen] = useState<boolean>(false);
  const [WorkspacesArrowVisible, setWorkspacesArrowVisible] =
    useState<boolean>(false);

  const linkStyle =
    "flex items-center w-full p-3 hover:bg-neutral-700 hover:opacity-80 transition duration-150 rounded-xl";

  return (
    <aside className="border-r border-r-neutral-700 h-full bg-neutral-800 flex flex-col">
      {/* Main Navigation */}
      <nav aria-label="Main Navigation">
        <section className="p-3 border-b border-b-neutral-700">
          <ul className="space-y-1">
            <li>
              <Link className={linkStyle} to={`/${orgId}/dashboard`}>
                <IoHomeOutline className="mr-2" />
                Home
              </Link>
            </li>
            <li>
              <Link className={linkStyle} to={`/${orgId}/tasks`}>
                <GrTask className="mr-1.5" />
                Your Tasks
              </Link>
            </li>
            <li>
              <Link className={linkStyle} to={`/${orgId}/tasks`}>
                <GoInbox className="mr-2" />
                Inbox
              </Link>
            </li>
            <li className="ml-1 mt-2">
              <Button className="border rounded-2xl flex text-md font-light cursor-pointer">
                Create
                <span
                  aria-hidden="true"
                  className="text-lg w-5 h-5 rounded-3xl flex justify-center items-center pb-0.5 bg-blue-500"
                >
                  +
                </span>
              </Button>
            </li>
          </ul>
        </section>
      </nav>

      <Collapsible
        open={insightsOpen}
        onOpenChange={setInsightsOpen}
        className="space-y-2 ml-2 mr-2 mt-2"
      >
        <div className="flex items-center justify-between w-full px-2">
          {/* Left: Arrow + Text */}
          <div
            className="flex items-center"
            onMouseEnter={() => setInsightsArrowVisible(true)}
            onMouseLeave={() => setInsightsArrowVisible(false)}
          >
            <span
              className="text-sm font-semibold flex items-center cursor-pointer"
              onClick={() => setInsightsOpen(!insightsOpen)}
            >
              Organization Insights
              <CollapsibleTrigger asChild>
                {insightsArrowVisible && (
                  <button className="font-bold cursor-pointer">
                    {insightsOpen ? (
                      <MdOutlineKeyboardArrowUp className="text-2xl" />
                    ) : (
                      <MdOutlineKeyboardArrowDown className="text-2xl" />
                    )}
                  </button>
                )}
              </CollapsibleTrigger>
            </span>
          </div>

          {/* Right: + button */}
          <button className="font-bold text-lg pb-1 cursor-pointer">+</button>
        </div>
        <CollapsibleContent className="space-y-2 px-1">
          <section className="">
            <ul className="space-y-1">
              <li>
                <Link className={linkStyle} to={`/${orgId}/tasks`}>
                  <MdOutlineAnalytics className="mr-2" />
                  Analytics
                </Link>
              </li>
              <li>
                <Link className={linkStyle} to={`/${orgId}/tasks`}>
                  <GoGoal className="mr-1.5" />
                  Objectives
                </Link>
              </li>
              <li>
                <Link className={linkStyle} to={`/${orgId}/tasks`}>
                  <IoCalendarOutline className="mr-1.5" />
                  Events
                </Link>
              </li>
            </ul>
          </section>
        </CollapsibleContent>
      </Collapsible>

      <Collapsible
        open={workspacesOpen}
        onOpenChange={setWorkspacesOpen}
        className="space-y-2 ml-2 mr-2 mt-2"
      >
        <div className="flex items-center justify-between w-full px-2">
          {/* Left: Arrow + Text */}
          <div
            className="flex items-center"
            onMouseEnter={() => setWorkspacesArrowVisible(true)}
            onMouseLeave={() => setWorkspacesArrowVisible(false)}
          >
            <span
              className="text-sm font-semibold flex items-center cursor-pointer"
              onClick={() => setWorkspacesOpen(!workspacesOpen)}
            >
              Workspaces
              <CollapsibleTrigger asChild>
                {WorkspacesArrowVisible && (
                  <button className="font-bold cursor-pointer">
                    {workspacesOpen ? (
                      <MdOutlineKeyboardArrowUp className="text-2xl" />
                    ) : (
                      <MdOutlineKeyboardArrowDown className="text-2xl" />
                    )}
                  </button>
                )}
              </CollapsibleTrigger>
            </span>
          </div>

          {/* Right: + button */}
          <button className="font-bold text-lg pb-1 cursor-pointer">+</button>
        </div>
        <CollapsibleContent className="space-y-2 px-1">
          <section className="">
            <ul className="space-y-2">
              {workspaces.map((item, idx) => (
                <li
                  key={idx}
                  className="px-1 py-2 rounded-lg cursor-pointer hover:bg-neutral-700 transition-colors duration-200 flex items-center"
                >
                  <Avatar className="h-7 w-7 rounded-2xl border mr-1.5">
                    <AvatarImage src="https://img.icons8.com/color/512/valorant.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </CollapsibleContent>
      </Collapsible>
    </aside>
  );
}
