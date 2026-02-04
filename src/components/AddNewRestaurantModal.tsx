import Input from "./Input";
import Modal from "./Modal";

interface Props {
  open: boolean;
  onClose: () => void;
  handleSendInvite: () => void;
}

export default function AddNewRestaurantModal({
  open,
  onClose,
  handleSendInvite,
}: Props) {
  return (
    <Modal
      custom="top-[50%]"
      isOpen={open}
      onClose={onClose}
      title="Add New Restaurant"
    >
      <div className="lg:w-209.5">
        <div className="grid gap-5">
          <Input
            custom="text-lg font-bold"
            placeholder="McDonald’s"
            label="Restaurant Name"
          />
          <Input
            custom="text-lg font-bold"
            placeholder="110 N. Carpenter St, Chicago, IL 60607"
            label="Restaurant Address"
          />
          <Input
            custom="text-lg font-bold"
            placeholder="info@restaurant.com"
            label="Restaurant Email Address"
          />
          <Input
            custom="text-lg font-bold"
            placeholder="+1 (313) 2324 423"
            label="Contact Number"
          />
        </div>
        <div className="mt-12.5 flex justify-center">
          <button
            onClick={handleSendInvite}
            className="h-12 w-55 cursor-pointer rounded-[10px] bg-[#143D25] font-semibold text-white hover:opacity-90"
          >
            Send Invite Link
          </button>
        </div>
      </div>
    </Modal>
  );
}
