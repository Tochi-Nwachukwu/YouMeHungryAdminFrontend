// import React from "react";

import { IoStarSharp } from "react-icons/io5";

export default function FoodCard() {
  return (
    <div className="p-2.25 lg:w-[15%] h-77.75 rounded-[9.35px] border border-[#E1E1E1]">
      <div className="w-full h-[157.97px] rounded-t-[9.35px] overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src="https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/M6HASPARCZHYNN4XTUYT7H6PTE.jpg&w=800&h=600"
          alt="food"
        />
      </div>
      <div className="p-2.25 grid gap-[14.02px]">
        <div className="text-lg text-accent font-semibold leading-[100%] flex items-center justify-between">
          <p>Grill Sandwich</p>
          <p>$ 30.00</p>
        </div>
        <p className="text-[#4B4B4B]">
          Beartroot, Potato, Bell Pepper, Sandwich Hasala.
        </p>
        <div className="flex items-center gap-2.75">
          <IoStarSharp color="#FE9B0E" />
          <p className="text-[#4B4B4B] font-semibold">4.3</p>
        </div>
      </div>
    </div>
  );
}
