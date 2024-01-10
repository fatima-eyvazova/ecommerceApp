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
import ProductsItem from "../../src/layouts/dashboard/pages/ProductsDashboard/ProductsItem/ProductsItem";
import InnerRouteGuard from "../layouts/shared/InnerRouteGuard/InnerRouteGuard";

const router = createBrowserRouter([
  {
    path: ROUTES.home,
    element: <Home />,
  },

  {
    path: ROUTES.orders,
    element: (
      <InnerRouteGuard isClient={false}>
        <Orders />
      </InnerRouteGuard>
    ),
  },
  {
    path: ROUTES.productItem,
    element: (
      <InnerRouteGuard isClient={false}>
        <ProductsItem />
      </InnerRouteGuard>
    ),
  },

  {
    path: ROUTES.dashboardProducts,
    element: (
      <InnerRouteGuard isClient={false}>
        <ProductsDashboard />
      </InnerRouteGuard>
    ),
  },
  {
    path: ROUTES.ourStaff,
    element: (
      <InnerRouteGuard isClient={false}>
        <OurStaff />
      </InnerRouteGuard>
    ),
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
    element: (
      <InnerRouteGuard isClient>
        <Checkout />
      </InnerRouteGuard>
    ),
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
