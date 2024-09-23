import { Link } from "react-router-dom";
import "./index.css";

function Header() {
  return (
    <header className="flex flex-row justify-between items-center">
      <Link
        to={"/"}
        className="font-semibold text-2xl
      font-mono tracking-widest leading-loose cursor-pointer"
      >
        NomadHub
      </Link>

      <div
        className="flex flex-row justify-center items-center 
    text-sm font-normal tracking-wider gap-3 h-9 bg-[#d1d1d1] p-2 rounded-3xl"
      >
        <p className="navbar-items w-16">Home</p>
        <p className="navbar-items w-28">How it Works</p>
        <p className="navbar-items w-24">Community</p>
        <p className="navbar-items w-14">Blog</p>
        <p className="navbar-items w-14">Help</p>
      </div>

      <div
        className="flex flex-row justify-center items-center
      text-sm font-normal tracking-wider gap-3"
      >
        <Link
          to={"/register"}
          className="border border-[#6d6d6d] p-2 flex justify-center items-center
        text-center rounded-3xl w-20 h-8 text-[#6d6d6d] hover:border-none
         hover:bg-[#888888] hover:text-[#f6f6f6] transition-all duration-500
         text-[0.8rem]"
        >
          Sign Up
        </Link>

        <Link
          to={"/login"}
          className="bg-[#888888] text-[#f6f6f6] hover:text-[#6d6d6d] p-2 flex justify-center items-center
        text-center rounded-3xl w-20 h-8 hover:bg-transparent hover:border
         hover:border-[#6d6d6d] transition-all duration-500 text-[0.8rem]"
        >
          Sign In
        </Link>
      </div>
    </header>
  );
}

export default Header;
