import React from "react";
import Sidebar, { SidebarProps } from "../../components/Sidebar/Sidebar";
import OrderFilter from "../../components/OrderFilter/OrderFilter";
import OrderTable from "../../components/OrderTable/OrderTable";

const Orders: React.FC = () => {
  const sidebarProps: SidebarProps = {
    children: (
      <div className="orders">
        <OrderFilter />
        <OrderTable />
      </div>
    ),
  };

  return <Sidebar {...sidebarProps} />;
};

export default Orders;
