import { RiStarSFill } from "react-icons/ri";
import GoBack from "../components/GoBack";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function RestaurantReviews() {
  return (
    <section className="lg:px-6 px-4 py-5 h-full w-full">
      <div className="flex items-center gap-8.5">
        <GoBack />
        <h1 className="lg:text-[30px] text-2xl text-black font-bold leading-[100%]">
          Customer Reviews
        </h1>
      </div>

      <section className="h-full">
        <div className="w-full bg-white rounded-[14px] mt-5 px-5.25 py-7.5 grid lg:grid-cols-3 grid-cols-1 lg:gap-13.5 gap-5">
          {Array.from({ length: 40 }, (_, i) => (
            <div key={i} className="bg-[#F5F5F5] p-5 text-sm">
              <div className="flex items-center justify-between text-[#4B4B4B]">
                <p>06/03/2025</p>
                <p>2:01 PM</p>
              </div>
              <div className="mt-5">
                <p className="font-semibold">
                  "Delicious food and quick delivery!"
                </p>
                <p>
                  I ordered the grilled chicken pasta and a side of sweet potato
                  fries — everything was fresh, well-packaged, and still warm
                  when it arrived. The flavors were spot-on, and the portion
                  size was generous. Delivery came 10 minutes earlier than
                  expected, which was a nice surprise.
                </p>
                <div className="mt-5 flex items-center justify-between">
                  <p>– Chinedu A.</p>
                  <div>
                    <div className="flex items-center gap-1.75">
                      <RiStarSFill className="text-primary text-xl" />
                      <p className="text-black font-semibold">4.5/5</p>
                    </div>
                  </div>
                </div>
                <button className="mt-5 bg-white flex items-center gap-1 px-4 py-3 rounded cursor-pointer hover:drop-shadow-xs duration-150 ease-in transition-all">
                  View Order
                  <MdKeyboardArrowRight />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
