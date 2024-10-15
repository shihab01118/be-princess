import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "@/components/auth/layout";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";

const router = createBrowserRouter([
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
