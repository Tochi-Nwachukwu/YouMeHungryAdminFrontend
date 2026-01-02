import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { TfiAlert } from "react-icons/tfi";

interface Props {
  open: boolean;
  onClose: () => void;
  onLogout: () => void;
}

export default function LogoutModal({ open, onClose, onLogout }: Props) {
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
                className="absolute right-5 top-5 text-gray-400 hover:text-black"
              >
                <IoClose size={20} />
              </button>

              <div className="flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full">
                  <TfiAlert size={44} className="text-[#EC2D30]" />
                </div>
              </div>

              <h2 className="mt-4 text-center text-xl font-bold text-black">
                Log Out
              </h2>
              <p className="mt-2 text-center text-[#4B4B4B] text-sm">
                Are you sure you want to log out?
              </p>

              <div className="mt-8 flex items-center justify-center gap-4">
                <button
                  onClick={onClose}
                  className="h-12 w-40 rounded-lg bg-[#F4B63F] font-semibold text-black hover:opacity-90 cursor-pointer"
                >
                  Cancel
                </button>

                <button
                  onClick={onLogout}
                  className="h-12 w-40 rounded-lg bg-[#143D25] font-semibold text-white hover:opacity-90 cursor-pointer"
                >
                  Log Out
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
