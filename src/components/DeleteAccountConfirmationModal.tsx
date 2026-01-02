import { PasswordInput } from "./Input";
import Modal from "./Modal";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function DeleteAccountConfirmationModal({
  open,
  onClose,
}: Props) {
  return (
    <Modal
      custom="top-1/2"
      isOpen={open}
      onClose={onClose}
      title="Delete Account"
    >
      <div>
        <p className="mb-11.5 text-xl font-semibold">
          Enter Password to Confirm Account Deletion
        </p>
        <div>
          <PasswordInput
            placeholder="*******"
            custom=""
            label="Enter Password"
          />
        </div>

        <div className="flex justify-center mt-12.5">
          <button className="h-12 w-55 flex items-center justify-center rounded-[10px] bg-[#143D25] font-semibold text-white hover:opacity-90 cursor-pointer">
            Delete
            {/* {loading && (
              <ClipLoader className="ml-2" color="#F3AE3D" size={16} />
            )} */}
          </button>
        </div>
      </div>
    </Modal>
  );
}
