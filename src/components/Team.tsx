import { teamData } from "../constants";

const Team = () => {
  return (
    <div className=" my-6 px-4 py-6 flex flex-col gap-3 shadow-md bg-white rounded-xl">
      <h2 className="text-xl font-semibold">Team</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="flex items-center gap-4 cursor-pointer">
          <span className=" text-2xl w-[50px] h-[50px] p-2 rounded-full border-2 border-dashed text-gray-500 flex justify-center items-center">
            +
          </span>
          <span className="text-gray-500"> Add member</span>
        </div>
        {teamData.map((member) => (
          <div key={member.id} className="flex items-center gap-4">
            <img
              src={member.imageUrl}
              alt={member.name}
              width={40}
              height={40}
              className=" w-[50px] h-[50px] rounded-full"
            />
            <div className="flex flex-col text-sm font-medium">
              <span>{member.name}</span>
              <span className="text-gray-500">{member.role}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
