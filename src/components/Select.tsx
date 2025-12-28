import { useEffect, useRef, useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";

interface Option {
  label: string;
  value: string;
}

interface SelectProps {
  name?: string;
  placeholder?: string;
  options: Option[];
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}

export default function Select({
  name,
  placeholder = "Select option",
  options,
  value,
  onChange,
  className = "",
}: SelectProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className={`relative lg:w-129.5 w-full ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="w-full h-13.75 px-4 flex items-center justify-between rounded-[10px] border border-[#CACACA] bg-white text-left cursor-pointer outline-none
        "
      >
        <span className={selectedOption ? "text-black" : "text-[#8E8E8E]"}>
          {selectedOption?.label || placeholder}
        </span>

        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <IoChevronDown />
        </motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute z-50 mt-1 w-full rounded-[10px] border border-[#CACACA] bg-white shadow-lg overflow-hidden"
          >
            {options.map((option) => (
              <li
                key={option.value}
                onClick={() => {
                  onChange?.(option.value);
                  setOpen(false);
                }}
                className="px-4 py-3 text-sm cursor-pointer  hover:bg-[#F3AE3D]/40"
              >
                {option.label}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
      {name && <input type="hidden" name={name} value={value} />}
    </div>
  );
}
