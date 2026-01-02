// import React from "react";

import { PiCurrencyDollarSimpleFill } from "react-icons/pi";
import Stats from "../components/Stats";
import { HiCreditCard } from "react-icons/hi2";
import { RiHourglassFill } from "react-icons/ri";
import { FaCircleArrowUp } from "react-icons/fa6";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdChevronRight } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import UpdateBankDetailsModal from "../components/UpdateBankDetailsModal";

const filters = [
  "Breakfast",
  "Mexican",
  "Italian",
  "Desserts",
  "African",
  "Kids Menu",
];
export default function Earnings() {
  const navigate = useNavigate();
  const [tab, setTab] = useState(0);
  const [selected, setSelected] = useState<string>("All");
  const [modal, setModal] = useState(false);

  const selectFilter = (filter: string) => {
    setSelected(filter);
  };

  return (
    <section className="lg:px-6 px-4 py-5 h-full w-full">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6.5 mt-5">
        <div className="h-72.5 rounded-[10px] bg-accent text-white lg:px-9 px-5 flex items-center">
          <div className="flex lg:flex-row flex-col lg:items-center justify-between gap-11.25 w-full">
            <div>
              <p className="lg:text-[28px] text-xl text-[#E1E1E1]">
                Wallet Balance
              </p>
              <p className="lg:text-[54px] text-3xl font-medium mt-3.5 mb-5.75">
                $673,412.66
              </p>
              <p className="lg:text-[28px] text-xl text-[#E1E1E1]">
                Chase - **** **** 5258
              </p>
            </div>
            <div className="flex items-center lg:flex-col gap-4">
              <button className="text-accent lg:w-full bg-primary lg:px-9.75 px-5 lg:py-3.75 py-2 text-sm lg:text-base rounded-[10px] font-semibold cursor-pointer hover:bg-primary/80 duration-100 ease-in transition-all">
                Withdraw Funds
              </button>
              <button
                onClick={() => setModal(true)}
                className="text-accent lg:w-full bg-white lg:px-9.75 px-5 lg:py-3.75 py-2 text-sm lg:text-base rounded-[10px] font-semibold cursor-pointer hover:bg-white/80 duration-100 ease-in transition-all"
              >
                Change Bank Details
              </button>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-6.5">
          <Stats
            custom="text-black font-semibold"
            title={
              <>
                Total Earnings <br />
                This Month
              </>
            }
            amount="$8,500.00"
            icon={<PiCurrencyDollarSimpleFill />}
          />
          <Stats
            title={
              <>
                Last <br />
                Withdrawal
              </>
            }
            custom="text-black font-semibold"
            amount="$12.145"
            icon={<HiCreditCard />}
          />
          <Stats
            title={
              <>
                Pending <br />
                Withdrawal
              </>
            }
            custom="text-black font-semibold"
            amount="$12.145"
            icon={<RiHourglassFill color="#EC2D30" />}
          />
          <Stats
            title={
              <>
                Last <br />
                Withdrawal
              </>
            }
            custom="text-black font-semibold"
            amount="$12.145"
            icon={<FaCircleArrowUp color="#FF8156" />}
          />
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
              Earnings
            </button>
            <button
              onClick={() => setTab(1)}
              className={`${
                tab === 1 ? "bg-accent text-white" : "bg-white text-black"
              } py-2.5 px-3 text-sm rounded cursor-pointer transition-all ease-in decoration-neutral-200`}
            >
              Withdrawals
            </button>
          </div>

          <div className="mt-5">
            <div className="h-[47.5px] flex lg:flex-row flex-col lg:items-center justify-between mb-6.25">
              <div className="flex items-center gap-5">
                <p className="font-semibold">
                  Earnings <span className="font-normal">(254,990)</span>
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
                    <p className="">Item</p>
                    <p className="hidden lg:block ">No. of Orders</p>
                    <p className="">Amount</p>
                    <p className="hidden lg:block ">Date</p>
                    <p className="">Time</p>
                    <p className="">Status</p>
                  </div>
                  <div className="grid gap-4 mt-3 h-180 overflow-y-scroll mr-2 custom-scrollbar">
                    {Array.from({ length: 40 }, (_, i) => (
                      <div
                        role="button"
                        onClick={() =>
                          navigate(`/dispute-resolution/${i + Math.random()}`)
                        }
                        key={i}
                        className="grid lg:grid-cols-[0.3fr_1fr_1.5fr_1fr_1fr_1fr_0.5fr_0.3fr] grid-cols-[1fr_0.5fr_0.5fr] lg:text-sm text-xs bg-[#FAFAFA] rounded items-center py-2.5 px-5"
                      >
                        <p className="hidden lg:block ">{1 + i}</p>
                        <p className="">Apple Pie, Pizza Pep...</p>
                        <p className="hidden lg:block ">5</p>
                        <p className="">$45,900</p>
                        <p className="hidden lg:block ">22/10/22</p>
                        <p className="hidden lg:block">16:03</p>
                        <div className="text-white bg-[#0C9D61] w-fit py-1.5 lg:px-4.75 px-2 rounded">
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
                        onClick={() =>
                          navigate(`/dispute-resolution/${i + Math.random()}`)
                        }
                        key={i}
                        className="grid lg:grid-cols-[0.3fr_1fr_1.5fr_1fr_1fr_1fr_0.5fr_0.3fr] grid-cols-[1fr_0.5fr_0.5fr] lg:text-sm text-xs bg-[#FAFAFA] rounded items-center py-2.5 px-5"
                      >
                        <p className="hidden lg:block ">{1 + i}</p>
                        <p className="">Victor John</p>
                        <p className="hidden lg:block ">Chase - 1413258248</p>
                        <p className="">$45,900</p>
                        <p className="hidden lg:block ">22/10/22</p>
                        <p className="hidden lg:block">16:03</p>
                        <div className="text-white bg-[#0C9D61] w-fit py-1.5 lg:px-4.75 px-2 rounded">
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
      <UpdateBankDetailsModal
        open={modal}
        onClose={() => setModal(false)}
        onVerify={() => navigate("/wallet-earnings/verify-email")}
      />
    </section>
  );
}
