import React, { useRef } from "react";
import "./styles30.css";  // Ensure correct path

function Seal30() {
  const nameRef = useRef(null);

  return (
    <div className="seal30stamp-container">
      <span
        className="seal30dynamic-name"
        contentEditable
        suppressContentEditableWarning
        ref={nameRef}
      ></span>
      <p className="seal30designation">Manager</p>
      <p className="seal30emp-no">Emp. No. 12859</p>
      <p className="seal30branch">Anakkatty Branch</p>
    </div>
  );
}

export default Seal30;
