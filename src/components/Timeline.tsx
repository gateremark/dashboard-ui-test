const timelineData = [
  { id: 0, title: "Prepare for launch", description: "1 week ago" },
  { id: 1, title: "Make the final tests", description: "1 week ago" },
  { id: 2, title: "Prepare the documentation", description: "1 week ago" },
];
export default function Timeline() {
  return (
    <div className="container mx-auto p-5">
      <div className="flex flex-col w-full gap-8">
        {timelineData.map((item, index) => (
          <div key={index} className="flex items-start gap-4 relative">
            <div
              className={`w-4 h-4  ${
                item.id % 2 !== 0 ? "bg-pink-500" : "bg-green-500"
              } rounded-full flex items-center justify-center mt-1.5`}
            ></div>
            <div className="border h-[70px] absolute left-[7px] -z-10 top-4"></div>
            <div className="flex flex-col">
              <span className=" font-medium">{item.title}</span>
              <span className="text-sm text-gray-500">{item.description}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
