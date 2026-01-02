import { motion, AnimatePresence } from "framer-motion";
import { FaRegCircleCheck } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function CodeSentModal({ open, onClose }: Props) {
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
            <div className="relative lg:w-105 w-87.5 rounded bg-white px-8 py-20 shadow-[6px_6px_54px_0px_rgba(0,0,0,0.05)]">
              <button
                onClick={onClose}
                className="absolute right-5 top-5 text-gray-400 hover:text-black cursor-pointer"
              >
                <IoClose size={20} />
              </button>

              <div className="flex justify-center">
                <div className="flex items-center justify-center rounded-full">
                  <FaRegCircleCheck size={91} className="text-[#0C9D61]" />
                </div>
              </div>

              <h2 className="mt-9 text-center text-xl font-bold text-black">
                Confirmation Code Sent
              </h2>
              <p className="mt-2 text-center text-[#4B4B4B] text-sm">
                A 4-digit verification code has been sent to your email
                (ad******@gmail.com)
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
