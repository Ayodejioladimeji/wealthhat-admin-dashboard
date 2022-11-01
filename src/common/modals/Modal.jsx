import React from "react";
import { FaTimes } from "react-icons/fa";

import "./Modal.css";

// PACKAGES

// COMPONENTS

const Modal = ({ children, cancelModal, height, width }) => {
  // modal styels
  const styles = {
    height,
    width,
  };

  return (
    <div className="modalBackground">
      <div style={styles} className="modalContainer">
        {children}

        <div onClick={cancelModal} className="modal-cancel">
          <FaTimes />
        </div>
      </div>
    </div>
  );
};

export default Modal;
