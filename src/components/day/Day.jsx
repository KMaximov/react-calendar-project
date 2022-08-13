import React from 'react';
import PropTypes from 'prop-types';
import Hour from '../hour/Hour';
import RedLine from '../redLine/RedLine';

import './day.scss';

const Day = ({ dataDay, dayEvents, dayStart, updateEvents }) => {
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
        const hourEvents = dayEvents.filter(
          (event) => event.dateFrom.getHours() === hour
        );
        
        return (
          <Hour 
            key={dataDay + hour}
            dataHour={hour} 
            hourEvents={hourEvents} 
            dayStart={dayStart} 
            updateEvents={updateEvents}
          />
        );
      })}
    </div>
  );
};

Day.propTypes = {
  dataDay: PropTypes.number,
  dayEvents: PropTypes.array,
  dayStart: PropTypes.object,
  updateEvents: PropTypes.func,
}

export default Day;