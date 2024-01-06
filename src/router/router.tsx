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
import { ROUTES } from "./routeNames";
import Orders from "../layouts/dashboard/pages/Orders/Orders";
import OurStaff from "../layouts/dashboard/pages/OurStaff/OurStaff";
import ProductsDashboard from "../layouts/dashboard/pages/ProductsDashboard/ProductsDashboard";

const router = createBrowserRouter([
  {
    path: ROUTES.home,
    element: <Home />,
  },

  {
    path: ROUTES.orders,
    element: <Orders />,
  },
  {
    path: ROUTES.dashboardProducts,
    element: <ProductsDashboard />,
  },

  {
    path: ROUTES.ourStaff,
    element: <OurStaff />,
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
