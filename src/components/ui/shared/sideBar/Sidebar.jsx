import { NavLink } from "react-router-dom";
import { useContext } from "react";
import ThemeContext from "../../../../services/themeContext/ThemeContext";
import { THEME } from "../../../../services/themeContext/ThemeContext.const";
import logo from "../../../../assets/hemalink_isotype.svg";

import {
  CSidebar,
  CSidebarBrand,
  CSidebarHeader,
  CSidebarNav,
  CSidebarFooter,
  CNavItem,
  CNavLink,
} from "@coreui/react";

import CIcon from "@coreui/icons-react";
import {
  cilDrop,
  cilUser,
  cilHospital,
  cilCalendar,
  cilSettings,
  cilAccountLogout,
  cilMoon,
  cilSun,
} from "@coreui/icons";

const Sidebar = () => {
  const { theme, onChangeTheme } = useContext(ThemeContext);
  const handleToggleTheme = () => {
    onChangeTheme();
  };

  return (
    <CSidebar
      style={{ height: "100vh" }}
      className="sidebar d-flex flex-column border-end noselect"
    >
      <CSidebarHeader className="px-3 py-2">
        <CSidebarBrand className="fs-3 fw-bold align-items-center text-decoration-none">
          <img
            src={logo}
            alt="HemaLink logo"
            className="me-2"
            style={{ width: "1.5vw" }}
          />
          <span className="align-middle">HemaLink</span>
        </CSidebarBrand>
      </CSidebarHeader>
      <CSidebarNav className="flex-grow-1 px-2">
        <CNavItem>
          <NavLink
            to="/"
            end
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          >
            <CIcon icon={cilDrop} className="nav-icon" />
            Donations
          </NavLink>
        </CNavItem>
        <CNavItem>
          <NavLink to="/donors" className="nav-link">
            <CIcon icon={cilUser} className="nav-icon" />
            Donors
          </NavLink>
        </CNavItem>
        <CNavItem>
          <NavLink to="/entities" className="nav-link">
            <CIcon icon={cilHospital} className="nav-icon" />
            Entities
          </NavLink>
        </CNavItem>
        <CNavItem>
          <NavLink to="/appointments" className="nav-link">
            <CIcon icon={cilCalendar} className="nav-icon" />
            Appointments
          </NavLink>
        </CNavItem>
        <CNavItem>
          <NavLink to="/settings" className="nav-link">
            <CIcon icon={cilSettings} className="nav-icon" />
            Settings
          </NavLink>
        </CNavItem>
      </CSidebarNav>
      <CSidebarFooter className="px-3 py-3">
        <div className="d-flex flex-column gap-2">
          <CNavLink
            onClick={handleToggleTheme}
            className="nav-link footer-link"
            role="button"
            style={{ cursor: "pointer" }}
          >
            <CIcon
              icon={theme === THEME.DARK ? cilSun : cilMoon}
              className="nav-icon me-2"
            />
            {theme === THEME.DARK ? "Light Mode" : "Dark Mode"}
          </CNavLink>
          <CNavLink href="#" className="nav-link footer-link text-danger">
            <CIcon icon={cilAccountLogout} className="nav-icon me-2" />
            Logout
          </CNavLink>
        </div>
      </CSidebarFooter>
    </CSidebar>
  );
};

export default Sidebar;
