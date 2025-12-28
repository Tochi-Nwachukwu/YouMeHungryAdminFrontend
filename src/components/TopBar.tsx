import { RiMenuLine } from "react-icons/ri";
import notification from "../assets/notification.png";
import { IoSearchOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

interface TopBarProps {
  onMenuClick: () => void;
}

export default function TopBar({ onMenuClick }: TopBarProps) {
  return (
    <div className="bg-white py-3 lg:px-6 px-4 flex items-center justify-between">
      <div className="lg:w-142 w-52 lg:h-13.75 h-10 text-sm lg:text-base relative">
        <input
          className="w-full h-full bg-[#F6F7F8] rounded-lg px-12 outline-none"
          type="text"
          placeholder="Search for Dashboard & Analytics"
        />
        <div className="absolute text-[#454545] lg:left-5 left-2 top-1/2 -translate-y-1/2">
          <IoSearchOutline />
        </div>
      </div>

      <div className="flex items-center lg:gap-5 gap-6">
        <NavLink to="/notifications">
          <div className="lg:w-9.5 w-7 lg:h-9.5 h-7 relative">
            <img
              className="w-full h-full object-contain"
              src={notification}
              alt="notification"
            />
            <div className="bg-[#EC2D30] px-2 py-px lg:-top-1 -top-2 -right-3 text-white lg:text-sm text-xs rounded-[10px] text-center absolute">
              <p>99</p>
            </div>
          </div>
        </NavLink>

        <div className="flex items-center gap-2">
          <p className="hidden lg:block text-[#454545] text-xl font-semibold leading-[100%]">
            McDonalds Restaurant
          </p>

          <div className="lg:w-9.5 w-7 lg:h-9.5 h-7 rounded-full overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="https://res.cloudinary.com/dadzpobvz/image/upload/v1766762647/ctxasnaiimiwp1hkrttl.png"
              alt="profile"
            />
          </div>

          <button onClick={onMenuClick} className="ml-5 text-2xl lg:hidden">
            <RiMenuLine />
          </button>
        </div>
      </div>
    </div>
  );
}
