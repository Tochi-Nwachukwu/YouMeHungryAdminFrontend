// import React from 'react'

import { useState } from "react";
import GoBack from "../components/GoBack";
import Input from "../components/Input";
import { bank } from "../utils/contant";
import AccountChangedSuccessModal from "../components/AccountChangedSuccessModal";
import Select from "../components/Select";

export default function ChangeBank() {
  const [modal, setModal] = useState(false);

  return (
    <section className="lg:px-6 px-4 py-5 min-h-screen bg-white w-full">
      <div className="flex items-center gap-8.5">
        <GoBack />
        <h1 className="lg:text-[30px] text-2xl text-black font-bold leading-[100%]">
          Change Bank Details
        </h1>
      </div>
      <div className="mt-11.5">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
          <Input label="Bank Name" />
          <Input label="Bank Account Number" />
          <div>
            <label
              htmlFor="account_type"
              className="block mb-2.5 leading-5.5 font-seravek"
            >
              Account Type
            </label>
            <Select className="w-full" name="addition" options={bank} />
          </div>
          <Input label="Routing Number" />
        </div>

        <div className="flex items-center gap-5 mt-34.5 justify-center">
          <button className="text-accent w-fit bg-primary px-14 py-3.75 rounded-[10px] font-semibold cursor-pointer hover:bg-primary/80 duration-100 ease-in transition-all">
            Cancel
          </button>
          <button
            onClick={() => setModal(true)}
            className="bg-accent w-fit text-white px-10.75 py-3.75 rounded-[10px] font-semibold cursor-pointer hover:bg-accent/80 duration-100 ease-in transition-all"
          >
            Save Changes
          </button>
        </div>
      </div>
      <AccountChangedSuccessModal
        open={modal}
        onClose={() => setModal(false)}
      />
    </section>
  );
}
