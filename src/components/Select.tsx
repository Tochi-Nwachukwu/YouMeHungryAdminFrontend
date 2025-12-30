import { useEffect, useRef, useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";

interface Option {
  label: string;
  value: string;
}

interface SelectProps {
  btn?: boolean;
  name?: string;
  placeholder?: string;
  options: Option[];
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}

export default function Select({
  btn,
  name,
  placeholder = "Select option",
  options,
  value,
  onChange,
  className = "lg:w-129.5",
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
    <div ref={ref} className={`relative w-full ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="w-full h-13.75 px-4 flex items-center justify-between focus:ring-1 focus:ring-primary rounded-lg border border-[#CACACA] hover:border-primary bg-white text-left cursor-pointer outline-none
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
            className="absolute z-50 mt-1 py-2 w-full rounded-[10px] border border-[#CACACA] bg-white shadow-lg overflow-hidden"
          >
            {options.map((option) => (
              <div
                className="flex items-center justify-between pr-5 h-full"
                key={option.value}
              >
                <li
                  onClick={() => {
                    onChange?.(option.value);
                    setOpen(false);
                  }}
                  className="px-4 py-3 text-sm"
                >
                  {option.label}
                </li>
                {btn && (
                  <button className="grid text-sm h-8 place-items-center rounded-md bg-primary px-[22.5px] font-semibold text-accent transition cursor-pointer">
                    +Add
                  </button>
                )}
              </div>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
      {name && <input type="hidden" name={name} value={value} />}
    </div>
  );
}
