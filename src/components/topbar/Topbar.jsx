import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { MdOutlineMenuOpen } from "react-icons/md";

//
import "./Topbar.css";
import { GLOBALTYPES } from "./../../redux/actions/globalTypes";

const Topbar = () => {
  const { toggle } = useSelector((state) => state.utils);
  const { logged_agent } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const { firstname, lastname, role } = logged_agent;

  //
  return (
    <div className="top">
      <div className={toggle ? "topbars" : "topbar"}>
        <div className="topbar-icon">
          <MdOutlineMenuOpen
            onClick={() =>
              dispatch({ type: GLOBALTYPES.TOGGLE, payload: !toggle })
            }
            className="toggle-icon"
          />
        </div>

        <div className="topbar-profile">
          <div className="topbar-name">
            <small>{firstname}</small> <small>{lastname}</small>
            {role === 0 ? <span>AGENT</span> : <span>ADMINISTRATOR</span>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
