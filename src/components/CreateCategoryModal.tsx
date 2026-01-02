import { ClipLoader } from "react-spinners";
import Modal from "./Modal";

interface Props {
  open: boolean;
  loading: boolean;
  value: string | undefined;
  onClose: () => void;
  onSave: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function CreateCategoryModal({
  open,
  onClose,
  onSave,
  value,
  onChange,
  loading,
}: Props) {
  return (
    <Modal isOpen={open} onClose={onClose} title="Create New Category">
      <div>
        <div>
          <label className="mb-2 block text-lg font-semibold text-black">
            Name
          </label>
          <input
            type="text"
            placeholder="Chef’s Special"
            className="h-13.75 w-full rounded border border-[#E1E1E1] px-4 outline-none focus:ring-2 focus:ring-[#F3AE3D]"
            value={value}
            onChange={onChange}
          />
        </div>

        <div className="flex justify-center mt-12.5">
          <button
            onClick={onSave}
            className="h-12 w-55 flex items-center justify-center rounded-[10px] bg-[#143D25] font-semibold text-white hover:opacity-90 cursor-pointer"
          >
            Save Changes
            {loading && (
              <ClipLoader className="ml-2" color="#F3AE3D" size={16} />
            )}
          </button>
        </div>
      </div>
    </Modal>
  );
}
