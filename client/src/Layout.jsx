import { Outlet } from "react-router-dom";
import Header from "./Header";

function Layout() {
  return (
    <div
      className="bg-gray-50 border border-white rounded-2xl
    m-5 p-4 shadow-lg"
    >
      <Header />
      <Outlet />
    </div>
  );
}

export default Layout;
