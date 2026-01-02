import { useState } from "react";
import Modal from "./Modal";
import Input from "./Input";
import { LuTrash } from "react-icons/lu";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function VariationModal({ open, onClose }: Props) {
  const [variation, setVariation] = useState([
    {
      variation_name: "",
      variation_types: [
        {
          name: "",
          cost: "",
        },
      ],
    },
  ]);

  const handleVariationNameChange = (value: string) => {
    setVariation((prev) => [
      {
        ...prev[0],
        variation_name: value,
      },
    ]);
  };

  const handleTypeChange = (
    index: number,
    field: "name" | "cost",
    value: string
  ) => {
    setVariation((prev) => {
      const updatedTypes = [...prev[0].variation_types];
      updatedTypes[index] = {
        ...updatedTypes[index],
        [field]: value,
      };

      return [
        {
          ...prev[0],
          variation_types: updatedTypes,
        },
      ];
    });
  };

  const removeType = (index: number) => {
    setVariation((prev) => [
      {
        ...prev[0],
        variation_types: prev[0].variation_types.filter((_, i) => i !== index),
      },
    ]);
  };

  const addVariationType = () => {
    const types = variation[0].variation_types;
    const lastType = types[types.length - 1];

    if (!lastType.name.trim()) return;

    setVariation((prev) => [
      {
        ...prev[0],
        variation_types: [...prev[0].variation_types, { name: "", cost: "" }],
      },
    ]);
  };

  return (
    <Modal isOpen={open} onClose={onClose} title="Create Variations">
      <div>
        <label className="mb-2 block text-lg font-semibold text-black">
          Name
        </label>
        <input
          type="text"
          placeholder="Type"
          value={variation[0].variation_name}
          onChange={(e) => handleVariationNameChange(e.target.value)}
          className="h-13.75 w-full rounded border border-[#E1E1E1] px-4 outline-none focus:ring-2 focus:ring-[#F3AE3D]"
        />
      </div>

      <div className="mt-5 grid grid-cols-[2fr_1fr] gap-5">
        <p className="text-lg font-semibold text-black">Variation</p>
        <p className="text-lg font-semibold text-black">Cost</p>
      </div>

      <div className="mt-2.5">
        <div className="space-y-3">
          {variation[0].variation_types.map((type, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="grid w-full grid-cols-[2fr_1fr] gap-2.5">
                <Input
                  placeholder="Variation name"
                  value={type.name}
                  onChange={(e) =>
                    handleTypeChange(index, "name", e.target.value)
                  }
                  type="text"
                />
                <Input
                  placeholder="$0.00"
                  value={type.cost}
                  onChange={(e) =>
                    handleTypeChange(index, "cost", e.target.value)
                  }
                  type="text"
                />
              </div>

              {index > 0 && (
                <button
                  onClick={() => removeType(index)}
                  className="cursor-pointer text-lg text-[#CF3636] transition-transform duration-200 hover:scale-110"
                >
                  <LuTrash />
                </button>
              )}
            </div>
          ))}
        </div>

        <button
          onClick={addVariationType}
          className="mt-2.5 grid h-8 place-items-center rounded-md bg-primary px-[22.5px] font-semibold text-accent transition cursor-pointer"
        >
          + Add
        </button>
      </div>

      <div className="flex items-center justify-center mt-10">
        <button
          onClick={() => console.log(variation)}
          className="font-semibold grid place-items-center bg-accent text-white px-[22.5px] font-seravek rounded-md h-13.5 cursor-pointer transition"
        >
          Save Changes
        </button>
      </div>
    </Modal>
  );
}
