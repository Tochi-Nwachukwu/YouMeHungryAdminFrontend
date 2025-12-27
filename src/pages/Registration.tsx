import RegisterTopBar from "../components/RegisterTopBar";
import cofee from "../assets/cofee.png";
import { TbMail } from "react-icons/tb";
import Input, { PasswordInput } from "../components/Input";
import { NavLink } from "react-router-dom";

export default function Registration() {
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
        <div className="lg:w-[45%] w-full mt-20 lg:mt-0">
          <p className="font-seravek lg:text-[44px] text-2xl text-black font-semibold">
            Registration
          </p>
          <div className="mt-7.5 flex flex-col gap-6.25">
            <Input
              name="email"
              label="Email"
              type="email"
              placeholder="Email"
              icon={<TbMail />}
            />
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
            <p className="font-seravek leading-6">
              By signing up below, you agree to the Terms of use and Privacy
              policy
            </p>
          </div>
          <div>
            <button className="bg-accent text-white font-semibold font-seravek w-full rounded-md h-13.5 mt-7.5">
              Next
            </button>
          </div>
          <div className="flex items-center text-center justify-center mt-8.75 gap-1 font-seravek">
            <p>Already have an account?</p>{" "}
            <NavLink
              to="/login"
              className="text-accent hover:underline font-semibold"
            >
              Login
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
}
