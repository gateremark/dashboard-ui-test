import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaAngleRight } from "react-icons/fa6";
import { BsBriefcase } from "react-icons/bs";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaRegFileAlt } from "react-icons/fa";
import { GoTerminal } from "react-icons/go";
import { HiOutlineCog6Tooth } from "react-icons/hi2";

type Props = {
  tab: {
    id: number;
    title: string;
    sections: string[];
  };
};

const SidebarItem = ({ tab }: Props) => {
  const [activeTab, setActiveTab] = useState<number | null>(0);
  return (
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
  );
};

export default SidebarItem;
