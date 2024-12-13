import React, { useState, useEffect } from "react";

const CurrentDate = () => {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const today = new Date(); //Date() looks at the users system date
    const formattedDate = today.toLocaleDateString(); // Formater dato til MM/DD/YYYY
    setCurrentDate(formattedDate);
  }, []);

  return <p style={{ margin: "0px" }}>{currentDate}</p>;
};

export default CurrentDate;
