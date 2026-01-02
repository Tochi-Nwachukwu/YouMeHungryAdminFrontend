import { NavLink } from "react-router-dom";
import dashboard from "../assets/dashboard.png";
import menu from "../assets/menu.png";
import orders from "../assets/orders.png";
import discount from "../assets/discount.png";
import wallet from "../assets/wallet.png";
import dispute from "../assets/dispute.png";
import setting from "../assets/setting.png";
import logoutIcon from "../assets/logout.png";

interface SideBarProps {
  logout?: () => void;
  onNavigate?: () => void;
}

export default function SideBar({ onNavigate, logout }: SideBarProps) {
  const links = [
    {
      id: 0,
      name: "dashboard",
      link: "/dashboard",
      icon: dashboard,
    },
    {
      id: 1,
      name: "menu",
      link: "/menu",
      icon: menu,
    },
    {
      id: 2,
      name: "orders",
      link: "/orders",
      icon: orders,
    },
    {
      id: 3,
      name: "discounts & promos",
      link: "/discounts-promos",
      icon: discount,
    },
    {
      id: 4,
      name: "wallet & earnings",
      link: "/wallet-earnings",
      icon: wallet,
    },
    {
      id: 5,
      name: "dispute resolution",
      link: "/dispute-resolution",
      icon: dispute,
    },
    {
      id: 6,
      name: "profile & settings",
      link: "/profile-settings",
      icon: setting,
    },
  ];

  return (
    <div>
      <div className="w-full grid gap-3.75">
        {links.slice(0, 6).map((link) => (
          <NavLink
            key={link.id}
            to={link.link}
            onClick={onNavigate}
            className={({ isActive }) =>
              `flex items-center gap-2 rounded-r-lg capitalize py-1.75 px-5 h-13.25 relative w-full cursor-pointer
            hover:bg-[#f3ad3d31]
            ${isActive ? "bg-[#f3ad3d59] font-semibold" : ""}`
            }
          >
            {({ isActive }) => (
              <>
                <div className="w-5 h-5">
                  <img
                    className="w-full h-full object-contain"
                    src={link.icon}
                    alt={link.name}
                  />
                </div>

                <p>{link.name}</p>

                {isActive && (
                  <div className="absolute left-0 top-0 bottom-0 w-2 bg-primary" />
                )}
              </>
            )}
          </NavLink>
        ))}
      </div>
      <div className="w-full grid gap-3.75 mt-15.5">
        <p className="px-6 text-sm text-primary font-semibold">Other Menu</p>
        {links.slice(6, 7).map((link) => (
          <NavLink
            key={link.id}
            to={link.link}
            onClick={onNavigate}
            className={({ isActive }) =>
              `flex items-center gap-2 rounded-r-lg capitalize py-1.75 px-5 h-13.25 relative w-full cursor-pointer hover:bg-[#f3ad3d31] ${
                isActive ? "bg-[#f3ad3d59] font-semibold" : ""
              }`
            }
          >
            {({ isActive }) => (
              <>
                <div className="w-5 h-5">
                  <img
                    className="w-full h-full object-contain"
                    src={link.icon}
                    alt={link.name}
                  />
                </div>

                <p>{link.name}</p>

                {isActive && (
                  <div className="absolute left-0 top-0 bottom-0 w-2 bg-primary" />
                )}
              </>
            )}
          </NavLink>
        ))}
        <button
          onClick={logout}
          className="flex items-center gap-2 rounded-r-lg capitalize py-1.75 px-5 h-13.25 relative w-full cursor-pointer hover:bg-[#f3ad3d31]"
        >
          <div className="w-5 h-5">
            <img
              className="w-full h-full object-contain"
              src={logoutIcon}
              alt="logout"
            />
          </div>
          <p>Log Out</p>
        </button>
      </div>
    </div>
  );
}
