import { VscSend } from "react-icons/vsc";

export interface Message {
  id: number;
  sender: "customer" | "admin";
  name: string;
  message: string;
  time: string;
  avatar?: string;
}

interface ChatBoxProps {
  messages: Message[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSend: () => void;
}

export default function ChatBox({
  messages,
  value,
  onChange,
  onSend,
}: ChatBoxProps) {
  return (
    <div className="flex h-full flex-col justify-between bg-white">
      <div className="custom-scrollbar flex-1 space-y-4 overflow-y-auto mt-6 mb-9">
        <p className="text-center text-xs text-gray-400">Today</p>

        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${
              msg.sender === "admin" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`flex max-w-[80%] gap-3 ${
                msg.sender === "admin" ? "flex-row-reverse" : ""
              }`}
            >
              {msg.avatar && (
                <img
                  src={msg.avatar}
                  alt={msg.name}
                  className="h-8 w-8 rounded-full object-cover"
                />
              )}

              <div>
                <div
                  className={`rounded-2xl px-4 py-3 text-sm ${
                    msg.sender === "admin"
                      ? "bg-accent text-white"
                      : "bg-[#EEEEEE] text-black"
                  }`}
                >
                  <p className="font-semibold mb-1">
                    {msg.sender === "admin"
                      ? `${msg.name} (You)`
                      : `${msg.name}: Customer`}
                  </p>
                  <p>{msg.message}</p>
                  <p className="mt-1 text-right text-xs text-gray-400">
                    {msg.time}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="">
        <div className="flex items-center gap-3 rounded-xl border px-4 hover:border-accent hover:ring-1 hover:ring-accent transition-all duration-200">
          <input
            type="text"
            value={value}
            onChange={onChange}
            placeholder="Type a new message here"
            className="flex-1 outline-none text-sm h-16.75"
          />
          <button
            onClick={onSend}
            className="text-[#143D25] hover:opacity-80 cursor-pointer"
          >
            <VscSend size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
