import { Link } from "react-router-dom";

function IndexPage() {
  return (
    <div>
      <header className="p-5 flex flex-row justify-between items-center">
        <p className="font-medium text-xl">NomadHub</p>

        <p>ANYWHERE</p>

        <p>WEEK</p>

        <p>GUESTS</p>

        <p>SEARCH</p>

        <Link to={"/login"}>
          <p>login</p>
        </Link>
      </header>
    </div>
  );
}

export default IndexPage;
