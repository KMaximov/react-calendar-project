import React, { useState, useEffect } from 'react';
import './redLine.scss';

const RedLine = () => {
  const time = new Date().getHours() * 59 + new Date().getMinutes()
  const [redLinePosition, setRedLinePosition] = useState(time)

  useEffect(() => {  
    const interval = setInterval(() => {
      setRedLinePosition(new Date().getHours() * 59 + new Date().getMinutes())
    }, 60000);

    return () => {
      clearInterval(interval)
    };
  });
  
  return (
    <div className="redLine" style={{marginTop:time}}></div>
  )
}

export default RedLine;
