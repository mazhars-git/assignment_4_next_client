import { NavLink, Outlet } from "react-router-dom";
import { Button } from "../ui/button";
import { Home, HomeIcon, LayoutList, ListCheck } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="">
      <div className="flex md:flex-row flex-col gap-1">
        <div className="md:w-50 w-full">
          <ul className="bg-orange-500 border-cyan-100 text-base-content min-h-svh h-full p-4 space-y-2">
            {/* Sidebar content here */}

            <li>
              <NavLink to="orders">
                <Button>
                  <LayoutList />
                  Manage Products
                </Button>
              </NavLink>
            </li>
            <li>
              <NavLink to="products">
                {" "}
                <Button variant="outline" className="rounded-lg">
                  <ListCheck /> All Products
                </Button>
              </NavLink>
            </li>
            <li className="">
              <NavLink to="/">
                <Button>
                  <HomeIcon /> Home
                </Button>
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="p-5 bg-slate-400 w-full">
          {/* Page content here */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
