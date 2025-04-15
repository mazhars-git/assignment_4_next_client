import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import { Button } from "../ui/button";

const MainLayout = () => {
  return (
    <div className="min-h-svh">
      <Navbar />
      <Button>This is button</Button>
      <h1>Hello</h1>
      <Outlet />
      {/* <h1 className="text-red-400 text-4xl font-bold">This is main Layout</h1>
      <Button>Submit</Button> */}
    </div>
  );
};

export default MainLayout;
