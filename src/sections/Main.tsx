import Sidebar from "../components/Sidebar";
import MainBar from "../components/MainBar";

export default function Main() {
    return (
        <main className="max-w-7xl mx-auto text-slate-900 h-screen flex">
            <Sidebar />
            <MainBar />
        </main>
    );
}
