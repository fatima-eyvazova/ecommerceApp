import { useState } from "react";
import {
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import { ROUTES } from "../../../../router/routeNames";
import { RootState } from "../../../../redux/types";
import LogOutModal from "../../../shared/modals/LogOutModal/LogOutModal";
import "./Sidebar.scss";

const Sidebar = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openLogoutModal, setOpenLogoutModal] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const adminInfo = useSelector((state: RootState) => state.auth.user);
  const userRole = adminInfo?.role;

  const menuItem = [
    {
      path: ROUTES.orders,
      name: "Orders",
      icon: <FaUserAlt />,
    },
    {
      path: ROUTES.dashboardProducts,
      name: "Products",
      icon: <FaCommentAlt />,
    },
    {
      path: ROUTES.brands,
      name: "Brands",
      icon: <FaShoppingBag />,
    },
    {
      name: "Log Out",
      icon: <FaShoppingBag />,
    },
  ];

  if (userRole === "superadmin") {
    menuItem.splice(2, 0, {
      path: ROUTES.ourStaff as never,
      name: "Our Staff",
      icon: <FaRegChartBar />,
    });
  }

  const logOutUserHandler = () => {
    setOpenLogoutModal(true);
  };

  return (
    <>
      <div className="container-sidebar">
        <div style={{ width: isOpen ? "250px" : "50px" }} className="sidebar">
          <div className="top_section">
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="logo"
            >
              <img
                src="/src/assets/images/logo.png"
                alt="logo"
                style={{ width: "100px" }}
              />
            </div>
            <div
              style={{ marginLeft: isOpen ? "50px" : "0px" }}
              className="bars"
            >
              <FaBars onClick={toggle} />
            </div>
          </div>
          {menuItem.map((item, index) => {
            if (item.path) {
              return (
                <NavLink to={item.path} key={index} className="link">
                  <div className="icon">{item.icon}</div>
                  <div
                    style={{ display: isOpen ? "block" : "none" }}
                    className="link_text"
                  >
                    {item.name}
                  </div>
                </NavLink>
              );
            } else {
              return (
                <div className="link" onClick={logOutUserHandler}>
                  <div className="icon">{item.icon}</div>
                  <div
                    style={{ display: isOpen ? "block" : "none" }}
                    className="link_text"
                  >
                    {item.name}
                  </div>
                </div>
              );
            }
          })}
        </div>
        <main>{children}</main>
      </div>
      {openLogoutModal && <LogOutModal setOpenModal={setOpenLogoutModal} />}
    </>
  );
};

export default Sidebar;
