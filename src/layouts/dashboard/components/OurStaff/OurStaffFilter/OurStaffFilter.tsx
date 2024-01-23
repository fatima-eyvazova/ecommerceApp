import { MdPersonAddAlt } from "react-icons/md";
import { CiCircleRemove } from "react-icons/ci";
import Drawer from "@mui/material/Drawer";

import "./OurStaffFilter.scss";
import AddStaff from "../AddStaff/AddStaff";
import { useEffect, useState } from "react";
import { makeRequest } from "../../../../../services/api";
// import { GetProductItem } from "../../../pages/ProductsDashboard/types";
import { GetAdmin } from "../../../pages/OurStaff/types";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../redux/types";

interface Props {
  setUpdateList: React.Dispatch<React.SetStateAction<boolean>>;
}

const OurStaffFilter = ({ setUpdateList }: Props) => {
  const [open, setOpen] = useState(false);
  const [list, setList] = useState<GetAdmin[]>([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredAdminList, setFilteredAdminList] = useState<GetAdmin[]>([]);
  const { token } = useSelector((state: RootState) => state.auth);

  const toggleDrawer = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setOpen(!open);
  };

  const closeDrawer = () => {
    setOpen(false);
  };

  const fetchAdmins = async () => {
    try {
      const res = await makeRequest("/dashboard/users", "get", null, token);
      const data = res?.data as { data: GetAdmin[] };
      setList(data?.data?.reverse());
      searchAdmin(); // Update filtered list after fetching admins
    } catch (error) {
      console.error("Error fetching admins:", error);
    }
  };

  useEffect(() => {
    if (token) {
      fetchAdmins();
    }
  }, [token, setUpdateList]);

  const searchAdmin = () => {
    console.log("adminList", list);
    console.log("searchInput", searchInput);

    const lowercaseSearchInput = searchInput.toLowerCase();

    const filteredList = list.filter((admin) =>
      admin.name.toLowerCase().includes(lowercaseSearchInput)
    );

    console.log("filteredList", filteredList);
    setFilteredAdminList(filteredList);
  };

  const handleResetButtonClick = () => {
    setSearchInput("");
    fetchAdmins(); // Fetch admins again to reset the list
  };

  return (
    <form className="ourstaff-filter-form" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        placeholder="Search by name/surname/email"
        className="mail-input"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button className="add-staff-btn" onClick={toggleDrawer}>
        <MdPersonAddAlt className="add-icon" />
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
      <button className="filter-btn" onClick={searchAdmin}>
        Filter
      </button>
      <button className="reset-btn" onClick={handleResetButtonClick}>
        Reset
      </button>
    </form>
  );
};

export default OurStaffFilter;
