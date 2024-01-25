import "./OrderFilter.scss";

interface Props {
  searchInput: string;
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
  startDate: string;
  setStartDate: React.Dispatch<React.SetStateAction<string>>;
  endDate: string;
  setEndDate: React.Dispatch<React.SetStateAction<string>>;
  setStatus: React.Dispatch<React.SetStateAction<string>>;
}

const OrderFilter = ({
  searchInput,
  setSearchInput,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  setStatus,
}: Props) => {
  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };
  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartDate(e.target.value);
  };
  const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEndDate(e.target.value);
  };
  const handleFilter = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(e.target.value);
  };

  const handleReset = () => {
    setSearchInput("");
    setStartDate("");
    setEndDate("");
    setStatus("");
  };

  return (
    <div className="order-filter">
      <div className="order-filter-container">
        <h1>Orders</h1>
        <form className="filter-form" onSubmit={handleFilter}>
          <div className="top-filters">
            <input
              type="text"
              placeholder="Search name"
              className="search"
              value={searchInput}
              onChange={handleSearchInputChange}
            />
            <select value="" onChange={handleStatusChange}>
              <option value="">Select Status</option>
              <option value="">Delivered</option>
              <option value="Pending">Pending</option>
              <option value="Processing">Processing</option>
              <option value="Cancel">Cancel</option>
            </select>
          </div>
          <div className="bottom-filter">
            <div className="data">
              <label>Start Date</label>
              <input
                type="date"
                value={startDate}
                onChange={handleStartDateChange}
              />
            </div>
            <div className="data">
              <label>End Date</label>
              <input
                type="date"
                value={endDate}
                onChange={handleEndDateChange}
              />
            </div>
            <div className="btn">
              <button type="submit">Filter</button>
            </div>
            <div className="btn">
              <button type="button" onClick={handleReset}>
                Reset
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderFilter;
