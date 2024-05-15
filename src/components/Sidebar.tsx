import { useState } from "react";
import { sidebarData } from "../constants";
import { resourcesData } from "../constants";
import { BsCodeSquare } from "react-icons/bs";
import { SlNotebook } from "react-icons/sl";
import Logo from "../assets/logo";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState<number | null>(0);
  return (
    <div className="flex flex-col gap-6 w-80 h-screen shadow">
      <div className="px-8">
        <Logo className="" />
      </div>
      <div className="grid grid-cols-1">
        {sidebarData.map((tab) => (
          <SidebarItem
            key={tab.id}
            tab={tab}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        ))}
      </div>
      <hr />
      <div className="">
        <h1 className="text-sm font-medium px-7 pb-4 text-gray-500 uppercase">
          Resources
        </h1>
        <div className="flex flex-col gap-5 px-8">
          {resourcesData.map((resource) => (
            <div className="flex gap-5 items-center cursor-pointer hover:text-slate-900 hover:font-medium transition duration-200 ease-in-out relative">
              {resource.title === "Documentation" ? (
                <BsCodeSquare className="text-xl" />
              ) : (
                <SlNotebook className="text-xl" />
              )}
              <a
                key={resource.id}
                href={resource.url}
                target="_blank"
                className="font-medium hover:text-blue-900 transition duration-200 ease-in-out"
              >
                {resource.title}
              </a>
              {resource.new && (
                <span className="text-xs font-semibold text-teal-600 lowercase absolute right-0 bg-teal-200 px-1.5 py-1 rounded-lg">
                  New
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
