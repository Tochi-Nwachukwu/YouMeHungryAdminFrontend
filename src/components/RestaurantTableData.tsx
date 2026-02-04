import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import RestaurantDetailsModal from "./RestaurantDetailsModal";

type RestaurantTableData = {
  key: string | number;
  index: number;
};

export default function RestaurantTableData({
  key,
  index,
}: RestaurantTableData) {
  const [open, setOpen] = useState(false);

  return (
    <div
      role="button"
      key={key}
      className="grid lg:grid-cols-[0.3fr_1fr_1fr_1fr_1fr_0.5fr_0.3fr] grid-cols-[1fr_0.5fr_0.5fr] lg:text-sm text-xs bg-[#FAFAFA] rounded items-center py-2.5 px-5"
    >
      <p className="hidden lg:block">{1 + index}</p>
      <p>Victor Chukwuebuka</p>
      <p className="hidden lg:block">+1 2345 789 56788</p>
      <p>mcdonalds@gmail.com</p>
      <div className="text-[#F33A3A] bg-[#EC2D30]/15 w-fit py-1.5 lg:px-4.75 px-2 font-semibold rounded">
        <p>Deleted</p>
      </div>
      <button
        onClick={() => setOpen(true)}
        className="px-7.5 py-2 rounded font-semibold text-white bg-accent w-fit cursor-pointer hidden lg:block"
      >
        View
      </button>
      <BsThreeDotsVertical className="hidden lg:block" />
      <RestaurantDetailsModal
        id={index}
        open={open}
        onClose={() => setOpen(false)}
        handleSendInvite={() => console.log()}
      />
    </div>
  );
}
