import { IoMdSearch, IoMdNotifications } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  const alphaCards = [
    {
      id: 0,
      value: "c",
      color: "text-pink-500",
      bgColor: "bg-pink-100",
    },
    {
      id: 1,
      value: "d",
      color: "text-indigo-800",
      bgColor: "bg-indigo-100",
    },
    {
      id: 2,
      value: "a",
      color: "text-orange-500",
      bgColor: "bg-orange-100",
    },
    {
      id: 3,
      value: "+",
      color: "",
      bgColor: "",
    },
  ];
  return (
    <div className="pt-10 pb-4 px-6 w-full shadow-sm z-40">
      <div className="flex items-center justify-between w-full">
        <div className="flex gap-3">
          {alphaCards.map((card) => (
            <div
              key={card.id}
              className={`flex items-center justify-center w-9 h-9 rounded-md uppercase cursor-pointer ${
                card.color
              } ${card.bgColor} ${
                card.id === alphaCards.length - 1
                  ? " text-2xl border"
                  : "font-semibold"
              } text-lg`}
            >
              {card.value}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center gap-2 text-gray-500">
            <IoMdSearch className="text-2xl" />
            <input
              type="text"
              name="search"
              placeholder="Search"
              className=" font-medium text-lg p-2 rounded-xl w-60 focus:outline-slate-600"
            />
            <IoMdNotifications className="text-2xl" />
          </div>

          <div className="flex items-center gap-2">
            <img
              src="https://randomuser.me/api/portraits/women/24.jpg"
              alt="user"
              width={40}
              height={40}
              className=" w-10 h-10 rounded-full"
            />
            <span className=" font-medium">Tahlia</span>
            <IoIosArrowDown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
