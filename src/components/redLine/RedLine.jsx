import React, { useState, useEffect } from 'react';
import './redLine.scss';

const RedLine = () => {
  const [redLinePosition, setRedLinePosition] = useState({
    marginTop: new Date().getHours() * 59 + new Date().getMinutes()
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setRedLinePosition({
        marginTop: new Date().getHours() * 59 + new Date().getMinutes()
      })
    }, 60000);

    return () => {
      clearInterval(interval)
    };
  });
  
  return (
    <div className="redLine" style={redLinePosition}></div>
  )
}

export default RedLine;
