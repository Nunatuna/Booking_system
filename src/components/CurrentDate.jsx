import React, { useState, useEffect } from "react";

const CurrentDate = () => {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString(); // Format the date as MM/DD/YYYY
    setCurrentDate(formattedDate);
  }, []);

  return <p style={{ margin: "0px" }}>{currentDate}</p>;
};

export default CurrentDate;
