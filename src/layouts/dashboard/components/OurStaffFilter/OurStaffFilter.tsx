import { MdPersonAddAlt } from "react-icons/md";

const OurStaffFilter = () => {
  return (
    <form>
      <input type="text" placeholder="Search by name/email/phone" />
      <select>
        <option value="All">Staff Role</option>
        <option value="Admin">Admin</option>
        <option value="Super Admin">Super Admin</option>
      </select>
      <button>
        <span>
          <MdPersonAddAlt />
        </span>
        <span>Add Staff</span>
      </button>
      <button>Filter</button>
      <button>Reset</button>
    </form>
  );
};

export default OurStaffFilter;
