import { useState } from "react";
import { BsBoxSeam, BsThreeDotsVertical } from "react-icons/bs";
import { MdChevronRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const filters = ["Completed Order", "Canceled Order", "Pending Order"];

export default function Orders() {
  const navigate = useNavigate();
  const [tab, setTab] = useState(0);
  const [selected, setSelected] = useState<string>("All");

  const selectFilter = (filter: string) => {
    setSelected(filter);
  };

  return (
    <section className="lg:px-6 px-4 py-5 h-full w-full">
      <h1 className="lg:text-[30px] text-2xl text-black font-bold leading-[100%]">
        Orders
      </h1>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="flex items-center justify-between w-full h-fit rounded-2xl bg-white p-6">
          <div>
            <p className={`text-[#8C8C8C] font-semibold`}>Active Orders</p>
            <p className="text-[#454545] text-2xl font-semibold mt-2">1750</p>
          </div>
          <div className="w-12.25 h-12.25 bg-[#EEFCFC] text-[#0C9D61] text-2xl grid place-items-center rounded-lg">
            <BsBoxSeam />
          </div>
        </div>

        <div className="flex items-center justify-between w-full h-fit rounded-2xl bg-white p-6">
          <div>
            <p className={`text-[#8C8C8C] font-semibold`}>Completed Orders</p>
            <p className="text-[#454545] text-2xl font-semibold mt-2">140</p>
          </div>
          <div className="w-12.25 h-12.25 bg-[#EEFCFC] text-accent text-2xl grid place-items-center rounded-lg">
            <BsBoxSeam />
          </div>
        </div>

        <div className="flex items-center justify-between w-full h-fit rounded-2xl bg-white p-6">
          <div>
            <p className={`text-[#8C8C8C] font-semibold`}>Cancelled Orders</p>
            <p className="text-[#454545] text-2xl font-semibold mt-2">15</p>
          </div>
          <div className="w-12.25 h-12.25 bg-[#FEF2F2] text-[#EC2D30] text-2xl grid place-items-center rounded-lg">
            <BsBoxSeam />
          </div>
        </div>
      </div>

      <section className="py-5 h-full">
        <div className="w-full bg-white rounded-[14px] mt-5 px-5.25 py-7.5">
          <div className="flex items-center flex-row w-fit gap-2 p-1 bg-[#F5F5F5] rounded ">
            <button
              onClick={() => setTab(0)}
              className={`${
                tab === 0 ? "bg-accent text-white" : "bg-white text-black"
              } py-2.5 px-3 text-sm rounded cursor-pointer transition-all ease-in decoration-neutral-200`}
            >
              Delivery Order
            </button>
            <button
              onClick={() => setTab(1)}
              className={`${
                tab === 1 ? "bg-accent text-white" : "bg-white text-black"
              } py-2.5 px-3 text-sm rounded cursor-pointer transition-all ease-in decoration-neutral-200`}
            >
              Pickup Order
            </button>
            <button
              onClick={() => setTab(2)}
              className={`${
                tab === 2 ? "bg-accent text-white" : "bg-white text-black"
              } py-2.5 px-3 text-sm rounded cursor-pointer transition-all ease-in decoration-neutral-200`}
            >
              Scheduled Order
            </button>
          </div>

          <div className="mt-5">
            <div className="h-[47.5px] flex lg:flex-row flex-col lg:items-center justify-between mb-6.25">
              <div className="flex items-center gap-5">
                <p className="font-semibold">
                  Delivery Order <span className="font-normal">(254,990)</span>
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
                  <div className="grid lg:grid-cols-[0.3fr_1fr_1fr_2fr_1fr_1fr_1fr_1fr_1fr_0.5fr] grid-cols-[1fr_0.5fr_0.5fr] text-sm text-[#8E8E8E] px-5 lg:mr-5">
                    <p className="hidden lg:block ">Id</p>
                    <p className="">Customer</p>
                    <p className="hidden lg:block ">Driver</p>
                    <p className="">Order</p>
                    <p className="hidden lg:block ">Code</p>
                    <p className="">Price</p>
                    <p className="">Date</p>
                    <p className="">Status</p>
                  </div>
                  <div className="grid gap-4 mt-3 h-180 overflow-y-scroll mr-2 custom-scrollbar">
                    {Array.from({ length: 40 }, (_, i) => (
                      <div
                        role="button"
                        key={i}
                        className="grid lg:grid-cols-[0.3fr_1fr_1fr_2fr_1fr_1fr_1fr_1fr_1fr_0.5fr] grid-cols-[1fr_0.5fr_0.5fr] lg:text-sm text-xs bg-[#FAFAFA] rounded items-center py-2.5 px-5"
                      >
                        <p className="hidden lg:block ">{1 + i}</p>
                        <p className="">Victor John</p>
                        <p className="hidden lg:block ">Frank Miller</p>
                        <p className="">Apple Pie, Pizza Pepperoni...</p>
                        <p className="hidden lg:block ">9956</p>
                        <p className="hidden lg:block">$450</p>
                        <p className="hidden lg:block">22/10/22</p>
                        <div className="text-white bg-[#0C9D61] w-fit py-1.5 lg:px-4.75 px-2 rounded">
                          <p>Completed</p>
                        </div>
                        <button
                          onClick={() =>
                            navigate(
                              `/orders/details/${i + Math.random()}?delivery`
                            )
                          }
                          className="px-7.5 py-2 rounded font-semibold text-white bg-accent w-fit cursor-pointer hidden lg:block"
                        >
                          View
                        </button>
                        <BsThreeDotsVertical className="hidden lg:block" />
                      </div>
                    ))}
                  </div>
                </>
              )}

              {tab === 1 && (
                <>
                  <div className="grid lg:grid-cols-[0.3fr_1fr_2fr_1fr_1fr_1fr_1fr_1fr_0.5fr] grid-cols-[1fr_0.5fr_0.5fr] text-sm text-[#8E8E8E] px-5 lg:mr-5">
                    <p className="hidden lg:block ">Id</p>
                    <p className="">Customer</p>
                    <p className="">Order</p>
                    <p className="hidden lg:block ">Code</p>
                    <p className="">Price</p>
                    <p className="">Date</p>
                    <p className="">Status</p>
                  </div>
                  <div className="grid gap-4 mt-3 h-180 overflow-y-scroll mr-2 custom-scrollbar">
                    {Array.from({ length: 40 }, (_, i) => (
                      <div
                        role="button"
                        key={i}
                        className="grid lg:grid-cols-[0.3fr_1fr_2fr_1fr_1fr_1fr_1fr_1fr_0.5fr] grid-cols-[1fr_0.5fr_0.5fr] lg:text-sm text-xs bg-[#FAFAFA] rounded items-center py-2.5 px-5"
                      >
                        <p className="hidden lg:block ">{1 + i}</p>
                        <p className="">Victor John</p>
                        <p className="">Apple Pie, Pizza Pepperoni...</p>
                        <p className="hidden lg:block ">9956</p>
                        <p className="hidden lg:block">$450</p>
                        <p className="hidden lg:block">22/10/22</p>
                        <div className="text-white bg-[#0C9D61] w-fit py-1.5 lg:px-4.75 px-2 rounded">
                          <p>Completed</p>
                        </div>
                        <button
                          onClick={() =>
                            navigate(
                              `/orders/details/${i + Math.random()}?pick-up`
                            )
                          }
                          className="px-7.5 py-2 rounded font-semibold text-white bg-accent w-fit cursor-pointer hidden lg:block"
                        >
                          View
                        </button>
                        <BsThreeDotsVertical className="hidden lg:block" />
                      </div>
                    ))}
                  </div>
                </>
              )}
              {tab === 2 && (
                <>
                  <div className="grid lg:grid-cols-[0.3fr_1fr_1fr_2fr_1fr_1fr_1fr_1fr_1fr_0.5fr] grid-cols-[1fr_0.5fr_0.5fr] text-sm text-[#8E8E8E] px-5 lg:mr-5">
                    <p className="hidden lg:block ">Id</p>
                    <p className="">Customer</p>
                    <p className="hidden lg:block ">Restaurant</p>
                    <p className="">Order</p>
                    <p className="hidden lg:block ">Code</p>
                    <p className="">Price</p>
                    <p className="">Date</p>
                    <p className="">Status</p>
                  </div>
                  <div className="grid gap-4 mt-3 h-180 overflow-y-scroll mr-2 custom-scrollbar">
                    {Array.from({ length: 40 }, (_, i) => (
                      <div
                        role="button"
                        key={i}
                        className="grid lg:grid-cols-[0.3fr_1fr_1fr_2fr_1fr_1fr_1fr_1fr_1fr_0.5fr] grid-cols-[1fr_0.5fr_0.5fr] lg:text-sm text-xs bg-[#FAFAFA] rounded items-center py-2.5 px-5"
                      >
                        <p className="hidden lg:block ">{1 + i}</p>
                        <p className="">Victor John</p>
                        <p className="hidden lg:block ">McDonalds</p>
                        <p className="">Apple Pie, Pizza Pepperoni...</p>
                        <p className="hidden lg:block ">9956</p>
                        <p className="hidden lg:block">$450</p>
                        <p className="hidden lg:block">22/10/22</p>
                        <div className="text-white bg-[#0C9D61] w-fit py-1.5 lg:px-4.75 px-2 rounded">
                          <p>Completed</p>
                        </div>
                        <button
                          onClick={() =>
                            navigate(
                              `/orders/details/${
                                i + Math.random()
                              }?scheduled-order`
                            )
                          }
                          className="px-7.5 py-2 rounded font-semibold text-white bg-accent w-fit cursor-pointer hidden lg:block"
                        >
                          View
                        </button>
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
