import { Navigate, createBrowserRouter } from "react-router-dom";

import {
  Basket,
  Home,
  Login,
  ProductDetails,
  Products,
  Register,
  Wishlist,
  Checkout,
} from "../layouts/site/pages";
import LoginDashboard from "../layouts/dashboard/pages/LoginDashboard/LoginDashboard";
import Element from "../layouts/dashboard/pages/Element";
import { ROUTES } from "./routeNames";
import About from "../layouts/dashboard/pages/About";

const router = createBrowserRouter([
  {
    path: ROUTES.home,
    element: <Home />,
  },

  {
    path: ROUTES.dashboardAbout,
    element: <About />,
  },
  {
    path: ROUTES.home,
    element: <Home />,
  },
  {
    path: ROUTES.dashboardLogin,
    element: <LoginDashboard />,
  },

  {
    path: ROUTES.checkout,
    element: <Checkout />,
  },
  {
    path: ROUTES.wishlist,
    element: <Wishlist />,
  },
  {
    path: ROUTES.basket,
    element: <Basket />,
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
