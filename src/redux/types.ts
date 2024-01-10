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

export type ProfileTypes = {
  admin: Profile;
  client: Profile;
};

export type RootState = {
  basket: {
    basketProducts: BasketProduct[];
    total: number;
  };
  wishList: {
    wishListProducts: WishListProduct[];
  };
  userProfile: ProfileTypes;
};
