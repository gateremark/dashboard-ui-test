import { useState } from "react";
import Sidebar from "../components/Sidebar";
import MainBar from "../components/MainBar";
import { IoMenu } from "react-icons/io5";

export default function Main() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main className="max-w-7xl mx-auto text-slate-900 h-full flex relative">
      {!isOpen && (
        <div className="absolute top-2 left-2 z-50 lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="">
            <IoMenu className=" text-3xl" />
          </button>
        </div>
      )}

      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <MainBar />
    </main>
  );
}
