import Header from "./Header";
import DashView from "./DashView";
import ProjDetails from "./ProjDetails";

const MainBar = () => {
  return (
    <div className="flex flex-col w-full">
      <Header />
      <div className="flex flex-wrap">
        <DashView />
        <ProjDetails />
      </div>
    </div>
  );
};

export default MainBar;
