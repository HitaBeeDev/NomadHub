import { Link } from "react-router-dom";
import BackgroundGif from "../Components/BackgroundGif";
function LoginPage() {
  return (
    <div className="grid grid-cols-2 gap-5 h-[80vh] mt-6">
      <div className="col-span-1 relative">
        <BackgroundGif />
      </div>

      <div className="col-span-1 flex flex-col p-10 mx-auto">
        <p className="text-3xl font-semibold font-mono leading-normal text-left">
          Welcome back!
        </p>
        <p className="text-sm font-normal text-left">
          Please enter your details.
        </p>

        <div className="flex flex-col mt-8 gap-1 text-left">
          <label className="text-sm font-normal">Email</label>

          <input type="email" className="rounded-md h-8" />
        </div>

        <div className="flex flex-col gap-1 mt-4 text-left">
          <label className="text-sm font-normal">Password</label>

          <input type="password" className="rounded-md h-8" />
        </div>

        <button className="mt-4">Sign in</button>

        <div className="mt-4 text-left">
          <p>Don't have an account?</p>
          <Link to={"/register"} className="bg-red-200 mt-1">
            Register Here
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
