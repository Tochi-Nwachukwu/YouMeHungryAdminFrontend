import { RiCloseCircleLine } from "react-icons/ri";
import wallet from "../assets/pocket.png";
import bag from "../assets/bag.png";
import gear from "../assets/gear.png";

type NotificationType = "delivered" | "payment" | "dispute" | "cancelled";
type NotificationStatus = "new" | "system" | "read" | "unread";

interface NotificationBlockProps {
  type: NotificationType;
  title: string;
  time: string;
  text: string;
  status: NotificationStatus;
}

const typeIconMap: Record<Exclude<NotificationType, "cancelled">, string> = {
  delivered: bag,
  payment: wallet,
  dispute: gear,
};

const statusStyleMap: Record<NotificationStatus, string> = {
  new: "bg-accent text-white",
  system: "bg-accent text-white",
  read: "bg-[#FFEBEE] text-[#EC2D30]",
  unread: "bg-[#FFF2EE] text-[#F3AE3D]",
};

export default function NotificationBlock({
  type,
  title,
  time,
  text,
  status,
}: NotificationBlockProps) {
  return (
    <div className="flex justify-between gap-7 border-b border-[#E1E1E1] px-4.75 pt-4.75 pb-9.25">
      {type === "cancelled" ? (
        <div className="bg-[#FFEBEE] w-10 h-10 rounded-full text-[#EC2D30] text-2xl grid place-items-center">
          <RiCloseCircleLine />
        </div>
      ) : (
        <div className="bg-[#E5F5EC] w-10 h-10 rounded-full grid place-items-center">
          <img src={typeIconMap[type]} alt={type} className="w-6 h-6" />
        </div>
      )}

      <div className="flex flex-1 items-center justify-between">
        <div>
          <p className="text-black font-semibold leading-6.5">{title}</p>
          <p className="mt-1.25 text-[#8E8E8E]">{time}</p>
          <p className="mt-3.75">{text}</p>
        </div>

        <button
          className={`w-23.5 h-6.75 rounded text-xs capitalize ${statusStyleMap[status]}`}
        >
          {status}
        </button>
      </div>
    </div>
  );
}
