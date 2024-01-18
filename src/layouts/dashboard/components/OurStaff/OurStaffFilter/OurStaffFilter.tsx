import { MdPersonAddAlt } from "react-icons/md";
import { CiCircleRemove } from "react-icons/ci";
import Drawer from "@mui/material/Drawer";

import "./OurStaffFilter.scss";
import AddStaff from "../../../pages/OurStaff/AddStaff/AddStaff";
import { useState } from "react";

interface Props {
  setUpdateList: React.Dispatch<React.SetStateAction<boolean>>;
}

const OurStaffFilter = ({ setUpdateList }: Props) => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setOpen(!open);
  };

  const closeDrawer = () => {
    setOpen(false);
  };
  return (
    <form>
      <input
        type="text"
        placeholder="Search by name/email/phone"
        className="mail-input"
      />
      <button className="add-staff-btn" onClick={toggleDrawer}>
        <MdPersonAddAlt clasName="add-icon" />
        <span className="add-text"> Add Staff</span>
        <Drawer
          anchor="right"
          open={open}
          onClose={closeDrawer}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <CiCircleRemove
            style={{
              fontSize: "24px",
              position: "absolute",
              right: "50px",
              top: "30px",
              cursor: "pointer",
              color: "red",
            }}
            onClick={closeDrawer}
          />
          <AddStaff setOpen={setOpen} setUpdateList={setUpdateList} />
        </Drawer>
      </button>
      <button className="filter-btn">Filter</button>
      <button className="reset-btn">Reset</button>
    </form>
  );
};

export default OurStaffFilter;
