import React from 'react';
import PropTypes from 'prop-types';

import Navigation from './../navigation/Navigation';
import Week from '../week/Week';
import Sidebar from '../sidebar/Sidebar';

import './calendar.scss';

const Calendar = ({ weekDates, events, updateEvents }) => {
  return (
      <section className="calendar">
        <Navigation weekDates={weekDates} />
        <div className="calendar__body">
          <div className="calendar__week-container">
            <Sidebar />
            <Week 
              weekDates={weekDates} 
              events={events} 
              updateEvents={updateEvents}
            />
          </div>
        </div>
      </section>
  )
}

export default Calendar;

Calendar.prototype = {
  weekDates: PropTypes.array.isRequired,
  events: PropTypes.array.isRequired,
  updateEvents: PropTypes.func.isRequired,
}