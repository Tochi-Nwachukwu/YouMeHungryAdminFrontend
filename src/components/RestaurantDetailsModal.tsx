import { PiPhoneBold } from "react-icons/pi";
import Modal from "./Modal";
import { RiStarSFill } from "react-icons/ri";
import { AiFillCheckCircle } from "react-icons/ai";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineWarningAmber,
} from "react-icons/md";
import { FaPencilAlt } from "react-icons/fa";
import { IoTrashOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { BsChatTextFill } from "react-icons/bs";

interface Props {
  open: boolean;
  id: string | number;
  onClose: () => void;
  handleSendInvite: () => void;
}

export default function RestaurantDetailsModal({ open, onClose, id }: Props) {
  return (
    <Modal
      custom="top-[50%]"
      isOpen={open}
      onClose={onClose}
      title="Restaurant Details"
    >
      <div className="lg:w-209.5 text-base">
        <div className="">
          {/* name of restaurant */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-5.5">
              <div className="w-23.5">
                <div className="w-15 h-15 mx-auto rounded-full overflow-hidden">
                  <img
                    src="https://res.cloudinary.com/dadzpobvz/image/upload/v1767613417/bxasgxdyjdena6tcjw6t.png"
                    alt="logo"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div>
                <p className="text-2xl font-semibold">McDonald's</p>
                <div className="text-primary bg-primary/15 w-fit py-1.5 lg:px-3 px-2 font-semibold rounded text-xs mt-2.5">
                  <p>Pending Approval</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3.75">
              <div className="w-9 h-9 grid place-items-center bg-accent rounded text-xl">
                <PiPhoneBold color="white" />
              </div>
              <p className="text-base">+1 2345 789 56788</p>
            </div>
          </div>

          <div className="flex flex-row gap-5.5 mt-3.25">
            <div className="w-23.5">
              <div className="flex items-center gap-1.75">
                <RiStarSFill className="text-primary text-xl" />
                <p className="text-black font-semibold">No rating</p>
              </div>
            </div>
            <div className="flex-1 grid gap-4">
              <div>
                <p className="text-lg text-[#8E8E8E] font-semibold">
                  Basic Information
                </p>
                <div className="grid grid-cols-3 mt-4 gap-4">
                  <div className="text-sm text-black">
                    <p className="font-semibold">First Name</p>
                    <p>Miracle</p>
                  </div>
                  <div className="text-sm text-black">
                    <p className="font-semibold">Last Name</p>
                    <p>Chukwuemeka</p>
                  </div>
                  <div className="text-sm text-black">
                    <p className="font-semibold">Contact Number</p>
                    <p>+1 2345 789 56788</p>
                  </div>
                  <div className="text-sm text-black">
                    <p className="font-semibold">Email Address</p>
                    <p>mcdonalds@example.com</p>
                  </div>
                  <div className="text-sm text-black">
                    <p className="font-semibold">Business Name</p>
                    <p>McDonald’s</p>
                  </div>
                  <div className="text-sm text-black">
                    <p className="font-semibold">Business Address</p>
                    <p>110 N. Carpenter St, Chicago, IL 60607</p>
                  </div>
                  <div className="text-sm text-black">
                    <p className="font-semibold">Cuisine Type</p>
                    <p>-</p>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-lg text-[#8E8E8E] font-semibold">
                  Banking & Payment
                </p>
                <div className="grid grid-cols-3 mt-4 gap-4">
                  <div className="text-sm text-black">
                    <p className="font-semibold">Bank Name</p>
                    <p>Chase</p>
                  </div>
                  <div className="text-sm text-black">
                    <p className="font-semibold">Bank Account Number</p>
                    <p>1413258248</p>
                  </div>
                  <div className="text-sm text-black">
                    <p className="font-semibold">Account Type</p>
                    <p>Savings</p>
                  </div>
                  <div className="text-sm text-black">
                    <p className="font-semibold">Routing Number</p>
                    <p>02110000022</p>
                  </div>
                  <div className="text-sm text-black">
                    <p className="font-semibold">SWIFT Code</p>
                    <p>CHASU33</p>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-base font-bold">Action</p>
                <div className="flex flex-row flex-wrap items-center mt-4 gap-4">
                  <button className="flex items-center px-[22.5px] py-2 cursor-pointer bg-[#F5F5F5] hover:bg-[#e7e5e5] duration-150 transition-all ease-in gap-1 rounded">
                    <AiFillCheckCircle className="text-accent" size={16} />
                    <p className="text-sm">Approve Account</p>
                  </button>
                  <NavLink
                    to={`/restaurants/${id}/transaction-history`}
                    className="flex items-center px-[22.5px] py-2 cursor-pointer bg-[#F5F5F5] hover:bg-[#e7e5e5] duration-150 transition-all ease-in gap-1 rounded"
                  >
                    <p className="text-sm">View Transaction</p>
                    <MdOutlineKeyboardArrowRight
                      className="text-accent"
                      size={16}
                    />
                  </NavLink>
                  <NavLink
                    to={`/restaurants/${id}/order-history`}
                    className="flex items-center px-[22.5px] py-2 cursor-pointer bg-[#F5F5F5] hover:bg-[#e7e5e5] duration-150 transition-all ease-in gap-1 rounded"
                  >
                    <p className="text-sm">View Order History</p>
                    <MdOutlineKeyboardArrowRight
                      className="text-accent"
                      size={16}
                    />
                  </NavLink>
                  <NavLink
                    to={`/restaurants/${id}/reviews`}
                    className="flex items-center px-[22.5px] py-2 cursor-pointer bg-[#F5F5F5] hover:bg-[#e7e5e5] duration-150 transition-all ease-in gap-1 rounded"
                  >
                    <p className="text-sm">Reviews</p>
                    <MdOutlineKeyboardArrowRight
                      className="text-accent"
                      size={16}
                    />
                  </NavLink>
                  <NavLink
                    to={`/restaurants/${id}/message`}
                    className="flex items-center px-[22.5px] py-2 cursor-pointer bg-[#F5F5F5] hover:bg-[#e7e5e5] duration-150 transition-all ease-in gap-1 rounded"
                  >
                    <BsChatTextFill className="text-accent" size={16} />
                    <p className="text-sm">Message</p>
                  </NavLink>
                  <button className="flex items-center px-[22.5px] py-2 cursor-pointer bg-[#F5F5F5] hover:bg-[#e7e5e5] duration-150 transition-all ease-in gap-1 rounded">
                    <FaPencilAlt className="text-accent" size={16} />
                    <p className="text-sm">Edit info</p>
                  </button>
                  <button className="flex items-center px-[22.5px] py-2 cursor-pointer bg-[#F5F5F5] hover:bg-[#e7e5e5] duration-150 transition-all ease-in gap-1 rounded">
                    <MdOutlineWarningAmber className="text-primary" size={16} />
                    <p className="text-sm">Suspend Account</p>
                  </button>
                  <button className="flex items-center px-[22.5px] py-2 cursor-pointer bg-[#F5F5F5] hover:bg-[#e7e5e5] duration-150 transition-all ease-in gap-1 rounded">
                    <IoTrashOutline className="text-red-500" size={16} />
                    <p className="text-sm">Delete Account</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
