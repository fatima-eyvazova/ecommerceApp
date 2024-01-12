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
import {
  Brands,
  OrderInvoice,
  Orders,
  OurStaff,
  ProductsDashboard,
  ProductsItem,
} from "../layouts/dashboard/pages";
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
    path: ROUTES.orderInvoice,
    element: <OrderInvoice />,
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
    path: ROUTES.brands,
    element: (
      <InnerRouteGuard isClient={false}>
        <Brands />
      </InnerRouteGuard>
    ),
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
