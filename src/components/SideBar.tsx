import { NavLink } from "react-router-dom";
import dashboard from "../assets/dashboard.png";
import discount from "../assets/discount.png";
import wallet from "../assets/wallet.png";
import dispute from "../assets/dispute.png";
import setting from "../assets/setting.png";
import contents from "../assets/contents.png";
import drivers from "../assets/drivers.png";
import fulfilment from "../assets/fulfilment.png";
import users from "../assets/users.png";
import staffs from "../assets/staffs.png";
import restaurants from "../assets/restaurants.png";
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
      name: "restaurants",
      link: "/restaurants",
      icon: restaurants,
    },
    {
      id: 2,
      name: "drivers",
      link: "/drivers",
      icon: drivers,
    },
    {
      id: 3,
      name: "Contents",
      link: "/contents",
      icon: contents,
    },
    {
      id: 4,
      name: "Orders Fulfilment",
      link: "/orders-fulfilment",
      icon: fulfilment,
    },
    {
      id: 5,
      name: "discounts & promos",
      link: "/discounts-promos",
      icon: discount,
    },
    {
      id: 6,
      name: "wallet & earnings",
      link: "/wallet-earnings",
      icon: wallet,
    },
    {
      id: 7,
      name: "dispute resolution",
      link: "/dispute-resolution",
      icon: dispute,
    },
    {
      id: 8,
      name: "users",
      link: "/users",
      icon: users,
    },
    {
      id: 9,
      name: "Staff Management",
      link: "/staff-management",
      icon: staffs,
    },

    {
      id: 11,
      name: "profile & settings",
      link: "/profile-settings",
      icon: setting,
    },
  ];

  return (
    <div>
      <div className="w-full grid gap-2.5">
        {links.slice(0, 10).map((link) => (
          <NavLink
            key={link.id}
            to={link.link}
            onClick={onNavigate}
            className={({ isActive }) =>
              `flex items-center gap-2 rounded-r-lg capitalize px-5 py-3 relative w-full cursor-pointer
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
      <div className="w-full grid gap-2.5 mt-9">
        <p className="px-6 text-sm text-primary font-semibold">Other Menu</p>
        {links.slice(10).map((link) => (
          <NavLink
            key={link.id}
            to={link.link}
            onClick={onNavigate}
            className={({ isActive }) =>
              `flex items-center gap-2 rounded-r-lg capitalize px-5 py-3 relative w-full cursor-pointer hover:bg-[#f3ad3d31] ${
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
          className="flex items-center gap-2 rounded-r-lg capitalize px-5 py-3 relative w-full cursor-pointer hover:bg-[#f3ad3d31]"
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
