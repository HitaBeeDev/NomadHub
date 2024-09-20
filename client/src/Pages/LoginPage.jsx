import { Link } from "react-router-dom";
import backgroundVideo from "../assets/4.mp4";
function LoginPage() {
  return (
    <div className="grid grid-cols-2 gap-5 h-[80vh] mt-5">
      <div className="col-span-1 relative overflow-hidden rounded-2xl">
        <video autoPlay loop muted className="absolute opacity-20">
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="relative mt-6 z-[1]"></div>
      </div>

      <div className="col-span-1">
        <p>login page</p>

        <Link to={"/register"} className="bg-red-200 mt-5">
          Register Here
        </Link>
      </div>
    </div>
  );
}

export default LoginPage;
