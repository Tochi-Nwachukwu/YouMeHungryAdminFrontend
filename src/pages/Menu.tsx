import { IoChevronDown } from "react-icons/io5";
import FoodCard from "../components/FoodCard";
import Select from "../components/Select";
import { useState } from "react";
import CreateCategoryModal from "../components/CreateCategoryModal";
import { NavLink } from "react-router-dom";
import CategoryCheckListModal from "../components/CategoryCheckListModal";

interface Option {
  label: string;
  value: string;
}

export default function Menu() {
  const [category, setCategory] = useState("");
  const [modal, setModal] = useState({
    addCategory: false,
    categoryList: false,
  });
  const [addNewCategory, setAddNewCategory] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [categoryList, setCategoryList] = useState([
    { label: "Chef's special", value: "chef-special" },
    { label: "Main course", value: "main" },
    { label: "Desserts", value: "dessert" },
    { label: "Drinks", value: "drinks" },
  ]);
  const [activeCategory, setActiveCategory] = useState<Option[]>([
    { label: "Chef's special", value: "chef-special" },
  ]);

  const saveCategory = () => {
    setLoading(true);
    setTimeout(() => {
      const newCategory = {
        label: addNewCategory,
        value: addNewCategory.toLowerCase(),
      };
      setCategoryList((prev) => {
        return [...prev, newCategory];
      });
      setModal({
        addCategory: false,
        categoryList: true,
      });
      setAddNewCategory("");
      setLoading(false);
    }, 5000);
  };

  return (
    <section className="lg:px-6 px-4 py-5 grid gap-5 h-full bg-white">
      <div className="flex lg:flex-row flex-col items-center gap-7.5">
        <Select
          name="category"
          placeholder="Chef's special"
          value={category}
          onChange={setCategory}
          options={activeCategory}
        />

        <div className="flex items-center gap-4">
          <button
            onClick={() =>
              setModal((prev) => {
                return {
                  ...prev,
                  addCategory: true,
                };
              })
            }
            className="font-semibold bg-accent text-white px-[22.5px] font-seravek rounded-md h-13.5 cursor-pointer transition"
          >
            Create New Category
          </button>
          <NavLink
            to="/menu/add-menu"
            className="font-semibold grid place-items-center bg-primary text-accent px-[22.5px] font-seravek rounded-md h-13.5 cursor-pointer transition"
          >
            + Add Menu Item
          </NavLink>
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
      <CreateCategoryModal
        loading={loading}
        open={modal.addCategory}
        value={addNewCategory}
        onChange={(e) => setAddNewCategory(e.target.value)}
        onSave={saveCategory}
        onClose={() =>
          setModal((prev) => {
            return {
              ...prev,
              addCategory: false,
            };
          })
        }
      />
      <CategoryCheckListModal
        value={activeCategory}
        onChange={setActiveCategory}
        options={categoryList}
        onSave={() =>
          setModal((prev) => ({
            ...prev,
            categoryList: false,
          }))
        }
        open={modal.categoryList}
        onClose={() =>
          setModal((prev) => ({
            ...prev,
            categoryList: false,
          }))
        }
      />
    </section>
  );
}
