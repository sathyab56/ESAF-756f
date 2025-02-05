import React, { useState } from "react";

const Seal28 = () => {
  const [name, setName] = useState("");

  return (
    <div className="container">
      <div className="seal28box">
        <div className="seal28stamp">
          <span
            className="seal28name"
            contentEditable
            suppressContentEditableWarning
            onInput={(e) => setName(e.currentTarget.textContent)}
          >
            {name || "Enter name"}
          </span>
          <div className="seal28emp-id">Emp. Id. 12859</div>
        </div>
      </div>
    </div>
  );
};

export default Seal28;
