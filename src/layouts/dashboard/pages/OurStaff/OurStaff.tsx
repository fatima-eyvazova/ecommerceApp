import { OurStaffFilter, OurStaffTable } from "../../components";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./OurStaff.scss";

const OurStaff = () => {
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