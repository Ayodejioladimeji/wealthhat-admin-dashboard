import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

//
import { GLOBALTYPES } from "./../../redux/actions/globalTypes";
import "./Sidebar.css";
import { getDataAPI } from "./../../utils/fetchData";
//

const Sidebar = (props) => {
  const { toggle } = useSelector((state) => state.utils);
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (toggle) {
      removeActiveClassFromSubMenu();
    }

    // dispatch
  }, [props, toggle]);

  const removeActiveClassFromSubMenu = () => {
    document.querySelectorAll(".sub-menu").forEach((el) => {
      el.classList.remove("active");
    });
  };

  useEffect(() => {
    let menuItems = document.querySelectorAll(".menu-item");
    menuItems.forEach((el) => {
      el.addEventListener("click", (e) => {
        const next = el.nextElementSibling;

        removeActiveClassFromSubMenu();
        menuItems.forEach((el) => el.classList.remove("active"));
        el.classList.toggle("active");

        if (next !== null) {
          next.classList.toggle("active");
        }
      });
    });
  }, []);

  // The toggle method
  const handleToggle = () => {
    dispatch({ type: GLOBALTYPES.TOGGLE, payload: !toggle });
  };

  // LOGOUT USER
  const logoutUser = async () => {
    await getDataAPI("logout", token);
    dispatch({ type: GLOBALTYPES.TOKEN, payload: "" });
    dispatch({ type: GLOBALTYPES.LOGGED_AGENT, payload: {} });
    window.location.href = "/";
  };

  //

  return (
    <>
      <div className={`side-menu ${toggle ? "inactive" : ""}`}>
        {/* THE TOP SECTION */}
        <div className="top-section">
          {toggle ? (
            <div className="toggle-logo">
              <img src="/logo192.png" alt="logo" />
            </div>
          ) : (
            <div className="logo">
              <img src="/wealth2.png" alt="logo" />
            </div>
          )}
        </div>

        {/* THE MAIN MENU SECTION  */}
        <div className="main-menu">
          <ul>
            <li>
              <div className="menu-item">
                <div
                  className={toggle ? "menu-icon menu-icons" : "menu-icon"}
                  onClick={handleToggle}
                >
                  <i className="bi bi-speedometer2"></i>
                </div>
                <span>Dashboard</span>
              </div>

              <ul className={`sub-menu`}>
                <li>
                  <NavLink to="/overview">Overview</NavLink>
                  <NavLink to="/dashboard/all-activity">All Activity</NavLink>
                </li>
              </ul>
            </li>

            <li>
              <div className="menu-item">
                <div
                  className={toggle ? "menu-icon menu-icons" : "menu-icon"}
                  onClick={handleToggle}
                >
                  <i className="bi bi-person-bounding-box"></i>
                </div>
                <span>Agents</span>
              </div>
              <ul className={`sub-menu`}>
                <li>
                  <NavLink to="/dashboard/create-agent">Create Agent</NavLink>
                  <NavLink to="/dashboard/all-agents">All Agents</NavLink>
                </li>
              </ul>
            </li>

            <li>
              <div className="menu-item">
                <div
                  className={toggle ? "menu-icon menu-icons" : "menu-icon"}
                  onClick={handleToggle}
                >
                  <i className="bi bi-gift"></i>
                </div>
                <span>Portfolios</span>
              </div>
              <ul className={`sub-menu`}>
                <li>
                  <NavLink to="/dashoard/all-portfolio">All Portfolios</NavLink>
                  {/* <NavLink to="/dashboard/investment-portfolio">
                    Investment Portfolios
                  </NavLink>
                  <NavLink to="/dashboard/cash-portfolio">
                    Cash Portfolios
                  </NavLink>
                  <NavLink to="/dashboard/closed-portfolio">
                    Closed Portfolios
                  </NavLink> */}
                </li>
              </ul>
            </li>

            <li>
              <div className="menu-item">
                <div
                  className={toggle ? "menu-icon menu-icons" : "menu-icon"}
                  onClick={handleToggle}
                >
                  <i className="bi bi-credit-card-2-back"></i>
                </div>
                <span>Transactions</span>
              </div>

              <ul className={`sub-menu`}>
                <li>
                  {/* <NavLink to="dashboard/withdraw-request">
                    Withdraw Request
                  </NavLink> */}
                  <NavLink to="/dashboard/all-payment">All Payment</NavLink>
                  {/* <NavLink to="/dashboard/all-withdrawal">Withdrawal</NavLink>
                  <NavLink to="/dashboard/all-deposits">Deposits</NavLink> */}
                </li>
              </ul>
            </li>

            <li>
              <div className="menu-item">
                <div
                  className={toggle ? "menu-icon menu-icons" : "menu-icon"}
                  onClick={handleToggle}
                >
                  <i className="bi bi-people-fill"></i>
                </div>
                <span>Users</span>
              </div>
              <ul className={`sub-menu`}>
                <li>
                  <NavLink to="/users/all-users">All Users</NavLink>
                </li>
              </ul>
            </li>

            <li>
              <div className="menu-item">
                <div
                  className={toggle ? "menu-icon menu-icons" : "menu-icon"}
                  onClick={handleToggle}
                >
                  <i className="bi bi-gear"></i>
                </div>
                <span>Settings</span>
              </div>
              <ul className={`sub-menu`}>
                <li>
                  {/* <NavLink to="/settings/create-complain">
                    Create Complain
                  </NavLink>
                  <NavLink to="/settings/view-complain">View Complain</NavLink> */}
                  <div className="log" onClick={logoutUser}>
                    Logout
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
