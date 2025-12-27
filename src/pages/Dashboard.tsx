import { RxDashboard } from "react-icons/rx";
import logo from "../assets/logo.png";

export default function Dashboard() {
  return (
    <section className="flex flex-row min-h-screen">
      <div className="w-58 bg-accent text-white">
        <div className="p-6">
          <div className="w-32.75 h-6.75">
            <img src={logo} alt="logo" />
          </div>
        </div>
        <div className="mt-7.25 border w-[80%]">
          <button className="font-semibold flex items-center gap-2 bg-[#f3ad3d59] py-1.75 px-3">
            <RxDashboard size={16} />
            <p>Dashboard & Analytics</p>
          </button>
        </div>
      </div>
      <div className="flex-1">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, sit?
      </div>
    </section>
  );
}
