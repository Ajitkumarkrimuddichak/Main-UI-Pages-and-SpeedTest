import React from "react";
import moment from "moment";

const MomentDate = () => {
  return (
    <>
      <h3>
        <b className="moment">{moment().format("llll")}</b>
      </h3>
    </>
  );
};

export default MomentDate;
