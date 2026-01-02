import RegisterTopBar from "../components/RegisterTopBar";
import cofee from "../assets/cofee.png";
import { PasswordInput } from "../components/Input";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function ResetPassword() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [codeChanged, setCodeChange] = useState(false);
  return (
    <div className="text-black h-screen">
      <RegisterTopBar />
      <section className="flex lg:flex-row flex-col gap-17.5 items-center lg:px-15 p-5 h-full lg:w-360 mx-auto">
        <div className="lg:w-[55%] hidden lg:block">
          <div className="lg:w-162 lg:h-162">
            <img className="w-full h-full" src={cofee} alt="cofee" />
          </div>
        </div>
        <div className="bg-[#CACACA] w-0.5 h-180 hidden lg:block"></div>
        {codeChanged === false ? (
          <div className="lg:w-[45%] w-full mt-20 lg:mt-0">
            <p className="font-seravek lg:text-[44px] text-2xl text-black font-semibold">
              Reset Password
            </p>
            <div className="mt-7.5 flex flex-col gap-6.25">
              <PasswordInput
                name="password"
                label="Password"
                type="password"
                placeholder="Password"
              />
              <PasswordInput
                name="confirm_password"
                label="Confirm Password"
                type="password"
                placeholder="Confirm Password"
              />
            </div>
            <div>
              <button className="bg-accent text-white font-semibold font-seravek w-full rounded-md h-13.5 mt-15">
                Continue
              </button>
            </div>
          </div>
        ) : (
          <div className="lg:w-[45%] w-full mt-20 lg:mt-0">
            <p className="font-seravek lg:text-[44px] text-2xl text-black font-semibold">
              Password Changed
            </p>
            <p className="font-seravek leading-6 mt-7.5">
              We have sent a verification link to your email admin22@gmail.com
              Click on the link in your mail box & all is done.
            </p>

            <div>
              <NavLink
                to="/login"
                className="flex items-center justify-center bg-accent text-white font-semibold font-seravek w-full rounded-md h-13.5 mt-35"
              >
                Back to Login
              </NavLink>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
