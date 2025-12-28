import { IoChevronDown } from "react-icons/io5";
import FoodCard from "../components/FoodCard";
import Select from "../components/Select";
import { useState } from "react";

export default function Menu() {
  const [category, setCategory] = useState("");

  return (
    <section className="lg:px-6 px-4 py-5 grid gap-5 h-full bg-white">
      <div className="flex lg:flex-row flex-col items-center gap-7.5">
        <Select
          name="category"
          placeholder="Chef's special"
          value={category}
          onChange={setCategory}
          options={[
            { label: "Chef's special", value: "chef-special" },
            { label: "Main course", value: "main" },
            { label: "Desserts", value: "dessert" },
            { label: "Drinks", value: "drinks" },
          ]}
        />

        <div className="flex items-center gap-4">
          <button className="font-semibold bg-accent text-white px-[22.5px] font-seravek rounded-md h-13.5 cursor-pointer transition">
            Create New Category
          </button>
          <button className="font-semibold bg-primary text-accent px-[22.5px] font-seravek rounded-md h-13.5 cursor-pointer transition">
            + Add Menu Item
          </button>
        </div>
      </div>
      <div className="mt-6.5 flex lg:flex-row flex-col lg:items-center justify-between">
        <h1 className="lg:text-[30px] text-2xl text-black font-bold leading-[100%] mb-7.5">
          Chef’s Specials Menu For You
        </h1>
        <div className="flex items-center">
          <button className="flex items-center p-3 text-xl leading-4.5 cursor-pointer">
            <p>Filter</p>
            <IoChevronDown className="text-xl" />
          </button>
          <div className="p-3 text-xl leading-4.5 block">
            <label htmlFor="sort">Sort By:</label>
            <select name="sort" id="sort">
              <option value="a-z">A-Z</option>
            </select>
          </div>
        </div>
      </div>
      <section className="flex flex-row flex-wrap gap-6">
        {Array.from({ length: 40 }, (_, i) => (
          <FoodCard key={i} />
        ))}
      </section>
    </section>
  );
}
