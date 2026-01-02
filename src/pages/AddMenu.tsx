import { useState } from "react";
import GoBack from "../components/GoBack";
import UploadImage from "../components/UploadImage";
import { uploadToCloudinary } from "../services/CloudinaryUpload";
import Input from "../components/Input";
import Select from "../components/Select";
import { LuTrash } from "react-icons/lu";
import { MdOutlineEdit } from "react-icons/md";
import VariationModal from "../components/VariationModal";
import AdditionModal from "../components/AdditionModal";
import RemoveItemModal from "../components/RemoveItemModal";

export default function AddMenu() {
  const [logoUrl, setLogoUrl] = useState<string | undefined>();
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState({
    variation: false,
    addition: false,
    remove: false,
  });

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setLoading(true);
      const url = await uploadToCloudinary(file);
      setLogoUrl(url);
    } catch (error) {
      console.error(error);
      alert("Failed to upload image");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="lg:px-6 px-4 py-5 h-full bg-white w-full">
      <div className="flex items-center gap-8.5">
        <GoBack />
        <h1 className="lg:text-[30px] text-2xl text-black font-bold leading-[100%]">
          Add Menu
        </h1>
      </div>

      <section>
        <div className="flex items-center justify-center mt-10 mb-10 lg:mt-0">
          <UploadImage
            imageUrl={logoUrl}
            loading={loading}
            onChange={handleImageUpload}
          />
        </div>
        {/* General info */}
        <section>
          <div className="grid lg:grid-cols-4 grid-cols-1 lg:gap-10.75 gap-5">
            <Input
              custom="text-lg font-normal"
              name="menu_name"
              label="Menu Name"
            />
            <Input custom="text-lg font-normal" name="price" label="Price" />
            <Input
              custom="text-lg font-normal"
              name="time"
              label="Preparation Time"
            />
            <div>
              <label
                className="block mb-2.5 leading-5.5 font-seravek text-lg font-normal"
                htmlFor="category"
              >
                Category
              </label>
              <Select
                name="category"
                placeholder="Chef's special"
                //    value={category}
                //    onChange={setCategory}
                options={[
                  { label: "Chef's special", value: "chef-special" },
                  { label: "Main course", value: "main" },
                  { label: "Desserts", value: "dessert" },
                  { label: "Drinks", value: "drinks" },
                ]}
              />
            </div>
          </div>

          <div className="flex lg:flex-row flex-col items-center lg:gap-10.75 gap-5 mt-6.25">
            <div className="lg:w-[80%] w-full">
              <label
                className="block mb-2.5 leading-5.5 font-seravek text-lg font-normal"
                htmlFor="description"
              >
                Menu Description
              </label>
              <textarea
                placeholder="Description..."
                className="w-full lg:h-13.5 border-[1.5px] border-[#E1E1E1] rounded-md p-5 font-seravek placeholder:text-[#CACACA] outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200"
              ></textarea>
            </div>

            <div className="w-full flex-1">
              <label
                className="block mb-2.5 leading-5.5 font-seravek text-lg font-normal"
                htmlFor="Status"
              >
                Status
              </label>
              <Select
                name="Status"
                placeholder="status"
                //    value={category}
                //    onChange={setCategory}
                options={[
                  { label: "Available", value: "available" },
                  { label: "Unavailable", value: "unavailable" },
                  { label: "Discontinued", value: "discontinued" },
                ]}
              />
            </div>
          </div>
        </section>
        {/* Variation */}
        <section className="mt-10.25">
          <div className="flex items-center justify-between lg:justify-start gap-8.5">
            <h1 className="lg:text-[30px] text-2xl text-black font-bold leading-[100%]">
              Variations
            </h1>
            <button
              onClick={() =>
                setModal((prev) => {
                  return { ...prev, variation: true };
                })
              }
              className="font-semibold grid place-items-center bg-primary text-accent px-[22.5px] font-seravek rounded-md h-13.5 cursor-pointer transition"
            >
              + Create
            </button>
          </div>

          <div className="py-4.25 px-6.5 bg-white shadow-[6px_6px_54px_0px_rgba(0,0,0,0.05)] rounded-lg mt-2">
            <div className="flex items-center justify-between mb-3.75">
              <p className="text-lg font-bold">Type</p>
              <div className="flex items-center gap-5">
                <button className="text-lg flex items-center gap-2 text-primary cursor-pointer scale-100 hover:scale-110 duration-200 ease-in transition-all">
                  <span className="text-black">Edit</span> <MdOutlineEdit />
                </button>
                <button className="text-lg flex items-center gap-2 text-[#CF3636] cursor-pointer scale-100 hover:scale-110 duration-200 ease-in transition-all">
                  <span className="text-black">Delete</span> <LuTrash />
                </button>
              </div>
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-8 gap-3">
              {Array.from({ length: 3 }, (_, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-full grid grid-cols-[2fr_1fr] gap-2.5">
                    <Input name="food" placeholder="variety name" />
                    <Input name="cost" placeholder="$0.00" />
                  </div>
                  <button
                    onClick={() => alert(`deleted from variety`)}
                    className="text-lg text-[#CF3636] cursor-pointer scale-100 hover:scale-110 duration-200 ease-in transition-all"
                  >
                    <LuTrash />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Addition */}
        <section className="mt-10.25">
          <div className="flex items-center justify-between lg:justify-start gap-8.5">
            <h1 className="lg:text-[30px] text-2xl text-black font-bold leading-[100%]">
              Additions
            </h1>
            <button
              onClick={() =>
                setModal((prev) => {
                  return { ...prev, addition: true };
                })
              }
              className="font-semibold grid place-items-center bg-primary text-accent px-[22.5px] font-seravek rounded-md h-13.5 cursor-pointer transition"
            >
              + Create
            </button>
          </div>

          <div className="py-4.25 px-6.5 bg-white shadow-[6px_6px_54px_0px_rgba(0,0,0,0.05)] rounded-lg mt-2 grid lg:grid-cols-3 grid-cols-1 gap-8">
            {Array.from({ length: 6 }, (_, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-full grid grid-cols-[2fr_1fr] gap-2.5">
                  <Input name="food" placeholder="addition name" />
                  <Input name="cost" placeholder="$0.00" />
                </div>
                <button
                  onClick={() => alert(` deleted from variety`)}
                  className="text-lg text-[#CF3636] cursor-pointer scale-100 hover:scale-110 duration-200 ease-in transition-all"
                >
                  <LuTrash />
                </button>
              </div>
            ))}
          </div>
        </section>
        {/* Removed Items */}
        <section className="mt-10.25">
          <div className="flex items-center justify-between lg:justify-start gap-8.5">
            <h1 className="lg:text-[30px] text-2xl text-black font-bold leading-[100%]">
              Items to Remove
            </h1>
            <button
              onClick={() =>
                setModal((prev) => {
                  return { ...prev, remove: true };
                })
              }
              className="font-semibold grid place-items-center bg-primary text-accent px-[22.5px] font-seravek rounded-md h-13.5 cursor-pointer transition"
            >
              + Create
            </button>
          </div>

          <div className="py-4.25 px-6.5 bg-white shadow-[6px_6px_54px_0px_rgba(0,0,0,0.05)] rounded-lg mt-2 grid lg:grid-cols-3 grid-cols-1 gap-8">
            {Array.from({ length: 3 }, (_, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-full grid grid-cols-[2fr_1fr] gap-2.5">
                  <Input name="food" placeholder="addition name" />
                  <Input name="cost" placeholder="$0.00" />
                </div>
                <button
                  onClick={() => alert(` deleted from variety`)}
                  className="text-lg text-[#CF3636] cursor-pointer scale-100 hover:scale-110 duration-200 ease-in transition-all"
                >
                  <LuTrash />
                </button>
              </div>
            ))}
          </div>
        </section>
      </section>
      <VariationModal
        open={modal.variation}
        onClose={() =>
          setModal((prev) => {
            return { ...prev, variation: false };
          })
        }
      />
      <AdditionModal
        open={modal.addition}
        onClose={() =>
          setModal((prev) => {
            return { ...prev, addition: false };
          })
        }
      />
      <RemoveItemModal
        open={modal.remove}
        onClose={() =>
          setModal((prev) => {
            return { ...prev, remove: false };
          })
        }
      />
    </section>
  );
}
