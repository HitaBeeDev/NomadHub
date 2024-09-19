import { Link } from "react-router-dom";

function IndexPage() {
  return (
    <div>
      <header className="p-5 flex flex-row justify-between items-center">
        <p className="font-medium text-xl">NomadHub</p>

        <p>Home</p>

        <p>How it Works</p>

        <p>Community</p>

        <p>Blog</p>

        <p>Help</p>

        <Link to={"/login"}>
          <p>Sign In</p>
          <p> Sign Up</p>
        </Link>
      </header>
    </div>
  );
}

export default IndexPage;
