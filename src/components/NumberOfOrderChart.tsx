import {
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Bar,
} from "recharts";
import { HiChevronDown } from "react-icons/hi";
import { useState } from "react";
import { dailyData, monthlyData, weeklyData } from "../utils/contant";
import { motion } from "framer-motion";
import type { RectangleProps } from "recharts";

type View = "daily" | "weekly" | "monthly";

export default function NumberOfOrdersChart() {
  const [view, setView] = useState<View>("daily");
  const [open, setOpen] = useState(false);

  const dataMap = {
    daily: dailyData,
    weekly: weeklyData,
    monthly: monthlyData,
  };

  return (
    <div className="bg-white rounded-2xl lg:px-6 py-6 w-full">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-[#2B2B2B]">
          Number of Orders
        </h2>

        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2 text-sm font-medium text-[#6B6B6B] border border-[#E1E1E1] rounded-md px-3 py-1.5 hover:bg-gray-50"
          >
            {view.charAt(0).toUpperCase() + view.slice(1)}
            <HiChevronDown />
          </button>

          {open && (
            <div className="absolute right-0 mt-2 w-32 bg-white border border-[#E1E1E1] rounded-md shadow-lg overflow-hidden z-10">
              {(["daily", "weekly", "monthly"] as View[]).map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    setView(item);
                    setOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="h-65">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={dataMap[view]} barSize={12} key={view}>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#EDEDED"
            />

            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#8C8C8C", fontSize: 12 }}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#8C8C8C", fontSize: 12 }}
            />

            <Tooltip
              cursor={{ fill: "rgba(25,65,40,0.06)" }}
              contentStyle={{
                borderRadius: 8,
                border: "none",
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
              }}
            />

            <Bar
              dataKey="orders"
              shape={<AnimatedBar />}
              isAnimationActive={false}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

const AnimatedBar = ({ x, y, width, height }: RectangleProps) => {
  if (
    x === undefined ||
    y === undefined ||
    width === undefined ||
    height === undefined
  ) {
    return null;
  }

  return (
    <motion.rect
      x={x}
      y={y}
      width={width}
      height={height}
      rx={6}
      fill="#194128"
      style={{ transformOrigin: `${x + width / 2}px ${y + height}px` }}
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    />
  );
};
