import React, { useEffect, useState } from 'react';
import '../styles/Clock.css';

const Clock = () => {
  const [time, setTime] = useState('00:00:00');


  useEffect(() =>{
    const getCurrentHour = setInterval(() => {
      const date = new Date();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();
      setTime(`${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`);
    }, 1000);

    return () => {
      clearInterval(getCurrentHour)
    };
  }, []);

  return(
    <footer>
      <p className="clock">{ time }</p>
    </footer>
  )
}

export default Clock;
