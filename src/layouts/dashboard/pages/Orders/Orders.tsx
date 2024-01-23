import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { OrderTable, OrderFilter } from "../../components";
import OrderStatus from "../../components/Orders/OrderStatus/OrderStatus";
import Sidebar from "../../components/Sidebar/Sidebar";
import { RootState } from "../../../../redux/types";
import { makeRequest } from "../../../../services/api";
import { GetOrderItem, GetOrdersData } from "./types";

const Orders: React.FC = () => {
  const token = useSelector((state: RootState) => state.auth.token);
  const [updateList, setUpdateList] = useState(false);
  const [list, setList] = useState<GetOrderItem[]>([]);

  const fetchOrders = async () => {
    try {
      const res = await makeRequest("/dashboard/orders", "get", null, token);
      const data = res?.data as { data: GetOrdersData };
      setList(data?.data?.data?.reverse());
    } catch (error) {
      console.error("Error fetching brands:", error);
    }
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token, updateList]);

  return (
    <>
      <Sidebar>
        <OrderFilter />
        <OrderStatus />
        <OrderTable list={list} />
      </Sidebar>
    </>
  );
};

export default Orders;
