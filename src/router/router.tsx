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
import { ROUTES } from "./routeNames";
import {
  Brands,
  Orders,
  OurStaff,
  ProductsDashboard,
  ProductsItem,
} from "../layouts/dashboard/pages";
import InnerRouteGuard from "../layouts/shared/InnerRouteGuard/InnerRouteGuard";
import NotFoundPage from "../layouts/shared/NotFoundPage/NotFoundPage";
import AuthGuard from "../layouts/shared/InnerRouteGuard/AuthGuard";

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
        element: (
          <AuthGuard>
            <Login />
          </AuthGuard>
        ),
      },
      {
        path: ROUTES.register,
        element: (
          <AuthGuard>
            <Register />
          </AuthGuard>
        ),
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
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;
