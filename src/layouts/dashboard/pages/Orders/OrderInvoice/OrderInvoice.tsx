import "./OrderInvoice.scss";
import { InvoiceTable, Sidebar } from "../../../components";

const OrderInvoice = () => {
  return (
    <Sidebar>
      <div className="order-invoice">
        <div className="order-invoice-container">
          <div className="invoice-heading">
            <div className="invoice">
              <h1>Invoice</h1>
              <p className="status">
                <span className="text">Status :</span>
                <span className="type">Pending</span>
              </p>
            </div>
            <div className="logo">
              <img src="/src/assets/images/logo.png" alt="logo" />
            </div>
          </div>
          <div className="invoice-content">
            <InvoiceTable />
          </div>
        </div>
      </div>
    </Sidebar>
  );
};

export default OrderInvoice;
