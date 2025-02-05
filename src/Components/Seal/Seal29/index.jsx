import React, { useRef } from "react";
import "../Seal29/styles29.css";

function Seal29() {
  const roleRef = useRef(null);
  const branchRef = useRef(null);

  return (
    <div className="seal-container">
      <div className="seal29stamp">
        <span
          className="seal29role"
          contentEditable
          suppressContentEditableWarning
          ref={roleRef}
        ></span>
        <div className="seal29bank-name">Esaf Bank Anakkatty</div>
        <div className="seal29branch">
          Branch:{" "}
          <span
            className="seal29branch-number"
            contentEditable
            suppressContentEditableWarning
            ref={branchRef}
          ></span>
        </div>
      </div>
    </div>
  );
}

export default Seal29;
