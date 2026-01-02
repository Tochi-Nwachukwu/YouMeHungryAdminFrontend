// import React from 'react'

import { useState } from "react";
import CodeSentModal from "../components/CodeSentModal";
import GoBack from "../components/GoBack";

export default function VerifyEmail() {
  const [modal, setModal] = useState(false);

  return (
    <section className="lg:px-6 px-4 py-5 min-h-screen bg-white w-full">
      <div className="flex items-center gap-8.5">
        <GoBack />
        <h1 className="lg:text-[30px] text-2xl text-black font-bold leading-[100%]">
          Verify Your Email Address
        </h1>
      </div>
      <div className="mt-11.5">
        <p className="text-lg">
          We will send a 4-digit verification code to your registered email.
        </p>
        <p className="text-xl font-semibold">ad******@gmail.com</p>

        <div className="flex items-center gap-5 mt-21.5">
          <button className="text-accent w-fit bg-primary px-14 py-3.75 rounded-[10px] font-semibold cursor-pointer hover:bg-primary/80 duration-100 ease-in transition-all">
            Cancel
          </button>
          <button
            onClick={() => setModal(true)}
            className="bg-accent w-fit text-white px-10.75 py-3.75 rounded-[10px] font-semibold cursor-pointer hover:bg-accent/80 duration-100 ease-in transition-all"
          >
            Send Code
          </button>
        </div>
      </div>
      <CodeSentModal open={modal} onClose={() => setModal(false)} />
    </section>
  );
}
