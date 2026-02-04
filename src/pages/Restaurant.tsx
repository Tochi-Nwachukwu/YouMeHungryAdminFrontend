import { useState } from "react";
import { MdChevronRight } from "react-icons/md";
import AddNewRestaurantModal from "../components/AddNewRestaurantModal";
import SuccessModal from "../components/SuccessModal";
import RestaurantTableData from "../components/RestaurantTableData";

export default function Restaurant() {
  const [modal, setModal] = useState(false);
  const [selected, setSelected] = useState<string>("All");
  const [successModal, setSuccessModal] = useState(false);

  const handleSendInvite = () => {
    setModal(false);
    setSuccessModal(true);
  };

  const selectFilter = (filter: string) => {
    setSelected(filter);
  };

  const filters = ["Pending Approval", "Deleted", "Suspended", "Active"];
  return (
    <section className="lg:px-6 px-4 py-5 h-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-8.5">
          <h1 className="lg:text-[30px] text-2xl text-black font-bold leading-[100%]">
            Restaurants
          </h1>
        </div>
        <button
          onClick={() => setModal(true)}
          className="px-6 py-2 rounded font-semibold text-white bg-accent w-fit cursor-pointer hidden lg:block"
        >
          + Add New Restaurant
        </button>
      </div>

      <div className="w-full bg-white rounded-[14px] mt-5 px-5.25 py-7.5">
        <div>
          <div className="h-[47.5px] flex lg:flex-row flex-col lg:items-center justify-between mb-6.25">
            <div className="flex items-center gap-5">
              <p className="font-semibold">
                Restaurants <span className="font-normal">(254,990)</span>
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
            <div className="grid lg:grid-cols-[0.3fr_1fr_1fr_1fr_1fr_0.5fr_0.3fr] grid-cols-[1fr_1fr_0.5fr] text-sm text-[#8E8E8E] px-5">
              <p className="hidden lg:block">Id</p>
              <p>Name</p>
              <p className="hidden lg:block">Phone Number</p>
              <p>Email Address</p>
              <p>Status</p>
            </div>

            <div className="grid gap-4 mt-3 h-180 overflow-y-scroll pr-2 custom-scrollbar">
              {Array.from({ length: 40 }, (_, i) => (
                <RestaurantTableData index={i} key={i} />
              ))}
            </div>
          </section>
        </div>
      </div>
      <AddNewRestaurantModal
        open={modal}
        onClose={() => setModal(false)}
        handleSendInvite={handleSendInvite}
      />
      <SuccessModal
        open={successModal}
        onClose={() => setSuccessModal(false)}
        title="Invite Link Sent"
        text="You have successfully sent an invite link to McDonald’s Restaurant"
      />
    </section>
  );
}
