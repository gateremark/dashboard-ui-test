import { LuCopyCheck } from "react-icons/lu";

const ProjDetails = () => {
  return (
    <div className="flex-1 px-4">
      <div className="flex justify-between items-center pt-8">
        <h2 className="text-xl font-semibold">Project Details</h2>
        <div className="flex items-center gap-2 text-indigo-600">
          <LuCopyCheck className="text-lg" />
          <span className="text-sm font-semibold">Copy link</span>
        </div>
      </div>
    </div>
  );
};

export default ProjDetails;
