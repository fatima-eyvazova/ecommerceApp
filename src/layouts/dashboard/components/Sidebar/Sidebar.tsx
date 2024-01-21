import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { TbBrandSafari, TbBrand4Chan } from "react-icons/tb";
import { RiAdminLine } from "react-icons/ri";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";

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
      icon: <TbBrandSafari />,
    },
    {
      path: ROUTES.dashboardProducts,
      name: "Products",
      icon: <MdOutlineProductionQuantityLimits />,
    },
    {
      path: ROUTES.brands,
      name: "Brands",
      icon: <TbBrand4Chan />,
    },
    {
      name: "Log Out",
      icon: <IoIosLogOut />,
    },
  ];

  if (userRole === "superadmin") {
    menuItem.splice(2, 0, {
      path: ROUTES.ourStaff as never,
      name: "Our Staff",
      icon: <RiAdminLine />,
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
