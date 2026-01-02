import { NavLink } from "react-router-dom";

export default function LatestOrder() {
  return (
    <div className="h-fit rounded-2xl bg-white p-6">
      <p className="text-[#454545] text-xl font-semibold">Latest Orders</p>
      <NavLink
        className="text-[#8C8C8C] text-sm font-semibold mt-6.5 block"
        to="/orders"
      >
        View All
      </NavLink>

      <div className="mt-6.5">
        <div className="grid grid-cols-4 text-accent font-semibold py-3.5 border-b border-[#F6F7F8]">
          <p>Order ID</p>
          <p>Time</p>
          <p>Customer</p>
          <p>Status</p>
        </div>

        <div className="grid grid-cols-4 text-accent text-sm font-semibold py-3.5 border-b border-[#F6F7F8]">
          <p>#1452</p>
          <p>3:29 PM</p>
          <p>Tony Ralph</p>
          <button className="w-23.5 h-6.75 rounded bg-accent text-white text-xs">
            Delivered
          </button>
        </div>

        <div className="grid grid-cols-4 text-accent text-sm font-semibold py-3.5 border-b border-[#F6F7F8]">
          <p>#1452</p>
          <p>3:29 PM</p>
          <p>Tony Ralph</p>
          <button className="w-23.5 h-6.75 rounded bg-[#fcafb171] text-[#EC2D30] text-xs">
            Canceled
          </button>
        </div>

        <div className="grid grid-cols-4 text-accent text-sm font-semibold py-3.5 border-b border-[#F6F7F8]">
          <p>#1452</p>
          <p>3:29 PM</p>
          <p>Tony Ralph</p>
          <button className="w-23.5 h-6.75 rounded bg-[#F3AE3D] text-white text-xs">
            Pending
          </button>
        </div>
        <div className="grid grid-cols-4 text-accent text-sm font-semibold py-3.5">
          <p>#1452</p>
          <p>3:29 PM</p>
          <p>Tony Ralph</p>
          <button className="w-23.5 h-6.75 rounded bg-accent text-white text-xs">
            Delivered
          </button>
        </div>
      </div>
    </div>
  );
}
