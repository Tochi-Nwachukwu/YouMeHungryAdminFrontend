import { useRef, useState } from "react";
import onboarding from "../assets/onboarding.png";
import { IoArrowBack, IoLocationSharp } from "react-icons/io5";
import { MdOutlineChevronRight } from "react-icons/md";
import Input, {
  MultiSelectInput,
  OperationHours,
  SingleSelectInput,
} from "../components/Input";
import { HiOutlineMail, HiPhone } from "react-icons/hi";
import { bank, cuisineTypes } from "../utils/contant";
import { uploadToCloudinary } from "../services/CloudinaryUpload";
import {
  isTab1Valid,
  isTab2Valid,
  isTab3Valid,
  isTab4Valid,
} from "../utils/helperFunction";

type Hours = {
  [day: string]: {
    open: string;
    close: string;
  };
};

const DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export default function Onboarding() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [tab, setTab] = useState(0);
  const [cuisine, setCuisine] = useState<string[]>([]);
  const [bankType, setBankType] = useState<string | null>(null);
  const [hours, setHours] = useState<Hours>(() =>
    DAYS.reduce((acc, day) => {
      acc[day] = { open: "", close: "" };
      return acc;
    }, {} as Hours)
  );
  const [logoUrl, setLogoUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [restaurant, setRestaurant] = useState({
    name: "",
    address: "",
    contact: "",
    email: "",
    bank_name: "",
    account_number: "",
    account_type: "",
    routing_number: "",
  });

  const payload = {
    ...restaurant,
    cuisine: cuisine,
    account_type: bankType,
    hours: hours,
    img: logoUrl,
  };

  const tabValidators = [isTab1Valid, isTab2Valid, isTab3Valid, isTab4Valid];

  const isCurrentTabValid = () => {
    if (tab === 0 || tab === 5) return true;

    const validatorIndex = tab - 1;
    const validator = tabValidators[validatorIndex];

    if (!validator) return true;

    return validator(payload);
  };

  const isNextDisabled = !isCurrentTabValid();

  const next = () => {
    if (tab === 0) {
      setTab(1);
      return;
    }

    if (!isCurrentTabValid()) return;

    if (tab !== 5) {
      setTab((prev) => prev + 1);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setRestaurant((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setLoading(true);
      const url = await uploadToCloudinary(file);
      setLogoUrl(url);
    } catch (error) {
      console.error(error);
      alert("Failed to upload image");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full min-h-screen flex flex-col justify-center lg:items-center px-5 py-[77.5px]">
      <div
        className={`flex items-center justify-start ${
          tab === 5 ? "lg:w-274" : "lg:w-218"
        }`}
      >
        {tab > 0 && (
          <button
            onClick={() => setTab((prev) => Math.max(prev - 1, 0))}
            className="text-primary text-[30px] cursor-pointer"
          >
            <IoArrowBack />
          </button>
        )}
      </div>
      {tab === 0 && (
        <div className="grid place-items-center">
          <div>
            <div className="lg:w-133.25 w-75 lg:h-[414.03px] mx-auto">
              <img
                className="w-full h-full"
                src={onboarding}
                alt="onboarding"
              />
            </div>
            <p className="lg:text-[44px] text-2xl text-center font-medium font-seravek">
              Let’s get your restaurant ready!
            </p>
          </div>
        </div>
      )}
      {tab === 1 && (
        <div className="lg:w-218 w-full mx-auto">
          <div>
            <div className="mt-6.25">
              <p className="font-seravek lg:text-[44px] text-2xl font-semibold">
                Basic Information
              </p>
              <div className="grid place-items-center mt-6.25">
                <label className="cursor-pointer">
                  <div className="w-33.25 h-33.25 rounded-full border-[3px] border-accent flex items-center justify-center overflow-hidden">
                    {logoUrl ? (
                      <img
                        src={logoUrl}
                        alt="Logo"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-sm text-gray-400">
                        {loading ? "Uploading..." : "No Image"}
                      </span>
                    )}
                  </div>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    hidden
                  />
                </label>

                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="flex items-center cursor-pointer gap-2 mt-[14.75px]"
                >
                  <p className="text-lg font-seravek text-[#231F20]">
                    Upload Logo
                  </p>
                  <MdOutlineChevronRight className="text-xl text-primary" />
                </button>
              </div>

              <div className="mt-6.25 grid gap-6.25">
                <Input
                  label="Restaurant Name"
                  placeholder="restaurant_name"
                  name="name"
                  type="text"
                  value={restaurant?.name}
                  onChange={handleChange}
                />
                <MultiSelectInput
                  modalTitle="Select Cuisine Type"
                  label="Cuisine Type"
                  placeholder="Select Cuisine"
                  options={cuisineTypes}
                  value={cuisine}
                  onChange={setCuisine}
                />
              </div>
            </div>
          </div>
        </div>
      )}
      {tab === 2 && (
        <div className="lg:w-218 w-full mx-auto">
          <div>
            <div className="mt-6.25">
              <p className="font-seravek lg:text-[44px] text-2xl font-semibold">
                Location & Contact Details
              </p>

              <div className="mt-6.25 grid gap-6.25">
                <Input
                  label="Address"
                  placeholder="Address"
                  name="address"
                  type="text"
                  value={restaurant?.address}
                  onChange={handleChange}
                  icon={<IoLocationSharp />}
                />
                <Input
                  label="Contact Number"
                  placeholder="Phone Number"
                  name="contact"
                  type="text"
                  icon={<HiPhone />}
                  value={restaurant?.contact}
                  onChange={handleChange}
                />
                <Input
                  label="Email Address"
                  placeholder="info@examplegmail.com"
                  name="email"
                  type="email"
                  icon={<HiOutlineMail />}
                  value={restaurant?.email}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {tab === 3 && (
        <div className="lg:w-218 w-full mx-auto overflow-y-hidden">
          <div>
            <div className="mt-6.25">
              <p className="font-seravek lg:text-[44px] text-2xl font-semibold">
                Operating Hours
              </p>

              <div className="mt-6.25 grid gap-6.25">
                <OperationHours hours={hours} setHours={setHours} DAYS={DAYS} />
              </div>
            </div>
          </div>
        </div>
      )}

      {tab === 4 && (
        <div className="lg:w-218 w-full mx-auto">
          <div className="mt-6.25">
            <p className="font-seravek lg:text-[44px] text-2xl font-semibold">
              Banking & Payment
            </p>

            <div className="mt-6.25 grid gap-6.25">
              <Input
                label="Bank Name"
                placeholder="Chase"
                name="bank_name"
                type="text"
                value={restaurant?.bank_name}
                onChange={handleChange}
              />
              <Input
                label="Bank Account Number"
                placeholder="1234567890"
                name="account_number"
                type="text"
                value={restaurant?.account_number}
                onChange={handleChange}
              />
              <SingleSelectInput
                label="Account Type"
                options={bank}
                value={bankType}
                onChange={setBankType}
                placeholder="Select Account Type"
              />

              <Input
                label="Routing Number"
                placeholder="1234567890"
                name="routing_number"
                type="text"
                value={restaurant?.routing_number}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      )}
      {tab === 5 && (
        <div className="lg:w-274 w-full mx-auto">
          <div className="mt-6.25">
            <p className="font-seravek lg:text-[44px] text-2xl font-semibold">
              Review & Confirmation
            </p>
            <div className="border border-[#E1E1E1] mt-7.5 p-10">
              <p className="text-[35px] font-seravek font-semibold">
                Basic Information
              </p>

              <section className="mt-10">
                <div className="flex items-center justify-between h-25.5 border-[#E1E1E1] border-b">
                  <div className="">
                    <p className="text-[24px] font-seravek font-semibold leaing-[35.73px]">
                      Restaurant Name
                    </p>
                    <p className="text-[23.82px] leading-8.75">
                      {payload?.name}
                    </p>
                  </div>
                  <button className="w-18.75 h-8 bg-primary text-accent rounded-md font-semibold cursor-pointer">
                    Edit
                  </button>
                </div>

                <div className="flex items-center justify-between h-25.5 border-[#E1E1E1] border-b">
                  <div className="">
                    <p className="text-[24px] font-seravek font-semibold leaing-[35.73px]">
                      Cuisine Type
                    </p>
                    <p className="text-[23.82px] leading-8.75">
                      {payload?.cuisine}
                    </p>
                  </div>
                  <button className="w-18.75 h-8 bg-primary text-accent rounded-md font-semibold cursor-pointer">
                    Edit
                  </button>
                </div>

                <div className="grid place-items-center mt-12.5">
                  <label className="cursor-pointer">
                    <div className="w-33.25 h-33.25 rounded-full border-[3px] border-accent flex items-center justify-center overflow-hidden">
                      {logoUrl ? (
                        <img
                          src={logoUrl}
                          alt="Logo"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-sm text-gray-400">
                          {loading ? "Uploading..." : "No Image"}
                        </span>
                      )}
                    </div>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      hidden
                    />
                  </label>

                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="flex items-center cursor-pointer gap-2 mt-[14.75px]"
                  >
                    <p className="text-lg font-seravek text-[#231F20]">
                      Upload Logo
                    </p>
                    <MdOutlineChevronRight className="text-xl text-primary" />
                  </button>
                </div>
              </section>

              <section className="mt-12.5">
                <p className="text-[35px] font-seravek font-semibold">
                  Location & Contact Details
                </p>

                <section className="mt-10">
                  <div className="flex items-center justify-between h-25.5 border-[#E1E1E1] border-b">
                    <div className="">
                      <p className="text-[24px] font-seravek font-semibold leaing-[35.73px]">
                        Address
                      </p>
                      <p className="text-[23.82px] leading-8.75">
                        {payload?.address}
                      </p>
                    </div>
                    <button className="w-18.75 h-8 bg-primary text-accent rounded-md font-semibold cursor-pointer">
                      Edit
                    </button>
                  </div>

                  <div className="flex items-center justify-between h-25.5 border-[#E1E1E1] border-b">
                    <div className="">
                      <p className="text-[24px] font-seravek font-semibold leaing-[35.73px]">
                        Contact Number
                      </p>
                      <p className="text-[23.82px] leading-8.75">
                        {payload?.contact}
                      </p>
                    </div>
                    <button className="w-18.75 h-8 bg-primary text-accent rounded-md font-semibold cursor-pointer">
                      Edit
                    </button>
                  </div>

                  <div className="flex items-center justify-between h-25.5 border-[#E1E1E1] border-b">
                    <div className="">
                      <p className="text-[24px] font-seravek font-semibold leaing-[35.73px]">
                        Email Address
                      </p>
                      <p className="text-[23.82px] leading-8.75">
                        {payload?.email}
                      </p>
                    </div>
                    <button className="w-18.75 h-8 bg-primary text-accent rounded-md font-semibold cursor-pointer">
                      Edit
                    </button>
                  </div>
                </section>
              </section>

              <section className="mt-12.5">
                <p className="text-[35px] font-seravek font-semibold">
                  Operating Hours
                </p>

                <section className="mt-10">
                  {Object.entries(payload?.hours || {}).map(
                    ([day, item], i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between h-25.5 border-[#E1E1E1] border-b"
                      >
                        <div>
                          <p className="text-[24px] leading-[35.7px] font-semibold">
                            {day}
                          </p>
                          <p className="text-[24px] leading-[35.7px]">
                            {item.open} - {item.close}
                          </p>
                        </div>
                        <button className="w-18.75 h-8 bg-primary text-accent rounded-md font-semibold cursor-pointer">
                          Edit
                        </button>
                      </div>
                    )
                  )}
                </section>
              </section>

              <section className="mt-12.5">
                <p className="text-[35px] font-seravek font-semibold">
                  Banking & Payment
                </p>

                <section className="mt-10">
                  <div className="flex items-center justify-between h-25.5 border-[#E1E1E1] border-b">
                    <div className="">
                      <p className="text-[24px] font-seravek font-semibold leaing-[35.73px]">
                        Bank Name
                      </p>
                      <p className="text-[23.82px] leading-8.75">
                        {payload?.bank_name}
                      </p>
                    </div>
                    <button className="w-18.75 h-8 bg-primary text-accent rounded-md font-semibold cursor-pointer">
                      Edit
                    </button>
                  </div>

                  <div className="flex items-center justify-between h-25.5 border-[#E1E1E1] border-b">
                    <div className="">
                      <p className="text-[24px] font-seravek font-semibold leaing-[35.73px]">
                        Bank Account Number
                      </p>
                      <p className="text-[23.82px] leading-8.75">
                        {payload?.account_number}
                      </p>
                    </div>
                    <button className="w-18.75 h-8 bg-primary text-accent rounded-md font-semibold cursor-pointer">
                      Edit
                    </button>
                  </div>

                  <div className="flex items-center justify-between h-25.5 border-[#E1E1E1] border-b">
                    <div className="">
                      <p className="text-[24px] font-seravek font-semibold leaing-[35.73px]">
                        Account Type
                      </p>
                      <p className="text-[23.82px] leading-8.75">
                        {payload?.account_type}
                      </p>
                    </div>
                    <button className="w-18.75 h-8 bg-primary text-accent rounded-md font-semibold cursor-pointer">
                      Edit
                    </button>
                  </div>

                  <div className="flex items-center justify-between h-25.5 border-[#E1E1E1] border-b">
                    <div className="">
                      <p className="text-[24px] font-seravek font-semibold leaing-[35.73px]">
                        Routing Number
                      </p>
                      <p className="text-[23.82px] leading-8.75">
                        {payload?.routing_number}
                      </p>
                    </div>
                    <button className="w-18.75 h-8 bg-primary text-accent rounded-md font-semibold cursor-pointer">
                      Edit
                    </button>
                  </div>

                  <div className="flex items-center justify-between h-25.5 border-[#E1E1E1] border-b">
                    <div className="">
                      <p className="text-[24px] font-seravek font-semibold leaing-[35.73px]">
                        SWIFT Code
                      </p>
                      <p className="text-[23.82px] leading-8.75">
                        {/* {payload?.routing_number} */}CHASU33
                      </p>
                    </div>
                    <button className="w-18.75 h-8 bg-primary text-accent rounded-md font-semibold cursor-pointer">
                      Edit
                    </button>
                  </div>
                </section>
              </section>
            </div>
          </div>
        </div>
      )}

      <div className="lg:w-133.25 w-full mt-35 flex items-center gap-5.75">
        {tab > 0 && (
          <button
            type="button"
            onClick={() => setTab((prev) => Math.max(prev - 1, 0))}
            className="bg-primary text-accent font-semibold font-seravek w-full rounded-md h-13.5 cursor-pointer"
          >
            Back
          </button>
        )}
        <button
          onClick={next}
          disabled={isNextDisabled}
          className={`font-semibold font-seravek w-full rounded-md h-13.5 cursor-pointer transition
    ${
      isNextDisabled
        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
        : "bg-accent text-white"
    }
  `}
        >
          {tab === 5 ? "Confirm" : tab > 0 ? "next" : "Start Onboarding"}
        </button>
      </div>
    </section>
  );
}
