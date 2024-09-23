import { Outlet } from "react-router-dom";
import Header from "./Header";

function Layout() {
  return (
    <div
      className="bg-[#e5edf4] border border-[#f6f6f6] rounded-2xl
    m-5 p-5 shadow-lg pl-8 pr-8"
    >
      <Header />
      <Outlet />
    </div>
  );
}

export default Layout;
