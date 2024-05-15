import { useState } from "react";
import { sidebarData } from "../constants";
import { resourcesData } from "../constants";
import { motion, AnimatePresence } from "framer-motion";
import { FaAngleRight } from "react-icons/fa6";
import { BsBriefcase } from "react-icons/bs";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaRegFileAlt } from "react-icons/fa";
import { GoTerminal } from "react-icons/go";
import { HiOutlineCog6Tooth } from "react-icons/hi2";
import { BsCodeSquare } from "react-icons/bs";
import { SlNotebook } from "react-icons/sl";
import Logo from "../assets/logo";

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState<number | null>(0);
  return (
    <div className="flex flex-col gap-6 w-80 h-screen scrollbar-hidden pb-20">
      <div className="px-8">
        <Logo className="" />
      </div>
      <div className="grid grid-cols-1 md:px-5">
        {sidebarData.map((tab) => (
          <motion.div
            key={tab.id}
            className="flex flex-col justify-center gap-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div
              className={` flex items-center justify-between cursor-pointer rounded-lg p-3 hover:bg-[#F3FAFC] ${
                activeTab === tab.id && "bg-[#F3FAFC]"
              } transition duration-200 ease-in-out`}
              onClick={() =>
                activeTab === tab.id ? setActiveTab(null) : setActiveTab(tab.id)
              }
            >
              <span className=" flex items-center justify-center gap-5">
                <div className="text-lg">
                  {tab.title === "Projects" ? (
                    <BsBriefcase />
                  ) : tab.title === "Tasks" ? (
                    <LuLayoutDashboard />
                  ) : tab.title === "Files" ? (
                    <FaRegFileAlt />
                  ) : tab.title === "Integrations" ? (
                    <GoTerminal />
                  ) : (
                    <HiOutlineCog6Tooth />
                  )}{" "}
                </div>
                <h1
                  className={`text-lg font-medium ${
                    activeTab === tab.id && "font-semibold"
                  } `}
                >
                  {tab.title}
                </h1>
              </span>
              <motion.div
                animate={{
                  rotate: activeTab === tab.id ? 90 : 0,
                }}
                transition={{ duration: 0.5 }}
              >
                <FaAngleRight className="md:text-2xl text-xl" />
              </motion.div>
            </div>
            <AnimatePresence>
              {activeTab === tab.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex flex-col px-12 gap-2 pb-5">
                    {tab.sections.map((section) => (
                      <span
                        key={section}
                        className=" cursor-pointer hover:text-slate-900 hover:font-medium transition duration-200 ease-in-out"
                      >
                        {section}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
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
