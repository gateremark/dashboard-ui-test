import { LuCopyCheck } from "react-icons/lu";
import Timeline from "./Timeline";

const tags = ["Project", "SpaceX", "Launch", "Falcon", "Multiplanetary"];

const ProjDetails = () => {
  return (
    <div className="flex-1 px-4 max-w-[700px]">
      <div className="flex justify-between items-center pt-8">
        <h2 className="text-xl font-semibold">Project Details</h2>
        <div className="flex items-center gap-2 text-indigo-600 cursor-pointer">
          <LuCopyCheck className="text-lg" />
          <span className="text-sm font-semibold">Copy link</span>
        </div>
      </div>
      <img
        src="https://res.cloudinary.com/dvuazircp/image/upload/v1715841244/Hot-Air-Balloons-in-a-line_vexoje.webp"
        alt=""
        width={500}
        height={150}
        className=" w-[500px] h-[150px] object-cover my-4 rounded-lg"
      />
      <h4 className="text-gray-700">Description</h4>
      <p className="text-gray-700 my-4 text-sm">
        {" "}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
        repudiandae corrupti sapiente repellat veniam! Velit.
      </p>
      <h4 className="text-gray-700">Tags</h4>
      <div className="flex gap-4 my-4 flex-wrap">
        {tags.map((tag) => (
          <span
            key={tag}
            className=" cursor-pointer text-xs font-semibold border px-2 py-1 rounded-lg"
          >
            {tag}
          </span>
        ))}
      </div>
      <h4 className="text-gray-700 mb-4">Timeline</h4>
      <Timeline />
    </div>
  );
};

export default ProjDetails;
