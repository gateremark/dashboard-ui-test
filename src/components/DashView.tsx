import { useState } from "react";
import Team from "./Team";

const titles = ["View all", "Most recent", "Popular"];

const DashView = () => {
  const [active, setActive] = useState("View all");
  return (
    <div className="bg-[#F3FAFC] px-6 max-w-[700px] border-r">
      <h1 className=" text-3xl font-semibold py-8">
        Launch Clever dashboard theme
      </h1>
      <div className="flex  border-b gap-6 font-medium text-gray-500">
        {titles.map((title) => (
          <span
            key={title}
            onClick={() => setActive(title)}
            className={` cursor-pointer hover:border-b-2 hover:text-indigo-800 hover:border-indigo-800 pb-4 ${
              active === title && "border-b-2 border-indigo-800 text-indigo-800"
            }`}
          >
            {title}
          </span>
        ))}
      </div>
      <div className=" my-6 px-4 py-6 flex flex-col gap-3 shadow-md bg-white rounded-xl">
        <h2 className="text-xl font-semibold">Mission</h2>
        <p className=" text-gray-700">
          There are many variations of paasages of Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Cumque quos, inventore nam veritatis
          consectetur harum culpa! Sapiente alias nostrum repellendus.
          Voluptates, reprehenderit isn't anything hidden in the middle of text.
        </p>
      </div>
      <Team />
      <div className=" mt-6 px-4 pt-6 flex flex-col gap-3 shadow-md bg-white rounded-t-xl h-[101px]">
        <h2 className="text-xl font-semibold">Files</h2>
        <div className="flex justify-center gap-6">
          <div className="w-1/2 h-10 border-t-2 border-x-2 rounded-md border-dashed"></div>
          <div className="w-1/2 h-10 border-t-2 border-x-2 rounded-md border-dashed"></div>
        </div>
      </div>
    </div>
  );
};

export default DashView;
