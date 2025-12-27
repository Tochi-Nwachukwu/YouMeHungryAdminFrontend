import RegisterTopBar from "../components/RegisterTopBar";
import cofee from "../assets/cofee.png";
import { TbMail } from "react-icons/tb";
import Input, { PasswordInput } from "../components/Input";
import { NavLink } from "react-router-dom";
import { ImFacebook2 } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

export default function Login() {
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
            Welcome Back!
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

            <NavLink
              to="/forgot-password"
              className="font-seravek leading-6 hover:underline text-right"
            >
              Forgot password?
            </NavLink>
          </div>
          <div>
            <button className="bg-accent text-white font-semibold font-seravek w-full rounded-md h-13.5 mt-7.5">
              Login
            </button>
          </div>
          <div className="mt-6.25">
            <div className="flex items-center gap-2">
              <div className="flex-1 h-0.5 bg-[#8E8E8E]"></div>
              <p className="text-[#8E8E8E] text-2xl font-seravek">
                or continue with
              </p>
              <div className="flex-1 h-0.5 bg-[#8E8E8E]"></div>
            </div>
            <div className="flex items-center gap-5.25 justify-center text-[25px] mt-6.25">
              <button className="border border-primary rounded-md px-7 py-3.75 cursor-pointer">
                <ImFacebook2 />
              </button>
              <button className="border border-primary rounded-md px-7 py-3.75 cursor-pointer">
                <FcGoogle />
              </button>
              <button className="border border-primary rounded-md px-7 py-3.75 cursor-pointer">
                <FaApple />
              </button>
            </div>
          </div>
          <div className="flex items-center text-center justify-center mt-8.75 gap-1 font-seravek">
            <p>Don't have an account?</p>{" "}
            <NavLink
              to="/register"
              className="text-accent hover:underline font-semibold"
            >
              Sign up
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
}
