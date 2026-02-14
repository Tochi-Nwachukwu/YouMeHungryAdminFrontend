import { MdChevronRight } from "react-icons/md";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function StaffManagement() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string>("All");

  const selectFilter = (filter: string) => {
    setSelected(filter);
  };

  const filters = ["Active Account", "Inactive Account"];

  return (
    <section className="lg:px-6 px-4 py-5 h-full w-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-8.5">
          <h1 className="lg:text-[30px] text-2xl text-black font-bold leading-[100%]">
            Staff Management
          </h1>
        </div>
        <button
          onClick={() => navigate(`/discounts-promos/create-discount`)}
          className="px-6 py-2 rounded font-semibold text-white bg-accent w-fit cursor-pointer hidden lg:block"
        >
          + Add New Staff
        </button>
      </div>

      <section className="py-5 h-full">
        <div className="w-full bg-white rounded-[14px] mt-5 px-5.25 py-7.5">
          <div className="mt-5">
            <div className="h-[47.5px] flex lg:flex-row flex-col lg:items-center justify-between mb-6.25">
              <div className="flex items-center gap-5">
                <p className="font-semibold">
                  Staff <span className="font-normal">(9,990)</span>
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
              <div className="grid lg:grid-cols-[0.3fr_1fr_2fr_2fr_1fr_0.5fr] grid-cols-[1fr_0.5fr_0.5fr] text-sm text-[#8E8E8E] px-5 lg:mr-5">
                <p className="hidden lg:block ">Id</p>
                <p className="">Image</p>
                <p className="hidden lg:block ">Name</p>
                <p className="">Role</p>
                <p className="hidden lg:block ">Status</p>
                <p className=""></p>
              </div>
              <div className="grid gap-4 mt-3 h-180 overflow-y-scroll mr-2 custom-scrollbar">
                {Array.from({ length: 40 }, (_, i) => (
                  <div
                    role="button"
                    key={i}
                    className="grid lg:grid-cols-[0.3fr_1fr_2fr_2fr_1fr_0.5fr] grid-cols-[1fr_0.5fr_0.5fr] lg:text-base text-xs bg-[#FAFAFA] rounded items-center py-2.5 px-5"
                  >
                    <p className="hidden lg:block ">{1 + i}</p>
                    <div>
                      <div className="w-7.5 h-7.5 rounded overflow-hidden">
                        <img
                          className="w-full h-full object-cover"
                          src="https://ooni.com/cdn/shop/articles/20220211142347-margherita-9920_ba86be55-674e-4f35-8094-2067ab41a671.jpg?v=1737104576&width=1080"
                          alt="food"
                        />
                      </div>
                    </div>
                    <p className="">Orji Miracle Chukwuemeka</p>
                    <p className="">Fulfilment</p>
                    <div className=" bg-[#34A853]/15 text-[#34A853] w-fit py-1.5 lg:px-10.75 px-2 rounded">
                      <p>Active</p>
                    </div>
                    <BsThreeDotsVertical className="hidden lg:block" />
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>
    </section>
  );
}
