import React, { useEffect, useState } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import Modal from './components/modal/Modal.jsx'
import { fetchEventsList } from './gateway/events.js';

import { getWeekStartDate, generateWeekRange } from '../src/utils/dateUtils.js';

import './common.scss';

const App = () => {
  const [weekStartDate, setWeekDate] = useState(new Date());
  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));
  const [showModal, setShowModal] = useState(false);
  const [event, setEvent] = useState([])

  const displayModal = () => {
    setShowModal(!showModal);
  }
  
  const updateEvents = () => {
    fetchEventsList().then(eventsList => {
      const updateEventsList = eventsList.map(({ id, description, title, dateFrom, dateTo }) => ({
        id,
        description,
        title,
        dateFrom: new Date(dateFrom),
        dateTo: new Date(dateTo),
      }));
      setEvent(updateEventsList)
    })
  }

  useEffect(() => {
    updateEvents()
  }, []);

  return (
      <>
        {showModal && (
          <Modal 
            displayModal={displayModal} 
            updateEvents={updateEvents}
          />
        )}
        <Header weekDates={weekDates} 
          weekStartDate={weekStartDate}
          setWeekDate={setWeekDate}
          displayModal={displayModal}
        />
         <Calendar 
          weekDates={weekDates} 
          events={event} 
          updateEvents={updateEvents}
         />
      </>
  )
}

export default App;
