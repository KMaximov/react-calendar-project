import React from 'react';
import PropTypes from 'prop-types';
import Day from '../day/Day';

import './week.scss';

const Week = ({ weekDates, events, updateEvents }) => {
  return (
    <div className="calendar__week">
      {weekDates.map((dayStart) => {
        const dayEnd = new Date(dayStart.getTime()).setHours(
          dayStart.getHours() + 24
        );
        
        const dayEvents = events.filter(
          (event) => event.dateFrom > dayStart && event.dateTo < dayEnd
        );

        return (
          <Day
            key={dayStart.getDate()}
            dataDay={dayStart.getDate()}
            dayEvents={dayEvents}
            dayStart={dayStart}
            updateEvents={updateEvents}
          />
        );
      })}
    </div>
  );
};

Week.propTypes = {
  weekDates: PropTypes.array,
  events: PropTypes.array,
  updateEvents: PropTypes.func,
}

export default Week;