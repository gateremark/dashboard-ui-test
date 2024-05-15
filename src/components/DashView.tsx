import { useState } from "react";
import Team from "./Team";

const titles = ["View all", "Most recent", "Popular"];

const DashView = () => {
  const [active, setActive] = useState("View all");
  return (
    <div className="bg-[#F3FAFC] px-6 lg:w-[700px]">
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
        <h2 className="text-xl font-medium">Mission</h2>
        <p className=" text-gray-700">
          There are many variations of paasages of Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Cumque quos, inventore nam veritatis
          consectetur harum culpa! Sapiente alias nostrum repellendus.
          Voluptates, reprehenderit!
        </p>
      </div>
      <Team />
    </div>
  );
};

export default DashView;
