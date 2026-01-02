import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdChevronRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function DisputeResolution() {
  const [tab, setTab] = useState(0);
  const navigate = useNavigate();

  return (
    <section className="lg:px-6 px-4 py-5 h-full">
      <h1 className="lg:text-[30px] text-2xl text-black font-bold leading-[100%]">
        Dispute Resolution
      </h1>

      <div className="w-full bg-white rounded-[14px] mt-5 px-5.25 py-7.5">
        <div className="flex items-center flex-row w-fit gap-2 p-1 bg-[#F5F5F5] rounded ">
          <button
            onClick={() => setTab(0)}
            className={`${
              tab === 0 ? "bg-accent text-white" : "bg-white text-black"
            } py-2.5 px-3 text-sm rounded cursor-pointer transition-all ease-in decoration-neutral-200`}
          >
            In Dispute
          </button>
          <button
            onClick={() => setTab(1)}
            className={`${
              tab === 1 ? "bg-accent text-white" : "bg-white text-black"
            } py-2.5 px-3 text-sm rounded cursor-pointer transition-all ease-in decoration-neutral-200`}
          >
            Resolved
          </button>
        </div>

        <div className="mt-5">
          <div className="h-[47.5px] flex lg:flex-row flex-col lg:items-center justify-between mb-6.25">
            <p className="font-semibold">
              In Dispute <span className="font-normal">(254,990)</span>
            </p>
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
            <div className="grid lg:grid-cols-[0.3fr_1fr_1.5fr_1fr_1fr_1fr_0.5fr_0.3fr] grid-cols-[1fr_1fr_0.5fr] text-sm text-[#8E8E8E]">
              <p className="hidden lg:block">Id</p>
              <p>Name</p>
              <p className="hidden lg:block">Order</p>
              <p>Issue Type</p>
              <p className="hidden lg:block">Date</p>
              <p>Status</p>
            </div>
            {tab === 0 && (
              <div className="grid gap-4 mt-3 h-180 overflow-y-scroll pr-2 custom-scrollbar">
                {Array.from({ length: 40 }, (_, i) => (
                  <div
                    role="button"
                    onClick={() =>
                      navigate(`/dispute-resolution/${i + Math.random()}`)
                    }
                    key={i}
                    className="grid lg:grid-cols-[0.3fr_1fr_1.5fr_1fr_1fr_1fr_0.5fr_0.3fr] grid-cols-[1fr_0.5fr_0.5fr] lg:text-sm text-xs bg-[#FAFAFA] rounded items-center py-2.5 px-5"
                  >
                    <p className="hidden lg:block">{1 + i}</p>
                    <p>Victor Chukwuebuka</p>
                    <p className="hidden lg:block">
                      Apple Pie, Pizza Pepperoni...
                    </p>
                    <p>Wrong order</p>
                    <p className="hidden lg:block">22/10/22</p>
                    <div className="text-[#F33A3A] bg-[#EC2D30]/15 w-fit py-1.5 lg:px-4.75 px-2 rounded">
                      <p>In Dispute</p>
                    </div>
                    <button className="px-7.5 py-2 rounded font-semibold text-white bg-accent w-fit cursor-pointer hidden lg:block">
                      View
                    </button>
                    <BsThreeDotsVertical className="hidden lg:block" />
                  </div>
                ))}
              </div>
            )}

            {tab === 1 && (
              <div className="grid gap-4 mt-3 h-180 overflow-y-scroll pr-2 custom-scrollbar">
                {Array.from({ length: 40 }, (_, i) => (
                  <div
                    role="button"
                    onClick={() =>
                      navigate(`/dispute-resolution/${i + Math.random()}`)
                    }
                    key={i}
                    className="grid lg:grid-cols-[0.3fr_1fr_1.5fr_1fr_1fr_1fr_0.5fr_0.3fr] grid-cols-[1fr_0.5fr_0.5fr] lg:text-sm text-xs bg-[#FAFAFA] rounded items-center py-2.5 px-5"
                  >
                    <p className="hidden lg:block">{1 + i}</p>
                    <p>Victor Chukwuebuka</p>
                    <p className="hidden lg:block">
                      Apple Pie, Pizza Pepperoni...
                    </p>
                    <p>Wrong order</p>
                    <p className="hidden lg:block">22/10/22</p>
                    <div className="text-white bg-[#0C9D61] w-fit py-1.5 lg:px-4.75 px-2 rounded">
                      <p>Resolved</p>
                    </div>
                    <button className="px-7.5 py-2 rounded font-semibold text-white bg-accent w-fit cursor-pointer hidden lg:block">
                      View
                    </button>
                    <BsThreeDotsVertical className="hidden lg:block" />
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>
      </div>
    </section>
  );
}
