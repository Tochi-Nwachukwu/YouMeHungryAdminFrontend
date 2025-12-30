import { useState } from "react";
import Modal from "./Modal";
import Input from "./Input";
import { LuTrash } from "react-icons/lu";
import Select from "./Select";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function AdditionModal({ open, onClose }: Props) {
  const [addition, setAddition] = useState([
    {
      addition_types: [
        {
          name: "",
          cost: "",
        },
      ],
    },
  ]);

  const handleTypeChange = (
    index: number,
    field: "name" | "cost",
    value: string
  ) => {
    setAddition((prev) => {
      const updatedTypes = [...prev[0].addition_types];
      updatedTypes[index] = {
        ...updatedTypes[index],
        [field]: value,
      };

      return [
        {
          ...prev[0],
          addition_types: updatedTypes,
        },
      ];
    });
  };

  const removeType = (index: number) => {
    setAddition((prev) => [
      {
        ...prev[0],
        addition_types: prev[0].addition_types.filter((_, i) => i !== index),
      },
    ]);
  };

  const addAdditionType = () => {
    const types = addition[0].addition_types;
    const lastType = types[types.length - 1];

    if (!lastType.name.trim()) return;

    setAddition((prev) => [
      {
        ...prev[0],
        addition_types: [...prev[0].addition_types, { name: "", cost: "" }],
      },
    ]);
  };

  return (
    <Modal isOpen={open} onClose={onClose} title="Create Additions">
      <div className="w-full">
        <Select
          className="w-full"
          name="addition"
          options={[
            { label: "Mozarella - $2.00", value: "mozarella,2" },
            { label: "Burger - $2.00", value: "burger,2" },
          ]}
          btn
        />
      </div>

      <div className="mt-5 grid grid-cols-[2fr_1fr] gap-5">
        <p className="text-lg font-semibold text-black">Addition</p>
        <p className="text-lg font-semibold text-black">Extra Cost</p>
      </div>

      <div className="mt-2.5">
        <div className="space-y-3">
          {addition[0].addition_types.map((type, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="grid w-full grid-cols-[2fr_1fr] gap-2.5">
                <Input
                  placeholder="Addition name"
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

              <button
                onClick={() => removeType(index)}
                className="cursor-pointer text-lg text-[#CF3636] transition-transform duration-200 hover:scale-110"
              >
                <LuTrash />
              </button>
            </div>
          ))}
        </div>

        <button
          onClick={addAdditionType}
          className="mt-2.5 grid h-8 place-items-center rounded-md bg-primary px-[22.5px] font-semibold text-accent transition cursor-pointer"
        >
          + Add
        </button>
      </div>

      <div className="flex items-center justify-center mt-10">
        <button className="font-semibold grid place-items-center bg-accent text-white px-[22.5px] font-seravek rounded-md h-13.5 cursor-pointer transition">
          Save Changes
        </button>
      </div>
    </Modal>
  );
}
