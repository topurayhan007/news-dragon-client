import React from "react";
import qzone1 from "../../../assets/qZone1.png";
import qzone2 from "../../../assets/qzone2.png";
import qzone3 from "../../../assets/qzone3.png";

const QZone = () => {
  return (
    <div className="bg-light mt-4 text-center py-4 rounded-1">
      <h4>Q-Zone</h4>
      <div>
        <img src={qzone1} alt="" />
        <img src={qzone2} alt="" />
        <img src={qzone3} alt="" />
      </div>
    </div>
  );
};

export default QZone;
