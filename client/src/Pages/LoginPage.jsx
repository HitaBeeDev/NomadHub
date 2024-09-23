import { Link } from "react-router-dom";
import BackgroundGif from "../Components/BackgroundGif";
function LoginPage() {
  return (
    <div className="grid grid-cols-2 gap-5 h-[80vh] mt-6">
      <div className="col-span-1 relative">
        <BackgroundGif />
      </div>

      <div className="flex justify-center items-center">
        <div className="col-span-1 flex flex-col p-10 w-full max-w-md">
          <p
            className="text-3xl font-semibold font-mono leading-normal
           text-left text-[#3e4f6a]"
          >
            Welcome back!
          </p>
          <p
            className="text-sm font-normal text-left
          text-[#293242]"
          >
            Please enter your details.
          </p>

          <div className="flex flex-col mt-10 gap-1 text-left">
            <label className="text-sm font-normal text-[#3e4f6a]">Email</label>

            <input
              type="email"
              className="rounded-md h-9
            focus:outline-none p-3 text-[#495e84]"
            />
          </div>

          <div className="flex flex-col gap-1 mt-4 text-left">
            <label className="text-sm font-normal text-[#3e4f6a]">
              Password
            </label>

            <input
              type="password"
              className="rounded-md h-9
            focus:outline-none p-3 text-[#495e84]"
            />
          </div>

          <button
            className="bg-[#7398be] text-[#f4f8fa]
             p-2 flex justify-center items-center
        text-center rounded-md h-9 
          hover:bg-[#495e84] transition-all 
         duration-500 text-sm mt-5"
          >
            Sign in
          </button>

          <div
            className="mt-2 text-left text-xs flex flex-row
          items-center"
          >
            <p className="text-[#3e4f6a]">Don't have an account?</p>

            <Link
              to={"/register"}
              className="ml-1
        text-[#D48B91]
            font-medium"
            >
              Register Here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
