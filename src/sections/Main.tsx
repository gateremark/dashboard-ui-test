import Sidebar from "../components/Sidebar";
import MainBar from "../components/MainBar";

export default function Main() {
  return (
    <main className="max-w-7xl mx-auto text-slate-900 h-full flex pb-20">
      <Sidebar />
      <MainBar />
    </main>
  );
}
