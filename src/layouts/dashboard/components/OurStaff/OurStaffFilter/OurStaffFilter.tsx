import { MdPersonAddAlt } from "react-icons/md";

import "./OurStaffFilter.scss";
const OurStaffFilter = () => {
  return (
    <form>
      <input
        type="text"
        placeholder="Search by name/email/phone"
        className="mail-input"
      />
      <select className="role">
        <option value="All">Staff Role</option>
        <option value="Admin">Admin</option>
        <option value="Super Admin">Super Admin</option>
      </select>
      <button className="add-staff-btn">
        <MdPersonAddAlt clasName="add-icon" />
        <span className="add-text"> Add Staff</span>
      </button>
      <button className="filter-btn">Filter</button>
      <button className="reset-btn">Reset</button>
    </form>
  );
};

export default OurStaffFilter;
