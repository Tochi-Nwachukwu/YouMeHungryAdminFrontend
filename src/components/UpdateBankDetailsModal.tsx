import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { TfiAlert } from "react-icons/tfi";

interface Props {
  open: boolean;
  onClose: () => void;
  onVerify: () => void;
}

export default function UpdateBankDetailsModal({
  open,
  onClose,
  onVerify,
}: Props) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/40"
          />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center"
          >
            <div className="relative lg:w-105 w-87.5 rounded bg-white p-8 shadow-[6px_6px_54px_0px_rgba(0,0,0,0.05)]">
              <button
                onClick={onClose}
                className="absolute right-5 top-5 text-gray-400 hover:text-black cursor-pointer"
              >
                <IoClose size={20} />
              </button>

              <div className="flex justify-center">
                <div className="flex items-center justify-center rounded-full">
                  <TfiAlert size={88} className="text-[#EC2D30]" />
                </div>
              </div>

              <h2 className="mt-9 text-center text-xl font-bold text-black">
                Update Banking Details
              </h2>
              <p className="mt-2 text-center text-[#4B4B4B] text-sm">
                For security reasons, you will need to verify your identity
                before making changes to your banking information.
              </p>

              <div className="mt-9 flex items-center justify-center">
                <button
                  onClick={onVerify}
                  className="h-12 w-fit px-5 rounded-lg bg-[#143D25] font-semibold text-white hover:opacity-90 cursor-pointer"
                >
                  Continue to Verification
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
