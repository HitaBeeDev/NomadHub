import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex flex-row justify-between items-center">
      <p
        className="font-semibold text-xl
      font-mono tracking-widest leading-loose"
      >
        NomadHub
      </p>

      <div
        className="flex flex-row justify-center items-center 
      text-sm font-normal tracking-wider gap-10 bg-gray-200 p-3 pl-6 pr-6 rounded-2xl"
      >
        <p className="cursor-pointer">Home</p>

        <p className="cursor-pointer">How it Works</p>

        <p className="cursor-pointer">Community</p>

        <p className="cursor-pointer">Blog</p>

        <p className="cursor-pointer">Help</p>
      </div>

      <div
        className="flex flex-row justify-center items-center
      text-sm font-normal tracking-wider gap-3"
      >
        <Link
          to={"/register"}
          className="border border-gray-500 p-2 flex justify-center items-center
        text-center rounded-3xl w-24 h-9"
        >
          Sign Up
        </Link>

        <Link
          to={"/login"}
          className="bg-gray-500 text-white p-2 flex justify-center items-center
        text-center rounded-3xl w-24 h-9"
        >
          Sign In
        </Link>
      </div>
    </header>
  );
}

export default Header;
