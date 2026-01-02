import { HiArrowLongDown, HiArrowLongUp } from "react-icons/hi2";
import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

type Trend = "up" | "down";

interface StatsProps {
  trends?: Trend;
  link?: string;
  value?: number;
  amount: number | string;
  title: string | ReactNode;
  custom?: string;
  icon?: ReactNode;
}

export default function Stats({
  trends,
  value,
  amount,
  title,
  icon,
  link,
  custom = "text-[#8C8C8C] font-semibold",
}: StatsProps) {
  const isUp = trends === "up";
  const navigate = useNavigate();

  return (
    <div
      role="button"
      onClick={() => {
        if (link) navigate(link);
      }}
      className={`${
        link && "cursor-pointer"
      } w-full h-fit rounded-2xl bg-white p-6`}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className={`${custom}`}>{title}</p>
          <p className="text-[#454545] text-2xl font-semibold mt-2">{amount}</p>
        </div>

        <div className="w-12.25 h-12.25 bg-[#EEFCFC] text-accent text-2xl grid place-items-center rounded-lg">
          {icon}
        </div>
      </div>

      {trends && (
        <div className="mt-6">
          <div className="flex items-center">
            <div className="text-xl">
              {isUp ? (
                <HiArrowLongUp className="text-accent" />
              ) : (
                <HiArrowLongDown className="text-[#F33A3A]" />
              )}
            </div>

            <p className="font-semibold text-sm leading-[100%] text-[#A2A2A2]">
              <span className={isUp ? "text-accent" : "text-[#F33A3A]"}>
                {value}%
              </span>{" "}
              Since Last Week
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
