import { PiCurrencyDollarSimpleFill } from "react-icons/pi";
import Stats from "../components/Stats";
import { HiCreditCard, HiMiniShoppingBag, HiUserGroup } from "react-icons/hi2";
import LatestOrder from "../components/LatestOrder";
import TotalIncomeChart from "../components/TotalIncomeChart";
import NumberOfOrdersChart from "../components/NumberOfOrderChart";
import { FaFileSignature } from "react-icons/fa";
import { IoManSharp, IoRestaurant } from "react-icons/io5";
import { FaCircleArrowUp } from "react-icons/fa6";

export default function Dashboard() {
  return (
    <section className="lg:px-6 px-4 py-5 grid gap-5 h-full">
      <h1 className="lg:text-[30px] text-2xl text-black font-bold leading-[100%]">
        Dashboard & Analytics
      </h1>
      <div className="grid gap-6 lg:grid-cols-4 grid-cols-1">
        <Stats
          title="Total Income"
          amount="$342.247"
          icon={<PiCurrencyDollarSimpleFill />}
          trends="up"
          value={6.5}
        />
        <Stats
          title="Income Today"
          amount="$12.145"
          icon={<HiCreditCard />}
          trends="down"
          value={2.4}
        />
        <Stats
          title="Orders Today"
          amount={214}
          icon={<HiMiniShoppingBag />}
          trends="up"
          value={4.2}
        />
        <Stats
          title="Total Orders"
          amount="2890"
          icon={<FaCircleArrowUp />}
          trends="up"
          value={5.5}
        />
        <Stats
          title="No. of Disputes"
          amount="214"
          icon={<FaFileSignature />}
          trends="down"
          value={2.4}
        />
        <Stats
          title="Active Drivers"
          amount="388"
          icon={<IoManSharp />}
          trends="up"
          value={2}
        />
        <Stats
          title="Active Restaurants"
          amount={512}
          icon={<IoRestaurant />}
          trends="up"
          value={1.2}
        />
        <Stats
          title="Customers"
          amount="2.14K"
          icon={<HiUserGroup />}
          trends="up"
          value={5.5}
        />
      </div>
      <div className="flex-1 w-full rounded-2xl bg-white grid place-items-center">
        <TotalIncomeChart />
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
        <div className="h-full rounded-2xl bg-white p-6 grid place-items-center">
          <NumberOfOrdersChart />
        </div>
        <LatestOrder />
      </div>
    </section>
  );
}
