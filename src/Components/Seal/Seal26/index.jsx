import React, { useEffect } from 'react';

const Seal26 = ({ branchName }) => {
  useEffect(() => {
    import('../Seal26/styles.css');
  }, []);
  return (
    <div className="seal26box">
      <div className="seal26stamp">
        <div className="seal26branch-name">
          ESAF Small Finance Bank Ltd.
          <p>Kuzhalmannam Branch</p>
        </div>
        <div className="seal26pay">PAY HALF VALUE</div>
        <div className="seal26receiver">Receiver's Initials</div>
      </div>
    </div>
  );
};

export default Seal26;
