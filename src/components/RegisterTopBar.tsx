import logo from "../assets/logo.png";

export default function RegisterTopBar() {
  return (
    <div className="h-22.25 bg-accent lg:px-26 px-5 flex items-center">
      <div className="lg:w-360 lg:mx-auto">
        <div className="lg:w-55.5 w-30 lg:h-11.5">
          <img className="h-full w-full object-contain" src={logo} alt="logo" />
        </div>
      </div>
    </div>
  );
}
