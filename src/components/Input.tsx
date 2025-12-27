// import React from "react";

import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { IoMdClose, IoMdEye, IoMdEyeOff } from "react-icons/io";
import { IoCheckmarkCircle } from "react-icons/io5";

type InputProps = {
  label?: string;
  name: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: React.ReactNode;
};

export default function Input({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  icon,
}: InputProps) {
  return (
    <div>
      {label && (
        <label
          htmlFor={name}
          className="block mb-2.5 text-sm leading-5.5 font-seravek font-semibold"
        >
          {label}
        </label>
      )}

      <div className="relative">
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full h-13.5 border-[1.5px] border-[#E1E1E1] rounded-md p-5 font-seravek placeholder:text-[#CACACA] outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200 ${
            icon ? "pr-12" : ""
          }`}
        />

        {icon && (
          <div className="absolute text-primary text-xl -translate-y-1/2 top-1/2 right-5 pointer-events-none">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
}

export function PasswordInput({
  label,
  name,
  placeholder,
  value,
  onChange,
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      {label && (
        <label
          htmlFor={name}
          className="block mb-2.5 text-sm leading-5.5 font-seravek font-semibold"
        >
          {label}
        </label>
      )}

      <div className="relative">
        <input
          id={name}
          name={name}
          type={showPassword ? "text" : "password"}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full h-13.5 border-[1.5px] border-[#E1E1E1] rounded-md p-5 pr-12 font-seravek placeholder:text-[#CACACA] outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200"
        />

        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute top-1/2 right-5 -translate-y-1/2 text-primary text-xl cursor-pointer z-20"
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
        </button>
      </div>
    </div>
  );
}

type Option = {
  label: string;
  value: string;
};

type MultiSelectInputProps = {
  label?: string;
  placeholder?: string;
  options: Option[];
  value: string[];
  onChange: (values: string[]) => void;
};

export function MultiSelectInput({
  label,
  placeholder = "Select options",
  options,
  value,
  onChange,
}: MultiSelectInputProps) {
  const [open, setOpen] = useState(false);

  const toggleOption = (optionValue: string) => {
    if (value.includes(optionValue)) {
      onChange(value.filter((v) => v !== optionValue));
    } else {
      onChange([...value, optionValue]);
    }
  };

  const selectedLabels = options
    .filter((opt) => value.includes(opt.value))
    .map((opt) => opt.label)
    .join(", ");

  return (
    <div>
      {label && (
        <label className="block mb-2.5 text-sm leading-5.5 font-seravek font-semibold">
          {label}
        </label>
      )}

      <div
        onClick={() => setOpen(true)}
        className="w-full h-13.5 border-[1.5px] border-[#E1E1E1] rounded-md p-5 font-seravek flex items-center cursor-pointer placeholder:text-[#CACACA] focus-within:border-primary transition-all duration-200 relative"
      >
        <span className={selectedLabels ? "text-dark" : "text-[#CACACA]"}>
          {selectedLabels || placeholder}
        </span>
        <FaCaretDown className="text-2xl text-primary absolute right-15.5" />
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center">
          <div className="bg-white w-124.5 rounded-sm pb-7.25">
            <div className="flex items-center justify-between mb-4 border-b border-[#E1E1E1] p-5">
              <h3 className="font-semibold text-lg">Select Cuisine Type</h3>
              <button className="cursor-pointer" onClick={() => setOpen(false)}>
                <IoMdClose className="text-xl" />
              </button>
            </div>

            <div className="space-y-3 max-h-236 overflow-y-auto p-5">
              {options.map((option) => (
                <label
                  key={option.value}
                  className="flex items-center gap-5 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={value.includes(option.value)}
                    onChange={() => toggleOption(option.value)}
                    className="w-4 h-4 accent-primary cursor-pointer"
                  />
                  <span>{option.label}</span>
                </label>
              ))}
            </div>

            <div className="mt-6 flex justify-center">
              <button
                onClick={() => setOpen(false)}
                className="px-6 py-2 bg-accent w-[173.99px] text-white rounded-md"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

type DayHours = {
  open: string;
  close: string;
};

type Hours = Record<string, DayHours>;

type OperationHoursProps = {
  hours: Hours;
  setHours: React.Dispatch<React.SetStateAction<Hours>>;
  DAYS: string[];
};

export function OperationHours({ hours, setHours, DAYS }: OperationHoursProps) {
  const updateTime = (day: string, field: "open" | "close", value: string) => {
    setHours((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        [field]: value,
        day: day,
      },
    }));
  };

  const isComplete = (day: string) => hours[day].open && hours[day].close;

  return (
    <div className="grid gap-4">
      {DAYS.map((day) => (
        <div key={day}>
          <p className="mb-2 text-xl">{day}</p>

          <div className="relative flex items-center gap-3 hover:border-2 hover:border-primary duration-200 ease-in transition-all border-[1.5px] border-[#E1E1E1] rounded-md px-4 py-3">
            <input
              type="time"
              value={hours[day].open}
              onChange={(e) => updateTime(day, "open", e.target.value)}
              className="outline-none text-sm"
            />

            <span className="text-sm text-gray-400">—</span>

            <input
              type="time"
              value={hours[day].close}
              onChange={(e) => updateTime(day, "close", e.target.value)}
              className="outline-none text-sm"
            />

            {isComplete(day) && (
              <IoCheckmarkCircle className="ml-auto text-[#0C9D61] text-lg" />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

type SingleOption = {
  label: string;
  value: string;
};

type SingleSelectInputProps = {
  label?: string;
  placeholder?: string;
  options: SingleOption[];
  value: string | null;
  onChange: (value: string) => void;
};

export function SingleSelectInput({
  label,
  placeholder = "Select option",
  options,
  value,
  onChange,
}: SingleSelectInputProps) {
  const [open, setOpen] = useState(false);

  const selectedLabel = options.find((opt) => opt.value === value)?.label ?? "";

  return (
    <div>
      {label && (
        <label className="block mb-2.5 text-sm leading-5.5 font-seravek font-semibold">
          {label}
        </label>
      )}

      <div
        onClick={() => setOpen(true)}
        className="w-full h-13.5 border-[1.5px] border-[#E1E1E1] rounded-md p-5 font-seravek flex items-center cursor-pointer relative transition-all duration-200 focus-within:border-primary"
      >
        <span className={selectedLabel ? "text-dark" : "text-[#CACACA]"}>
          {selectedLabel || placeholder}
        </span>
        <FaCaretDown className="text-2xl text-primary absolute right-15.5" />
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center">
          <div className="bg-white w-124.5 rounded-sm pb-7.25">
            <div className="flex items-center justify-between border-b border-[#E1E1E1] p-5">
              <h3 className="font-semibold text-lg">{label}</h3>
              <button onClick={() => setOpen(false)}>
                <IoMdClose className="text-xl" />
              </button>
            </div>

            <div className="space-y-4 max-h-236 overflow-y-auto p-5">
              {options.map((option) => (
                <label
                  key={option.value}
                  className="flex items-center gap-5 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="single-select"
                    checked={value === option.value}
                    onChange={() => {
                      onChange(option.value);
                      setOpen(false);
                    }}
                    className="w-4 h-4 accent-primary cursor-pointer"
                  />
                  <span>{option.label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
