import { Link } from "react-router-dom";
import { HiOutlineExclamationTriangle } from "react-icons/hi2";

export default function NotFound() {
  return (
    <div className="h-full flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="mx-auto w-20 h-20 rounded-full bg-accent/10 text-accent flex items-center justify-center text-4xl">
          <HiOutlineExclamationTriangle />
        </div>

        <h1 className="mt-6 text-5xl font-extrabold text-[#454545]">404</h1>

        <p className="mt-3 text-lg font-semibold text-[#6B6B6B]">
          Oops! This page wandered off
        </p>

        <p className="mt-2 text-sm text-[#9A9A9A]">
          The page you’re looking for doesn’t exist, was moved, or is
          temporarily unavailable.
        </p>

        <Link
          to="/dashboard"
          className="inline-flex items-center justify-center mt-6 px-6 py-3 rounded-full bg-accent text-white font-semibold hover:opacity-90 transition"
        >
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
}
