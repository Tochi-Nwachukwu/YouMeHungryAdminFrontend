import { useState } from "react";
import GoBack from "../components/GoBack";
import { LuTrash } from "react-icons/lu";
import { HiOutlineChevronRight } from "react-icons/hi2";
import NotificationBlock from "../components/NotificationBlock";

export default function Notification() {
  const filters = ["Unread", "Read", "System"];
  const [selected, setSelected] = useState<string>("All");

  const selectFilter = (filter: string) => {
    setSelected(filter);
  };

  return (
    <section className="lg:px-6 px-4 py-5 h-full bg-white w-full">
      <div className="flex items-center gap-8.5">
        <GoBack />
        <h1 className="lg:text-[30px] text-2xl text-black font-bold leading-[100%]">
          Notifications
        </h1>
      </div>
      <div className="flex lg:flex-row flex-col lg:items-center justify-between my-6.25">
        <div className="flex lg:flex-row flex-col lg:items-center gap-5">
          <p>Notifications (254,990)</p>
          <div className="flex items-center gap-5">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selected === "All"}
                onChange={() => selectFilter("All")}
                className="w-4 h-4 rounded accent-[#F3AE3D]"
              />
              <span className="text-sm font-medium text-[#454545]">All</span>
            </label>

            {filters.map((filter) => (
              <label
                key={filter}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={selected === filter}
                  onChange={() => selectFilter(filter)}
                  className="w-4 h-4 rounded accent-[#F3AE3D]"
                />
                <span className="text-sm font-medium text-[#454545]">
                  {filter}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div className="flex items-center">
          <button className="flex items-center gap-2 p-3 text-sm leading-4.5 cursor-pointer">
            <p>Clear All</p>
            <LuTrash className="text-[#CF3636] text-xl" />
          </button>
          <button className="flex items-center gap-2 p-3 text-sm leading-4.5 cursor-pointer">
            <p>Filter By</p>
            <HiOutlineChevronRight className="text-xl" />
          </button>
        </div>
      </div>
      <div className="grid gap-1.25">
        <NotificationBlock
          type="delivered"
          title="Order #1234567 Delivered"
          time="3 Mar, 2025 | 20:50 pm"
          text="Tony Ralph’s order has been delivered."
          status="new"
        />
        <NotificationBlock
          type="cancelled"
          title="Order #1453 Cancelled"
          time="3 Mar, 2025 | 20:50 pm"
          text="The order was cancelled by the customer."
          status="unread"
        />
        <NotificationBlock
          type="payment"
          title="Payment Received"
          time="3 Mar, 2025 | 20:50 pm"
          text="$150 payment received from Tony Ralph."
          status="read"
        />
        <NotificationBlock
          type="dispute"
          title="Dispute Raised"
          time="3 Mar, 2025 | 20:50 pm"
          text="A dispute was filed for Order #1452."
          status="system"
        />
        <NotificationBlock
          type="delivered"
          title="Order #1234567 Delivered"
          time="3 Mar, 2025 | 20:50 pm"
          text="Tony Ralph’s order has been delivered."
          status="new"
        />
        <NotificationBlock
          type="cancelled"
          title="Order #1453 Cancelled"
          time="3 Mar, 2025 | 20:50 pm"
          text="The order was cancelled by the customer."
          status="unread"
        />
        <NotificationBlock
          type="payment"
          title="Payment Received"
          time="3 Mar, 2025 | 20:50 pm"
          text="$150 payment received from Tony Ralph."
          status="read"
        />
        <NotificationBlock
          type="dispute"
          title="Dispute Raised"
          time="3 Mar, 2025 | 20:50 pm"
          text="A dispute was filed for Order #1452."
          status="system"
        />
      </div>
    </section>
  );
}
