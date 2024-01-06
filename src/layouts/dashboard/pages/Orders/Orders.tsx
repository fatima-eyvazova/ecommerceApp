import { OrderTable, OrderFilter } from "../../components";
import OrderStatus from "../../components/Orders/OrderStatus/OrderStatus";
import Sidebar from "../../components/Sidebar/Sidebar";
const Orders: React.FC = () => {
  return (
    <>
      <Sidebar>
        <OrderFilter />
        <OrderStatus />
        <OrderTable />
      </Sidebar>
    </>
  );
};

export default Orders;
