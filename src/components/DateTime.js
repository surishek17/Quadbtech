import React, { useState, useEffect } from 'react';

// DateTime component to display the current date and time
const DateTime = () => {
    // State to hold the current date and time
  const [currentTime, setCurrentTime] = useState(new Date());

  // useEffect to set up a timer that updates the current time every second
  useEffect(() => {
    // Set up a timer to update the current time every second
    const timer = setInterval(() => {
      setCurrentTime(new Date());  // Update the state with the new date and time
    }, 1000);

    return () => clearInterval(timer); // Cleanup the interval on component unmount
  }, []);

   // Format the current date and time
  const formattedDate = currentTime.toLocaleDateString();
  const formattedTime = currentTime.toLocaleTimeString();

  return (
    <div className="date-time">
      <p>{formattedDate}</p>
      <p>{formattedTime}</p>
    </div>
  );
};

export default DateTime;
