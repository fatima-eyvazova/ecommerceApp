import { Navigate, createBrowserRouter } from "react-router-dom";

import { Home, Login, ProductDetails, Products, Register } from "../pages";
import { ROUTES } from "./routeNames";

const router = createBrowserRouter([
  {
    path: ROUTES.home,
    element: <Home />,
  },
  {
    path: "auth",
    children: [
      {
        path: "",
        element: <Navigate to={ROUTES.login} />,
      },
      {
        path: ROUTES.login,
        element: <Login />,
      },
      {
        path: ROUTES.register,
        element: <Register />,
      },
    ],
  },
  {
    path: ROUTES.products,
    element: <Products />,
  },
  {
    path: ROUTES.productDetails,
    element: <ProductDetails />,
  },
]);

export default router;
