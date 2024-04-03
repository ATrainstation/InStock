import React from "react";
import "./CancelButton.scss";

function CancelButton({ link, classname }) {
  return (
    <button className={`${classname} cancel-button`} onClick={link}>
      Cancel
    </button>
  );
}

export default CancelButton;
