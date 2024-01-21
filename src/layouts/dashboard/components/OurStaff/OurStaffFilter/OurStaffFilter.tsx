import { MdPersonAddAlt } from "react-icons/md";
import { CiCircleRemove } from "react-icons/ci";
import Drawer from "@mui/material/Drawer";

import "./OurStaffFilter.scss";
import AddStaff from "../../../pages/OurStaff/AddStaff/AddStaff";
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
  const [adminList, setAdminList] = useState<GetAdmin[]>([]);

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
      setAdminList(data?.data?.reverse());
    } catch (error) {
      console.error("Error fetching brands:", error);
    }
  };

  useEffect(() => {
    if (token) {
      fetchAdmins();
    }
  }, [token, setUpdateList]);

  const searchAdmin = () => {
    const filteredList = list.filter((admin) =>
      `${admin.name} ${admin.surname} ${admin.email}`
        .toLowerCase()
        .includes(searchInput.toLowerCase())
    );
    setFilteredAdminList(filteredList);
  };

  const handleResetButtonClick = () => {
    setSearchInput("");
    fetchAdmins();
  };

  return (
    <form className="ourstaff-filter-form">
      <input
        type="text"
        placeholder="Search by name/surname/email"
        className="mail-input"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
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
      <button
        className="filter-btn"
        onClick={() => {
          searchAdmin();
        }}
      >
        Filter
      </button>
      <button className="reset-btn" onClick={handleResetButtonClick}>
        Reset
      </button>
    </form>
  );
};

export default OurStaffFilter;
