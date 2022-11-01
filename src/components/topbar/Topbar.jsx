import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { MdOutlineMenuOpen } from "react-icons/md";

//
import "./Topbar.css";
import { GLOBALTYPES } from "./../../redux/actions/globalTypes";

const Topbar = () => {
  const { toggle } = useSelector((state) => state.utils);
  const dispatch = useDispatch();

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
            <small>Ayodeji</small>
            <small> Oladimeji</small>
            <span>ADMINISTRATOR</span>
          </div>

          <div className="topbar-image">
            <img src="/assets/fashion.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
