import { useState } from "react";
import GoBack from "../components/GoBack";
import Input, { MultiSelectInput } from "../components/Input";
import { cuisineTypes } from "../utils/contant";
import UploadImage from "../components/UploadImage";
import { uploadToCloudinary } from "../services/CloudinaryUpload";

export default function EditDicountAndPromo() {
  const [cuisine, setCuisine] = useState<string[]>([]);
  const [logoUrl, setLogoUrl] = useState<string | undefined>();
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState<string>("All");

  const selectFilter = (filter: string) => {
    setSelected(filter);
  };

  const filters = ["Product", "Acount"];

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
    <section className="lg:px-6 px-4 py-5 h-full w-full">
      <div className="flex items-center gap-8.5">
        <GoBack />
        <h1 className="lg:text-[30px] text-2xl text-black font-bold leading-[100%]">
          Edit Discount
        </h1>
      </div>

      <div className="w-full bg-white rounded-[14px] mt-5 px-5.25 py-7.5">
        <div className="flex lg:flex-row flex-col items-center gap-6.5 w-full">
          <Input custom="" label="Promo Name" />
          <Input custom="" label="Percentage Discount" />
          <MultiSelectInput
            custom=""
            modalTitle="Select Category"
            label="Category"
            placeholder="Select category"
            options={cuisineTypes}
            value={cuisine}
            onChange={setCuisine}
          />
        </div>
        <div className="grid lg:grid-cols-2 items-end gap-6 mt-6">
          <Input custom="" label="Coupon Code" />
          <button className="bg-accent cursor-pointer text-white font-semibold py-3.5 px-7.5 rounded-[10px] h-fit w-fit">
            Generate Code
          </button>
        </div>
        <div className="grid lg:grid-cols-2 items-end gap-6 mt-6">
          <Input custom="" label="Description" />
        </div>
        <div className="mt-6 flex lg:gap-24.5 gap-5">
          <p>Image:</p>
          <UploadImage
            custom="h-24 w-33"
            imageUrl={logoUrl}
            loading={loading}
            onChange={handleImageUpload}
          />
        </div>
        <div className="grid lg:grid-cols-2 items-end gap-6 mt-6">
          <Input custom="" label="Start Date" type="date" />
          <Input custom="" label="End Date" type="date" />
        </div>
        <div className="mt-7.5">
          <p className="mb-5">Applicable To</p>
          <div className="flex lg:flex-row flex-col lg:items-center lg:gap-23 gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                checked={selected === "All"}
                onChange={() => selectFilter("All")}
                className="w-4 h-4 rounded accent-[#F3AE3D]"
              />
              <span className="font-medium text-[#454545]">All</span>
            </label>

            {filters.map((filter) => (
              <label
                key={filter}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="radio"
                  checked={selected === filter}
                  onChange={() => selectFilter(filter)}
                  className="w-4 h-4 rounded accent-[#F3AE3D]"
                />
                <span className="font-medium text-[#454545]">{filter}</span>
              </label>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-5 mt-16 justify-center">
          <button className="text-accent lg:w-fit w-full bg-primary px-14 py-3.75 rounded-[10px] font-semibold cursor-pointer hover:bg-primary/80 duration-100 ease-in transition-all">
            Cancel
          </button>
          <button className="bg-accent lg:w-fit w-full text-white px-10.75 py-3.75 rounded-[10px] font-semibold cursor-pointer hover:bg-accent/80 duration-100 ease-in transition-all">
            Save
          </button>
        </div>
      </div>
    </section>
  );
}
