import { useSelector } from "react-redux";

import { OurStaffFilter, OurStaffTable } from "../../components";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./OurStaff.scss";
import { RootState } from "../../../../redux/types";
import { useEffect, useState } from "react";
import { makeRequest } from "../../../../services/api";
import { GetAdmin } from "./types";

const OurStaff = () => {
  const [updateList, setUpdateList] = useState(false);
  const [adminList, setAdminList] = useState<GetAdmin[]>([]);

  const adminInfo = useSelector((state: RootState) => state.auth.user);
  const token = useSelector((state: RootState) => state.auth.token);
  const userRole = adminInfo?.role;

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
  }, [token, updateList]);

  if (userRole !== "superadmin") {
    return null;
  }

  return (
    <Sidebar>
      <div className="our-staff">
        <div className="our-staff-container">
          <div className="top-ourstaff">
            <h1>All Staff</h1>
            <OurStaffFilter setUpdateList={setUpdateList} />
          </div>
          <div className="ourstaff-bottom">
            <OurStaffTable list={adminList} setUpdateList={setUpdateList} />
          </div>
        </div>
      </div>
    </Sidebar>
  );
};

export default OurStaff;
