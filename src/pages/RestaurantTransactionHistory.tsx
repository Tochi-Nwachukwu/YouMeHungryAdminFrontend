import { useState } from "react";
import GoBack from "../components/GoBack";
import { MdChevronRight } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";

const filters = [
  "Breakfast",
  "Mexican",
  "Italian",
  "Desserts",
  "African",
  "Kids Menu",
];

export default function RestaurantTransactionHistory() {
  const [tab, setTab] = useState(0);
  const [selected, setSelected] = useState<string>("All");

  const selectFilter = (filter: string) => {
    setSelected(filter);
  };

  const category = ["Earnings", "Withdrawals"];

  return (
    <section className="lg:px-6 px-4 py-5 h-full w-full">
      <div className="flex items-center gap-8.5">
        <GoBack />
        <h1 className="lg:text-[30px] text-2xl text-black font-bold leading-[100%]">
          McDonald’s Transaction History
        </h1>
      </div>

      <section className="py-5 h-full">
        <div className="w-full bg-white rounded-[14px] mt-5 px-5.25 py-7.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center flex-row w-fit gap-2 p-1 bg-[#F5F5F5] rounded ">
              <button
                onClick={() => setTab(0)}
                className={`${
                  tab === 0 ? "bg-accent text-white" : "bg-white text-black"
                } py-2.5 px-3 text-sm rounded cursor-pointer transition-all ease-in decoration-neutral-200`}
              >
                {category[0]}
              </button>
              <button
                onClick={() => setTab(1)}
                className={`${
                  tab === 1 ? "bg-accent text-white" : "bg-white text-black"
                } py-2.5 px-3 text-sm rounded cursor-pointer transition-all ease-in decoration-neutral-200`}
              >
                {category[1]}
              </button>
            </div>

            <div className="flex items-center gap-2">
              <p className="text-[#8E8E8E] text-base font-semibold">
                Total Earnings :
              </p>
              <p className="text-2xl font-semibold text-black">$85,500.00</p>
            </div>
          </div>

          <div className="mt-5">
            <div className="h-[47.5px] flex lg:flex-row flex-col lg:items-center justify-between mb-6.25">
              <div className="flex items-center gap-5">
                <p className="font-semibold">
                  {category[tab]} <span className="font-normal">(254,990)</span>
                </p>

                <div className="hidden lg:flex items-center gap-5">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selected === "All"}
                      onChange={() => selectFilter("All")}
                      className="w-4 h-4 rounded accent-[#F3AE3D]"
                    />
                    <span className="text-sm font-medium text-[#454545]">
                      All
                    </span>
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
              <div className="flex items-center gap-2">
                <button className="flex items-center gap-1 py-2.5 lg:px-3 text-sm leading-4.5 cursor-pointer">
                  Export Table <MdChevronRight />
                </button>
                <button className="flex items-center gap-1 py-2.5 lg:px-3 text-sm leading-4.5 cursor-pointer">
                  Filter by <MdChevronRight />
                </button>
              </div>
            </div>
            {/* table */}
            <section>
              {tab === 0 && (
                <>
                  <div className="grid lg:grid-cols-[0.3fr_1fr_1.5fr_1fr_1fr_1fr_0.5fr_0.3fr] grid-cols-[1fr_0.5fr_0.5fr] text-sm text-[#8E8E8E] px-5 lg:mr-5">
                    <p className="hidden lg:block ">Id</p>
                    <p className="">Account Name</p>
                    <p className="hidden lg:block ">Bank</p>
                    <p className="">Amount</p>
                    <p className="hidden lg:block ">Date</p>
                    <p className="">Time</p>
                    <p className="">Status</p>
                  </div>
                  <div className="grid gap-4 mt-3 h-180 overflow-y-scroll mr-2 custom-scrollbar">
                    {Array.from({ length: 40 }, (_, i) => (
                      <div
                        role="button"
                        key={i}
                        className="grid lg:grid-cols-[0.3fr_1fr_1.5fr_1fr_1fr_1fr_0.5fr_0.3fr] grid-cols-[1fr_0.5fr_0.5fr] lg:text-sm text-xs bg-[#FAFAFA] rounded items-center py-2.5 px-5"
                      >
                        <p className="hidden lg:block ">{1 + i}</p>
                        <p className="">Victor John</p>
                        <p className="hidden lg:block ">Chase - 1413258248</p>
                        <p className="">$45,900</p>
                        <p className="hidden lg:block ">22/10/22</p>
                        <p className="hidden lg:block">16:03</p>
                        <div className=" bg-[#34A853]/15 text-[#34A853] w-fit py-1.5 lg:px-4.75 px-2 rounded">
                          <p>Successful</p>
                        </div>
                        <BsThreeDotsVertical className="hidden lg:block" />
                      </div>
                    ))}
                  </div>
                </>
              )}

              {tab === 1 && (
                <>
                  <div className="grid lg:grid-cols-[0.3fr_1fr_1.5fr_1fr_1fr_1fr_0.5fr_0.3fr] grid-cols-[1fr_0.5fr_0.5fr] text-sm text-[#8E8E8E] px-5 lg:mr-5">
                    <p className="hidden lg:block ">Id</p>
                    <p className="">Account Name</p>
                    <p className="hidden lg:block ">Bank</p>
                    <p className="">Amount</p>
                    <p className="hidden lg:block ">Date</p>
                    <p className="">Time</p>
                    <p className="">Status</p>
                  </div>
                  <div className="grid gap-4 mt-3 h-180 overflow-y-scroll mr-2 custom-scrollbar">
                    {Array.from({ length: 40 }, (_, i) => (
                      <div
                        role="button"
                        key={i}
                        className="grid lg:grid-cols-[0.3fr_1fr_1.5fr_1fr_1fr_1fr_0.5fr_0.3fr] grid-cols-[1fr_0.5fr_0.5fr] lg:text-sm text-xs bg-[#FAFAFA] rounded items-center py-2.5 px-5"
                      >
                        <p className="hidden lg:block ">{1 + i}</p>
                        <p className="">Victor John</p>
                        <p className="hidden lg:block ">Chase - 1413258248</p>
                        <p className="">$45,900</p>
                        <p className="hidden lg:block ">22/10/22</p>
                        <p className="hidden lg:block">16:03</p>
                        <div className=" bg-[#34A853]/15 text-[#34A853] w-fit py-1.5 lg:px-4.75 px-2 rounded">
                          <p>Successful</p>
                        </div>
                        <BsThreeDotsVertical className="hidden lg:block" />
                      </div>
                    ))}
                  </div>
                </>
              )}
            </section>
          </div>
        </div>
      </section>
    </section>
  );
}
