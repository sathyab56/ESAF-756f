import React from "react";
const Seal27 = ({ branchName }) => {
  useEffect(() => {
    import('../Seal27/styles.css');
  }, []);
  return (
    <div className="seal27box">
      <div className="seal27stamp">
        <div className="seal27branch-name">
          ESAF Small Finance Bank Ltd.
          <p>Kuzhalmannam Branch</p>
        </div>
        <div className="seal27reject">REJECT</div>
        <div className="seal27officer">Prescribed Officer</div>
      </div>
      <div className="details">
        <div>Rubber Stamp</div>
      </div>
    </div>
  );
};

export default Seal27;
