import { BiDotsHorizontalRounded } from "react-icons/bi";
import GoBack from "../components/GoBack";
import ItemBox from "../components/ItemBox";
import ChatBox, { type Message } from "../components/ChatBox";
import { useState } from "react";
import { messages } from "../utils/contant";

export default function DisputeResolutionDetails() {
  const [chatMessages, setChatMessages] = useState<Message[]>(messages);
  const [inputValue, setInputValue] = useState("");

  return (
    <section className="lg:px-6 px-4 py-5 h-full w-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-8.5">
          <GoBack />
          <h1 className="lg:text-[30px] text-2xl text-black font-bold leading-[100%]">
            Order in Dispute
          </h1>
        </div>
        <button className="px-6 py-2 rounded font-semibold text-white bg-accent w-fit cursor-pointer hidden lg:block">
          Resolve Dispute
        </button>
      </div>
      <section className="flex lg:flex-row flex-col gap-6.5 mt-5">
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
        <div className="lg:w-105 h-fit w-full bg-white rounded-[10px] py-10.25 px-6">
          <div className="flex items-center gap-5 mb-7">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://randomuser.me/api/portraits/men/95.jpg"
                alt="profile image"
              />
            </div>
            <p className="text-[#404040] font-bold text-lg">
              Nwachukwu Kene: Customer
            </p>
          </div>
          <button className="text-accent bg-primary px-23 py-3.75 rounded-[10px] font-semibold cursor-pointer hover:bg-primary/80 duration-200 ease-in transition-all">
            In Dispute
          </button>

          {/* chat box */}
          <div className="h-187.5">
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
        </div>
      </section>
    </section>
  );
}
