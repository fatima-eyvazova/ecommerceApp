import { OrderTable, OrderFilter } from "../../components";
import Sidebar from "../../components/Sidebar/Sidebar";
const Orders: React.FC = () => {
  return (
    <>
      <Sidebar>
        <OrderFilter />
        <OrderTable />
      </Sidebar>
    </>
  );
};

export default Orders;
