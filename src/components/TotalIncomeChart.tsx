import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { chartData } from "../utils/contant";

const filters = ["Daily", "Weekly", "Monthly", "Yearly"] as const;

export default function TotalIncomeChart() {
  const [active, setActive] = useState<(typeof filters)[number]>("Yearly");

  return (
    <div className="bg-white rounded-2xl p-6 w-full">
      <div className="flex lg:flex-row flex-col items-center justify-between mb-4 gap-3">
        <h2 className="lg:text-2xl text-lg font-semibold text-[#2B2B2B]">
          Total Income
        </h2>
        <div className="flex items-center gap-1 bg-[#F7F7F7] p-1 rounded-lg">
          {filters.map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`px-3 py-1.5 text-sm font-medium rounded-md transition cursor-pointer ${
                active === item
                  ? "bg-[#194128] text-white"
                  : "text-[#6B6B6B] hover:bg-white"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="h-65">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="h-full"
          >
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData[active]}>
                <defs>
                  <linearGradient
                    id="incomeGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="#194128" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="#194128" stopOpacity={0} />
                  </linearGradient>
                </defs>

                <XAxis
                  dataKey="label"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#8C8C8C", fontSize: 12 }}
                />

                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#8C8C8C", fontSize: 12 }}
                  tickFormatter={(v) => `${v / 1000}K`}
                />

                <Tooltip
                  cursor={{ strokeDasharray: "4 4" }}
                  contentStyle={{
                    borderRadius: 8,
                    border: "none",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                  }}
                />

                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#194128"
                  strokeWidth={2}
                  fill="url(#incomeGradient)"
                  isAnimationActive
                  animationDuration={900}
                  animationEasing="ease-out"
                  dot={false}
                  activeDot={{
                    r: 6,
                    fill: "#194128",
                    stroke: "#fff",
                    strokeWidth: 2,
                  }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
