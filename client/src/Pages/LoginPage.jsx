import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div>
      <p>login page</p>

      <Link to={"/register"} className="bg-red-200 mt-5">
        Register Here
      </Link>
    </div>
  );
}

export default LoginPage;
