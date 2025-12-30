import type { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoClose } from "react-icons/io5";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  custom?: string;
  children: ReactNode;
}

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  custom = "top-[30%]",
}: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/40"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className={`fixed ${custom} left-1/2 z-50 w-130 max-w-[90%] -translate-x-1/2 -translate-y-1/2 rounded bg-white shadow-xl`}
          >
            <div className="flex items-center justify-between border-b border-[#E1E1E1] px-6 py-4">
              <h2 className="lg:text-2xl text-lg font-semibold text-black">
                {title}
              </h2>
              <button
                onClick={onClose}
                className="text-xl text-black/70 cursor-pointer scale-100 hover:scale-110 duration-200 ease-in transition-all"
              >
                <IoClose />
              </button>
            </div>

            <div className="px-6 py-6">{children}</div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
