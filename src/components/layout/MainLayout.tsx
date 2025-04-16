import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";

const MainLayout = () => {
  return (
    <div className="min-h-svh">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
