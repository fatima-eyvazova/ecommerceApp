import { useSelector } from "react-redux";

import { OurStaffFilter, OurStaffTable } from "../../components";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./OurStaff.scss";
import { RootState } from "../../../../redux/types";

const OurStaff = () => {
  const adminInfo = useSelector((state: RootState) => state.adminProfile);
  const userRole = adminInfo.user?.role;

  if (userRole !== "superadmin") {
    return null;
  }

  return (
    <Sidebar>
      <div className="our-staff">
        <div className="our-staff-container">
          <div className="top-ourstaff">
            <h1>All Staff</h1>
            <OurStaffFilter />
          </div>
          <div className="ourstaff-bottom">
            <OurStaffTable />
          </div>
        </div>
      </div>
    </Sidebar>
  );
};

export default OurStaff;
