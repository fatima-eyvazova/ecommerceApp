import { MdPersonAddAlt } from "react-icons/md";
import { CiCircleRemove } from "react-icons/ci";
import Drawer from "@mui/material/Drawer";

import "./OurStaffFilter.scss";
import AddStaff from "../AddStaff/AddStaff";
import { useEffect, useState } from "react";
import { makeRequest } from "../../../../../services/api";
import { GetAdmin } from "../../../pages/OurStaff/types";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../redux/types";

interface Props {
  setUpdateList: React.Dispatch<React.SetStateAction<boolean>>;
  onFilter: (filteredList: GetAdmin[]) => void;
  setFilteredAdminList: (filteredList: GetAdmin[]) => void;
}

const OurStaffFilter = ({
  setUpdateList,
  onFilter,
  setFilteredAdminList,
}: Props) => {
  const [open, setOpen] = useState(false);
  const [list, setList] = useState<GetAdmin[]>([]);
  const [searchInput, setSearchInput] = useState("");
  const { token } = useSelector((state: RootState) => state.auth);

  const toggleDrawer = (e: React.MouseEvent<HTMLButtonElement>) => {
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
      const adminList = data?.data?.reverse() || [];

      setList(adminList);
      searchAdmin();
      setFilteredAdminList(adminList);
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
    const lowercaseSearchInput = searchInput.toLowerCase();
    const filteredList = list.filter((admin) =>
      admin.name.toLowerCase().includes(lowercaseSearchInput)
    );
    setUpdateList(false);
    setFilteredAdminList(filteredList);
    onFilter(filteredList);
  };

  const handleResetButtonClick = () => {
    setSearchInput("");
    fetchAdmins();
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
