import { Outlet } from "react-router-dom";
import { Button } from "../ui/button";
import Navbar from "../shared/Navbar";

const MainLayout = () => {
  return (
    <div className="min-h-svh">
      <Navbar />
      <Outlet />
      {/* <h1 className="text-red-400 text-4xl font-bold">This is main Layout</h1>
      <Button>Submit</Button> */}
    </div>
  );
};

export default MainLayout;
