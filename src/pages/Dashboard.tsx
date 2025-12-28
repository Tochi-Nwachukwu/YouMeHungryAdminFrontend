import { PiCurrencyDollarSimpleFill } from "react-icons/pi";
import Stats from "../components/Stats";
import { HiCreditCard, HiMiniShoppingBag, HiUserGroup } from "react-icons/hi2";
import TopSelling from "../components/TopSelling";
import LatestOrder from "../components/LatestOrder";

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
          title="Customers"
          amount="2.14K"
          icon={<HiUserGroup />}
          trends="up"
          value={5.5}
        />
      </div>
      <div className="flex lg:flex-row flex-col gap-6">
        <div className="flex-1 w-full rounded-2xl bg-white grid place-items-center">
          ~ Graph here ~
        </div>
        <div className="lg:w-69.5 w-full h-82.5 rounded-2xl bg-white p-6">
          <p className="text-[#454545] text-xl font-semibold">
            Top Selling Item
          </p>
          <p className="mt-5 mb-7 text-accent w-54.25">
            The top ordered menu this week
          </p>

          <div className="grid gap-6">
            <TopSelling
              img="https://www.food.goglowonline.com/upload/1763728634tomato-mozzarella-pizza-FT-RECIPE0725-e7244e979c504188a049623668c15b2e.jpg"
              name="Cheese Burger"
              price="$150"
            />
            <TopSelling
              img="https://mojo.generalmills.com/api/public/content/iD9XDP4qRGCvhuXE9QVkxg_gmi_hi_res_jpeg.jpeg?v=ce3e36a9&t=eae6004af7d84bc5a9fa522ac84b14a8"
              name="Pizza Peperoni"
              price="$120"
            />
            <TopSelling
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIibPbOeDQQscm9g-fDNdCvROokQJukg8nYQ&s"
              name="Pizza Steak"
              price="$110"
            />
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
        <div className="h-full rounded-2xl bg-white p-6 grid place-items-center">
          ~ Graph here ~
        </div>
        <LatestOrder />
      </div>
    </section>
  );
}
