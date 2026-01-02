import { BiDotsHorizontalRounded } from "react-icons/bi";
import GoBack from "../components/GoBack";
import ItemBox from "../components/ItemBox";
import ChatBox, { type Message } from "../components/ChatBox";
import { useState } from "react";
import { messages } from "../utils/contant";
import { useSearchParams } from "react-router-dom";
import { PiForkKnifeBold } from "react-icons/pi";
import { IoClose, IoHomeSharp } from "react-icons/io5";

export default function OrderDetails() {
  const [searchParams] = useSearchParams();

  const isDelivery = searchParams.has("delivery");
  const isPickUp = searchParams.has("pick-up");
  const isOrder = searchParams.has("scheduled-order");

  const [chatMessages, setChatMessages] = useState<Message[]>(messages);
  const [inputValue, setInputValue] = useState("");
  const [messageMode, setMessageMode] = useState(false);

  return (
    <section className="lg:px-6 px-4 py-5 h-full w-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-8.5">
          <GoBack />
          <h1 className="lg:text-[30px] text-2xl text-black font-bold leading-[100%]">
            {isDelivery
              ? "Delivery Order"
              : isPickUp
              ? "Pick Up Order"
              : isOrder
              ? "Delivery Order"
              : null}
          </h1>
        </div>
      </div>
      <section className="flex lg:flex-row flex-col h-full gap-6.5 mt-5">
        <div className="flex-1 h-fit bg-white rounded-[10px] p-5">
          <div className="flex items-center justify-between">
            <p className="font-semibold lg:text-xl text-lg leading-[100%]">
              Dispute ID <span className="text-accent">#1234567</span>
            </p>

            <div className="flex items-center text-sm lg:text-base gap-5.75">
              <p>24/05/25</p>
              <p>3:15pm</p>
            </div>
          </div>
          <div className="py-5.5 px-3.25 rounded-[10px] border border-[#E1E1E1] mt-5.5">
            {/* order list */}
            <div className="w-full">
              <div className="flex items-center justify-between lg:px-11.25">
                <p className="font-semibold text-lg">Order List</p>
                <BiDotsHorizontalRounded className="text-[#8E8E8E]" />
              </div>
              <div className="mt-4.75">
                <div className="lg:px-11.25 grid grid-cols-[1.2fr_1fr_0.8fr_0.8fr] lg:grid-cols-[1.5fr_1fr_0.3fr_0.3fr] border-b border-[#E1E1E1] py-3.25">
                  <p>Item(s)</p>
                  <p>Qty</p>
                  <p>Price</p>
                  <p>Total</p>
                </div>
                <div>
                  {Array.from({ length: 4 }, (_, i) => (
                    <ItemBox key={i} />
                  ))}
                </div>
              </div>
              <div className="lg:px-11.25 mt-5 flex items-center justify-between">
                <button className="text-accent bg-primary px-9.75 py-3.75 rounded-[10px] font-semibold cursor-pointer hover:bg-primary/80 duration-200 ease-in transition-all">
                  Print Invoice
                </button>
                <div className="flex items-center gap-5">
                  <p className="text-[#8E8E8E] text-lg">Total</p>
                  <p className="font-semibold text-xl">$43.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {isPickUp && (
          <div className="lg:w-105 lg:min-h-screen w-full bg-white rounded-[10px] py-10.25 px-6">
            <div className="mb-5">
              <p className="text-[#404040] font-bold text-lg">
                Customer: Nwachukwu Kene
              </p>
              <button className="text-white bg-accent w-fit px-9 mt-5 py-3.75 rounded-[10px] font-semibold cursor-pointer hover:bg-primary/80 duration-200 ease-in transition-all">
                Call: +1 (555) 345-7890
              </button>

              <p className="flex items-center gap-6 text-xl font-semibold mt-5">
                <span className="text-[#8E8E8E]">Pickup Date:</span>
                <span>27/05/2025</span>
              </p>
              <p className="flex items-center gap-6 text-xl font-semibold mt-5">
                <span className="text-[#8E8E8E]">Pickup Time:</span>
                <span>16:05 PM</span>
              </p>
            </div>
          </div>
        )}
        {isOrder && (
          <div className="lg:w-105 lg:min-h-screen w-full bg-white rounded-[10px] py-10.25 px-6">
            <div className="mb-5">
              <p className="text-[#404040] font-bold text-lg">
                Customer: Nwachukwu Kene
              </p>
              <button className="text-white bg-accent w-fit px-9 mt-5 py-3.75 rounded-[10px] font-semibold cursor-pointer hover:bg-primary/80 duration-200 ease-in transition-all">
                Call: +1 (555) 345-7890
              </button>

              <p className="flex items-center gap-6 text-xl font-semibold mt-5">
                <span className="text-[#8E8E8E]">Scheduled Date:</span>
                <span>27/05/2025</span>
              </p>
              <p className="flex items-center gap-6 text-xl font-semibold mt-5">
                <span className="text-[#8E8E8E]">Scheduled Time:</span>
                <span>16:05 PM</span>
              </p>
            </div>
          </div>
        )}
        {isDelivery && (
          <div className="lg:w-105 h-full w-full bg-white rounded-[10px] py-10.25 px-6">
            <div className="flex items-center gap-5 mb-5">
              <p className="text-[#404040] font-bold text-lg">
                Nwachukwu Kene: Customer
              </p>
            </div>
            <p className="text-[#404040] font-bold text-lg mb-5">
              Duration: 43:32 mins
            </p>
            <button className="text-white bg-accent px-23 py-3.75 rounded-[10px] font-semibold cursor-pointer hover:bg-primary/80 duration-200 ease-in transition-all">
              Call: +1 (555) 345-7890
            </button>
            <div className="my-10 relative">
              <div className="flex relative items-center gap-3.75 z-20">
                <div className="w-[48.5px] h-[48.5px] rounded-full bg-[#EAEFFF] grid place-items-center text-accent">
                  <PiForkKnifeBold size={20} />
                </div>
                <div>
                  <p className="text-xl font-semibold">
                    Hunger Bowl Restaurant
                  </p>
                  <p className="text-accent">Sector 1 Beside Ghansoli Dmart</p>
                </div>
              </div>
              <div className="absolute rotate-90 z-10 text-[#E1E1E1] text-lg">
                --------
              </div>
              {/* home icone */}
              <div className="flex relative items-center gap-3.75 mt-10 z-20">
                <div className="w-[48.5px] h-[48.5px] rounded-full bg-[#EAEFFF] grid place-items-center text-accent">
                  <IoHomeSharp size={20} />
                </div>
                <div>
                  <p className="text-xl font-semibold">Paradise Apartment</p>
                  <p className="text-accent">Sector 1 Beside Ghansoli Dmart</p>
                </div>
              </div>
            </div>
            {messageMode ? (
              <div className="h-187.5 relative">
                <button
                  onClick={() => setMessageMode(false)}
                  className="text-[#F33A3A] absolute right-0 hover:scale-110 scale-100 cursor-pointer"
                >
                  <IoClose size={25} />
                </button>
                <ChatBox
                  messages={chatMessages}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onSend={() => {
                    if (!inputValue.trim()) return;

                    setChatMessages((prev) => [
                      ...prev,
                      {
                        id: prev.length + 1,
                        sender: "admin",
                        name: "McDonalds",
                        message: inputValue,
                        time: "16:21",
                      },
                    ]);

                    setInputValue("");
                  }}
                />
              </div>
            ) : (
              <div className="border border-[#E1E1E1] rounded-[10px] py-5 px-10">
                <p className="text-center text-xl font-semibold mb-5.75">
                  Assigned Driver
                </p>
                <div className="flex flex-col items-center gap-2.75 mb-7">
                  <div className="w-22.25 h-22.25 rounded-full overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src="https://randomuser.me/api/portraits/men/95.jpg"
                      alt="profile image"
                    />
                  </div>
                  <p className="text-[#404040] font-bold text-lg">
                    Nwachukwu Kene
                  </p>
                </div>
                <div>
                  <p className="flex items-center justify-between gap-6 text-sm">
                    <span className="text-[#8E8E8E]">Email</span>
                    <span>orjimiraclechukwuemeka@gmail.com</span>
                  </p>
                  <p className="flex items-center justify-between gap-6 text-sm mt-5">
                    <span className="text-[#8E8E8E]">Phone</span>
                    <span>+1 (555) 345-7890</span>
                  </p>
                </div>
                <div className="flex items-center gap-2.25 mt-10">
                  <button
                    onClick={() => setMessageMode(true)}
                    className="text-accent w-full bg-primary px-3 py-3.75 rounded-[10px] font-semibold cursor-pointer hover:bg-primary/80 duration-200 ease-in transition-all"
                  >
                    Send a Message
                  </button>

                  <a
                    href="tel:+15553457890"
                    className="text-white grid place-items-center w-full bg-accent px-3 py-3.75 rounded-[10px] font-semibold cursor-pointer duration-200 ease-in transition-all"
                  >
                    Make a Call
                  </a>
                </div>
              </div>
            )}
            <div className="border border-[#E1E1E1] rounded-[10px] py-5 px-10 mt-5.25 text-center">
              <p className="text-xl font-semibold">Hand Off Code: 9935</p>
            </div>
          </div>
        )}
      </section>
    </section>
  );
}
