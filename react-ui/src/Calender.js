import React, { useState } from "react";

const Calender = () => {
  const [date, setDate] = useState();
  //console.log("Date", date);
  return (
    <>
      <h6>{date}</h6>
      <input type="date" onChange={(e) => setDate(e.target.value)} />
    </>
  );
};

export default Calender;
