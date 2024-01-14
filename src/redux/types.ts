import { GetBrandItem } from "../layouts/dashboard/pages/Brands/types";

export type BasketProduct = {
  id: string | number;
  name: string;
  price: number;
  subtotal: number;
  quantity: number;
};

export type WishListProduct = {
  id: string | number;
  name: string;
  price: number;
};

export type Profile = {
  token: string;
  user: {
    _id: string;
    organizationId: string;
    name: string;
    surname: string;
    email: string;
    role: "superadmin" | "admin" | "client";
  } | null;
};

export type SelectedItemDashboard = {
  itemData: {
    item: GetBrandItem | null;
    status: "view" | "edit" | "delete" | "";
  };
};

export type RootState = {
  basket: {
    basketProducts: BasketProduct[];
    total: number;
  };
  wishList: {
    wishListProducts: WishListProduct[];
  };
  auth: Profile;
  selectedItem: SelectedItemDashboard;
};
