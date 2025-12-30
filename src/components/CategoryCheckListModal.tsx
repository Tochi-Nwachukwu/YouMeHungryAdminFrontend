import Modal from "./Modal";
import { LuTrash } from "react-icons/lu";

interface Option {
  label: string;
  value: string;
}

interface Props {
  open: boolean;
  value: Option[];
  options: Option[];
  onClose: () => void;
  onSave: () => void;
  onChange: (values: Option[]) => void;
}

export default function CategoryCheckListModal({
  open,
  onClose,
  onSave,
  options,
  onChange,
  value,
}: Props) {
  const toggleOption = (option: Option) => {
    const exists = value.some((v) => v.value === option.value);

    if (exists) {
      onChange(value.filter((v) => v.value !== option.value));
    } else {
      onChange([...value, option]);
    }
  };

  return (
    <Modal isOpen={open} onClose={onClose} title="Category">
      <div>
        <div className="max-h-236 grid gap-5 overflow-y-auto overflow-x-hidden">
          {options.map((option) => {
            const checked = value.some((v) => v.value === option.value);

            return (
              <div
                key={option.value}
                className="flex items-center justify-between"
              >
                <label className="flex cursor-pointer items-center gap-5">
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => toggleOption(option)}
                    className="h-4 w-4 cursor-pointer accent-primary"
                  />
                  <span>{option.label}</span>
                </label>
                <button
                  onClick={() => alert(`${option.label} deleted from category`)}
                  className="text-lg text-[#CF3636] cursor-pointer scale-100 hover:scale-110 duration-200 ease-in transition-all"
                >
                  <LuTrash />
                </button>
              </div>
            );
          })}
        </div>

        <div className="mt-12.5 flex justify-center">
          <button
            onClick={onSave}
            className="h-12 w-55 cursor-pointer rounded-[10px] bg-[#143D25] font-semibold text-white hover:opacity-90"
          >
            Continue
          </button>
        </div>
      </div>
    </Modal>
  );
}
