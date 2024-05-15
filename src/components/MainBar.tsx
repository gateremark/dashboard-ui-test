import Header from "./Header";
import DashView from "./DashView";
import ProjDetails from "./ProjDetails";

const MainBar = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex">
        <DashView />
        <ProjDetails />
      </div>
    </div>
  );
};

export default MainBar;
