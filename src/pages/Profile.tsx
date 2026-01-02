import { useRef, useState } from "react";
import { uploadToCloudinary } from "../services/CloudinaryUpload";
import { MdOutlineChevronRight } from "react-icons/md";
import Input, { PasswordInput } from "../components/Input";
import { FaLocationDot } from "react-icons/fa6";
import { motion } from "framer-motion";
import { LuTrash } from "react-icons/lu";
import Select from "../components/Select";
import { bank } from "../utils/contant";
import DeleteModal from "../components/DeleteModal";
import DeleteAccountConfirmationModal from "../components/DeleteAccountConfirmationModal";

export default function Profile() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [logoUrl, setLogoUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState({
    deleteAccount: false,
    confirmDelete: false,
  });
  const [enabled, setEnabled] = useState({
    email_alerts: false,
    notification: false,
  });

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
    <section className="lg:px-6 px-4 py-5 h-full">
      <h1 className="lg:text-[30px] text-2xl text-black font-bold leading-[100%]">
        Profile & Settings
      </h1>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-5">
        <div className="grid gap-6">
          <div className="w-full bg-white rounded-[10px] border border-[#E1E1E1] p-3.75">
            <p className="text-lg font-semibold">Profile Overview</p>

            <div className="mt-4.25">
              <div className="grid place-items-center mt-6.25">
                <label className="cursor-pointer">
                  <div
                    className={`${
                      logoUrl ? "" : "border-[3px] border-accent"
                    } w-22.25 h-22.25 rounded-full flex items-center justify-center overflow-hidden`}
                  >
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
                    Change Profile Picture
                  </p>
                  <MdOutlineChevronRight className="text-xl text-primary" />
                </button>
              </div>

              <div className="flex flex-col justify-center items-center mt-5">
                <p className="text-lg font-semibold">McDonald’s</p>
                <div className="mt-2.5 mb-5.5 bg-[#E1E1E1] text-[#4B4B4B] py-1.25 px-4 rounded">
                  <p>info@examplegmail.com </p>
                </div>
                <p className="text-lg">
                  <span className="font-semibold">Last Login:</span> 20/5/2025
                </p>
              </div>
            </div>
          </div>

          <div className="w-full bg-white rounded-[10px] border border-[#E1E1E1] p-3.75">
            <p className="text-lg font-semibold">Edit Business Info</p>
            <section className="grid gap-5 my-5">
              <Input
                label="Restaurant Name"
                name="name"
                placeholder="John Doe"
                type="text"
                custom=""
              />
              <Input
                label="Email Address"
                name="email"
                placeholder="example@email.com"
                type="email"
                custom=""
              />
              <Input
                label="Contact Number"
                name="contact_number"
                placeholder="(+1) 314 4323 432"
                type="text"
                custom=""
              />
              <Input
                label="Address"
                name="address"
                placeholder="110 N. Carpenter St, Chicago, IL 60607."
                type="address"
                icon={<FaLocationDot />}
                custom=""
              />
            </section>
            <div className="flex items-center justify-center mt-10">
              <button className="font-semibold grid place-items-center bg-accent text-white px-[87.5px] font-seravek rounded-md h-13.5 cursor-pointer transition">
                Save Changes
              </button>
            </div>
          </div>

          <div className="w-full bg-white rounded-[10px] border border-[#E1E1E1] p-3.75">
            <p className="text-lg font-semibold">Notifications</p>
            <section className="grid gap-5 my-5">
              <div className="flex items-center w-56.25 justify-between">
                <p>Email Alerts</p>
                <button
                  type="button"
                  onClick={() =>
                    setEnabled((prev) => {
                      return {
                        ...prev,
                        email_alerts: !enabled.email_alerts,
                      };
                    })
                  }
                  className={`relative flex h-6 w-11 cursor-pointer items-center rounded-full px-1 transition-colors ${
                    enabled.email_alerts ? "bg-[#143D25]" : "bg-[#D1D5DB]"
                  }`}
                >
                  <motion.span
                    layout
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    className="h-4 w-4 rounded-full bg-white shadow"
                    style={{
                      marginLeft: enabled.email_alerts ? "auto" : "0",
                    }}
                  />
                </button>
              </div>
              <div className="flex items-center w-56.25 justify-between">
                <p>In-App Notifications</p>
                <button
                  type="button"
                  onClick={() =>
                    setEnabled((prev) => {
                      return {
                        ...prev,
                        notification: !enabled.notification,
                      };
                    })
                  }
                  className={`relative flex h-6 w-11 cursor-pointer items-center rounded-full px-1 transition-colors ${
                    enabled.notification ? "bg-[#143D25]" : "bg-[#D1D5DB]"
                  }`}
                >
                  <motion.span
                    layout
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    className="h-4 w-4 rounded-full bg-white shadow"
                    style={{
                      marginLeft: enabled.notification ? "auto" : "0",
                    }}
                  />
                </button>
              </div>
            </section>
          </div>

          <div className="w-full bg-white rounded-[10px] border border-[#E1E1E1] p-3.75">
            <p className="text-lg font-semibold">Account Deletion</p>
            <div className="flex items-center w-56.25 justify-between mt-6.25">
              <p className="text-lg">Delete Account</p>
              <button
                onClick={() =>
                  setModal((prev) => {
                    return { ...prev, deleteAccount: true };
                  })
                }
                className="text-lg text-[#CF3636] cursor-pointer scale-100 hover:scale-110 duration-200 ease-in transition-all"
              >
                <LuTrash />
              </button>
            </div>
          </div>
        </div>

        {/* second grid */}
        <div className="grid gap-6">
          <div className="w-full bg-white rounded-[10px] border border-[#E1E1E1] p-3.75">
            <p className="text-lg font-semibold">Password & Security</p>
            <section className="grid gap-5 my-5">
              <PasswordInput
                name="old_password"
                label="Old  Password"
                type="password"
                placeholder="*********"
                custom=""
              />
              <PasswordInput
                name="new_password"
                label="New  Password"
                type="password"
                placeholder="*********"
                custom=""
              />
              <PasswordInput
                name="confirm_password"
                label="Confirm Password"
                type="password"
                placeholder="*********"
                custom=""
              />
            </section>
            <div className="flex items-center justify-center mt-10">
              <button className="font-semibold grid place-items-center bg-accent text-white px-[87.5px] font-seravek rounded-md h-13.5 cursor-pointer transition">
                Reset Password
              </button>
            </div>
          </div>

          <div className="w-full h-fit bg-white rounded-[10px] border border-[#E1E1E1] p-3.75">
            <p className="text-lg font-semibold">Edit Bank Account Details</p>
            <section className="grid gap-5 my-5">
              <Input
                label="Bank Name"
                name="bank"
                placeholder="Chase"
                type="text"
                custom=""
              />
              <Input
                label="Account Number"
                name="account_number"
                placeholder=""
                type="text"
                custom=""
              />
              <div>
                <label
                  htmlFor="account_type"
                  className="block mb-2.5 leading-5.5 font-seravek"
                >
                  Account Type
                </label>
                <Select className="w-full" name="addition" options={bank} />
              </div>
              <Input
                label="Routing Number"
                name="routing_number"
                placeholder=""
                type="text"
                custom=""
              />
            </section>
            <div className="flex items-center justify-center mt-10">
              <button className="font-semibold grid place-items-center bg-accent text-white px-[87.5px] font-seravek rounded-md h-13.5 cursor-pointer transition">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </section>
      <DeleteModal
        open={modal.deleteAccount}
        onClose={() =>
          setModal((prev) => {
            return { ...prev, deleteAccount: false };
          })
        }
        onDelete={() => {
          setModal({ deleteAccount: false, confirmDelete: true });
        }}
      />
      <DeleteAccountConfirmationModal
        open={modal.confirmDelete}
        onClose={() =>
          setModal((prev) => {
            return { ...prev, confirmDelete: false };
          })
        }
      />
    </section>
  );
}
