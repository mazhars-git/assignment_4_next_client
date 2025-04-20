import App from "@/App";
import AdminLayout from "@/components/layout/AdminLayout";
import ProtectedRoute from "@/components/layout/ProtectedRoute";
import About from "@/pages/About";
import AllProducts from "@/pages/AllProducts";
import Dashboard from "@/pages/Dashboard/Dashboard";
import Home from "@/pages/Home/Home";
import Login from "@/pages/Login";
import MyCart from "@/pages/MyCart";
import Signup from "@/pages/Register";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "myCart",
        element: <MyCart />,
      },
      {
        path: "allProducts",
        element: <AllProducts />,
      },
    ],
  },

  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <AdminLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      //   {
      //     path: "manage-products",
      //     element: <ManageProducts />,
      //   },
      //   {
      //     path: "manage-orders",
      //     element: <ManageOrders />,
      //   },
    ],
  },

  {
    path: "/admin",
    element: (
      <ProtectedRoute>
        {" "}
        <About />
      </ProtectedRoute>
    ),
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

export default router;
