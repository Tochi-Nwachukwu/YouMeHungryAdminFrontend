import { useState } from "react";
import ChatBox, { type Message } from "../components/ChatBox";
import { messagesAdmin } from "../utils/contant";
import GoBack from "../components/GoBack";
import Input from "../components/Input";
import { IoSearchOutline } from "react-icons/io5";

export default function RestaurantMessage() {
  const [chatMessages, setChatMessages] = useState<Message[]>(messagesAdmin);
  const [inputValue, setInputValue] = useState("");

  return (
    <section className="lg:px-6 px-4 py-5 h-full w-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-8.5">
          <GoBack />
          <h1 className="lg:text-[30px] text-2xl text-black font-bold leading-[100%]">
            Chat with Restaurant
          </h1>
        </div>
      </div>
      <section className="flex lg:flex-row flex-col gap-6.5 mt-5 lg:h-screen">
        <div className="flex-1 h-full bg-white rounded-[10px]">
          <div className="p-5">
            <Input placeholder="Search.." icon={<IoSearchOutline />} />
          </div>
          <div className="overflow-y-auto lg:h-full h-75 custom-scrollbar">
            {Array.from({ length: 40 }, (_, i) => (
              <button key={i} className="flex  p-5 gap-2 hover:bg-primary">
                <div className="w-10.5 h-10.5 rounded-full overflow-hidden">
                  <img
                    src="https://res.cloudinary.com/dadzpobvz/image/upload/v1767613417/bxasgxdyjdena6tcjw6t.png"
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
                <div className="text-left flex-1">
                  <p>McDonalds: Restaurant</p>
                  <p className="text-sm mt-2.5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lacus, nulla
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
        <div className="lg:w-[75%] h-fit w-full bg-white rounded-[10px] py-10.25 px-6">
          <div className="flex items-center gap-5 mb-7">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://res.cloudinary.com/dadzpobvz/image/upload/v1767613417/bxasgxdyjdena6tcjw6t.png"
                alt="profile image"
              />
            </div>
            <p className="text-[#404040] font-bold text-lg">
              McDonalds: Restaurant
            </p>
          </div>

          {/* chat box */}
          <div className="h-187.5 border-t border-[#C4C4C4]">
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
