import { sidebarData } from "../constants";
import { resourcesData } from "../constants";
import { BsCodeSquare } from "react-icons/bs";
import { SlNotebook } from "react-icons/sl";
import Logo from "../assets/logo";
import SidebarItem from "./SidebarItem";
import { IoClose } from "react-icons/io5";

type Props = {
  isOpen: boolean;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
};

const Sidebar = ({ isOpen, setIsOpen }: Props) => {
  return (
    <div
      className={`flex flex-col gap-6 sm:w-[300px] w-full border-r pb-10 px-6 sm:px-0 custom-scroll
    ${
      isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
    } transition duration-200 ease-in-out h-full bg-white fixed md:static top-0 left-0 z-50 overflow-auto 
    `}
    >
      <div className="flex justify-end pr-3 pt-2 md:hidden">
        <button onClick={() => setIsOpen && setIsOpen(false)}>
          <IoClose className=" text-3xl" />
        </button>
      </div>

      <div className="px-8 md:pt-4">
        <Logo className="" />
      </div>
      <div className="grid grid-cols-1">
        {sidebarData.map((tab) => (
          <SidebarItem key={tab.id} tab={tab} />
        ))}
      </div>
      <hr />
      <div className="w-full">
        <h1 className="text-sm font-medium px-7 pb-4 text-gray-500 uppercase">
          Resources
        </h1>
        <div className="flex flex-col gap-5 px-3 w-full">
          {resourcesData.map((resource) => (
            <div className="flex gap-5 items-center cursor-pointer w-full hover:text-slate-900 hover:font-medium transition duration-200 ease-in-out relative">
              {resource.title === "Documentation" ? (
                <BsCodeSquare className="text-lg" />
              ) : (
                <SlNotebook className="text-lg" />
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
                <span className="text-xs flex items-center w-fit justify-center font-semibold text-teal-600 lowercase absolute left-[180px] bg-teal-200 px-1.5 py-1 rounded-lg">
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
