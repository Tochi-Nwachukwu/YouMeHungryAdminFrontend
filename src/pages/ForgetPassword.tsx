import RegisterTopBar from "../components/RegisterTopBar";
import cofee from "../assets/cofee.png";
import { TbMail } from "react-icons/tb";
import Input from "../components/Input";

export default function ForgetPassword() {
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
            Forgot Password
          </p>
          <p className="font-seravek leading-6 mt-7.5">
            Please enter your email address below you will receive a
            verification link.
          </p>
          <div className="mt-7.5 flex flex-col gap-6.25">
            <Input
              name="email"
              label="Email"
              type="email"
              placeholder="Email"
              icon={<TbMail />}
            />
          </div>
          <div className="mt-35">
            <button className="bg-accent text-white font-semibold font-seravek w-full rounded-md h-13.5 mt-7.5">
              Continue
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
