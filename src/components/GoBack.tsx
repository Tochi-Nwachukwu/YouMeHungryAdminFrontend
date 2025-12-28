import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

export default function GoBack() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className={`flex items-center justify-center p-2 rounded hover:bg-[#ffd59146] transition cursor-pointer`}
    >
      <IoArrowBack className="text-2xl text-[#F3AE3D]" />
    </button>
  );
}
