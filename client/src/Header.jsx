import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex flex-row justify-between items-center">
      <p
        className="font-semibold text-lg
      font-mono tracking-widest leading-loose	"
      >
        NomadHub
      </p>

      <div
        className="flex flex-row justify-center items-center
      text-sm font-normal tracking-wider gap-7"
      >
        <p>Home</p>

        <p>How it Works</p>

        <p>Community</p>

        <p>Blog</p>

        <p>Help</p>
      </div>

      <Link
        className="flex flex-row justify-between items-center"
        to={"/login"}
      >
        <p>Sign In</p>
        <p> Sign Up</p>
      </Link>
    </header>
  );
}

export default Header;
