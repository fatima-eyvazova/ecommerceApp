export type BasketProduct = {
  id: string | number;
  name: string;
  price: number;
  subtotal?: number;
  quantity?: number;
};

export type RootState = {
  basket: {
    basketProducts: BasketProduct[];
    total: number;
  };
};
