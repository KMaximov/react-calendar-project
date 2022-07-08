import React, { useState } from 'react';
import Hour from '../hour/Hour';
import RedLine from '../redLine/RedLine';

import './day.scss';

const Day = ({ dataDay, dayEvents, dayStart }) => {
  const hours = Array(24)
    .fill()
    .map((val, index) => index);

  const isToday = dayStart.getDate() === new Date().getDate()  
    && dayStart.getMonth() === new Date().getMonth()
    && dayStart.getFullYear() === new Date().getFullYear() 
  
  return (
    <div className="calendar__day" data-day={dataDay}>
      {isToday && <RedLine />}
      {hours.map((hour) => {
        //getting all events from the day we will render
        const hourEvents = dayEvents.filter(
          (event) => event.dateFrom.getHours() === hour
        );
        
        return (
          <Hour key={dataDay + hour} dataHour={hour} hourEvents={hourEvents} dayStart={dayStart} />
        );
      })}
    </div>
  );
};

export default Day;