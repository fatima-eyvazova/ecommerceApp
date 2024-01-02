import OurStaffFilter from "../../components/OurStaffFilter/OurStaffFilter";
import Sidebar from "../../components/Sidebar/Sidebar";

const OurStaff = () => {
  return (
    <Sidebar>
      <div className="our-staff">
        <div className="our-staff-container">
          <h1>All Staff</h1>
          <OurStaffFilter />
        </div>
      </div>
    </Sidebar>
  );
};

export default OurStaff;
