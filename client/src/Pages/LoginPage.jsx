import { Link } from "react-router-dom";
import BackgroundGif from "../Components/BackgroundGif";
function LoginPage() {
  return (
    <div className="grid grid-cols-2 gap-5 h-[80vh] mt-6">
      <div className="col-span-1 relative">
        <BackgroundGif />
      </div>

      <div className="col-span-1">
        <p>Welcome back!</p>

        <p>Please enter your details.</p>

        <div>
          <label>Email</label>

          <input type="email" />
        </div>

        <div>
          <label>Password</label>

          <input type="password" />
        </div>

        <button>Sign in</button>

        <div>
          <p>Don't have an account? </p>
          <Link to={"/register"} className="bg-red-200 mt-5">
            Register Here
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
