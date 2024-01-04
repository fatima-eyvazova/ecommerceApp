import "./OrderFilter.scss";
const OrderFilter = () => {
  return (
    <div className="order-filter">
      <div className="order-filter-container">
        <h1>Orders</h1>
        <form>
          <div className="top-filters">
            <input type="text" placeholder="Search name" className="search" />
            <select>
              <option value="Status">Status</option>
              <option value="Delivered">Delivered</option>
              <option value="Pending">Pending</option>
              <option value="Processing">Processing</option>
              <option value="Cancel">Cancel</option>
            </select>
            <select>
              <option value="Order limits">Order limits</option>
              <option value="5">Last 5 days orders</option>
              <option value="7">Last 7 days orders</option>
              <option value="15">Last 15 days orders</option>
              <option value="30">Last 30 days orders</option>
            </select>
          </div>
          <div className="bottom-filter">
            <div className="data">
              <label>Start Date</label>
              <input type="date" />
            </div>
            <div className="data">
              <label>End Date</label>
              <input type="date" />
            </div>
            <div className="btn">
              <button type="submit">Filter</button>
            </div>
            <div className="btn">
              <button type="submit">Reset</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderFilter;
