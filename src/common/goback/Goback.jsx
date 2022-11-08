import React from "react";
import { useNavigate } from "react-router-dom";
import { CgArrowLongLeft } from "react-icons/cg";

//
import "./Goback.css";
//

const Goback = () => {
  const navigate = useNavigate();
  return (
    <button className="goback" onClick={() => navigate(-1)}>
      <CgArrowLongLeft className="back-icon" />
      <div>Go back</div>
    </button>
  );
};

export default Goback;
