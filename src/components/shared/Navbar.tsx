import { ShoppingBag } from "lucide-react";
import { NavLink } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <header className="border-b w-full">
      <div className="container flex justify-between items-center mx-auto h-16 px-5">
        <NavLink to="/">
          <h1 className="text-2xl font-black">StShop</h1>
        </NavLink>

        <div className="max-w-md flex-grow">
          <input
            type="text"
            placeholder="Search for products"
            className="w-full max-w-6xl border border-gray-300 rounded-full py-2 px-5"
          />
        </div>

        <nav className="flex gap-2">
          <Button variant="outline" className="rounded-full p-0 size-10">
            <ShoppingBag />
          </Button>
          <>
            <Button className="rounded-full">Shop</Button>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>User</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>
                  {/* <Link to={`/${user?.role}/dashboard`}>
                    Dashboard
                    </Link> */}
                  Dashboard
                </DropdownMenuItem>
                <DropdownMenuItem>My Shop</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  className="bg-red-500 cursor-pointer"
                  // onClick={handleLogOut}
                >
                  {/* <LogOut /> */}
                  <span>Log Out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </>
          <NavLink to="/login">
            <Button className="rounded-full" variant="outline">
              Login
            </Button>
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
