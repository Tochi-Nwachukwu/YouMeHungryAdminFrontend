import { MdChevronRight, MdDeleteOutline, MdOutlineEdit } from "react-icons/md";
import GoBack from "../components/GoBack";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function DiscountAndPromos() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string>("All");

  const selectFilter = (filter: string) => {
    setSelected(filter);
  };

  const filters = [
    "Breakfast",
    "Mexican",
    "Italian",
    "Desserts",
    "African",
    "Kids Menu",
  ];

  return (
    <section className="lg:px-6 px-4 py-5 h-full w-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-8.5">
          <GoBack />
          <h1 className="lg:text-[30px] text-2xl text-black font-bold leading-[100%]">
            Discounts & Promos
          </h1>
        </div>
        <button
          onClick={() => navigate(`/discounts-promos/create-discount`)}
          className="px-6 py-2 rounded font-semibold text-white bg-accent w-fit cursor-pointer hidden lg:block"
        >
          + Create New Discount
        </button>
      </div>

      <section className="py-5 h-full">
        <div className="w-full bg-white rounded-[14px] mt-5 px-5.25 py-7.5">
          <div className="mt-5">
            <div className="h-[47.5px] flex lg:flex-row flex-col lg:items-center justify-between mb-6.25">
              <div className="flex items-center gap-5">
                <p className="font-semibold">
                  Discounts & Promos{" "}
                  <span className="font-normal">(254,990)</span>
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
              <div className="grid lg:grid-cols-[0.3fr_0.5fr_1.5fr_1fr_1fr_0.5fr_0.5fr_0.3fr_0.3fr] grid-cols-[1fr_0.5fr_0.5fr] text-sm text-[#8E8E8E] px-5 lg:mr-5">
                <p className="hidden lg:block ">Id</p>
                <p className="">Image</p>
                <p className="hidden lg:block ">Description</p>
                <p className="">Category</p>
                <p className="hidden lg:block ">Coupon Code</p>
                <p className="">Discount</p>
                <p className="">Actions</p>
              </div>
              <div className="grid gap-4 mt-3 h-180 overflow-y-scroll mr-2 custom-scrollbar">
                {Array.from({ length: 40 }, (_, i) => (
                  <div
                    role="button"
                    key={i}
                    className="grid lg:grid-cols-[0.3fr_0.5fr_1.5fr_1fr_1fr_0.5fr_0.5fr_0.3fr_0.3fr] grid-cols-[1fr_0.5fr_0.5fr] lg:text-base text-xs bg-[#FAFAFA] rounded items-center py-2.5 px-5"
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
                    <p className="hidden lg:block ">
                      Plan it Campaigns Description en
                    </p>
                    <p className="">Breakfast</p>
                    <p className="hidden lg:block ">BRLN-F75D-K920</p>
                    <p className="hidden lg:block">15%</p>
                    <button
                      onClick={() =>
                        navigate(
                          `/discounts-promos/edit-discount/${i + Math.random()}`
                        )
                      }
                      className="text-left flex items-center gap-1.75 cursor-pointer"
                    >
                      <p>Edit</p>
                      <MdOutlineEdit color="#F3AE3D" size={20} />
                    </button>
                    <button className="text-left flex items-center gap-1.75 cursor-pointer">
                      <p>Delete</p>
                      <MdDeleteOutline color="#CF3636" size={20} />
                    </button>
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
