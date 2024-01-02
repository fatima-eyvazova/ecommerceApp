export const ROUTES = {
  home: "/",
  products: "/products",
  productDetails: "/products/:productId",
  login: "/auth/login",
  register: "/auth/register",
  wishlist: "wishlist",
  basket: "basket",
  checkout: "checkout",
  dashboardLogin: "/dashboard/login",
  layout: "layout",
  orders: "/dashboard/orders",
  ourStaff: "/dashboard/ourStaff",
} as const;
