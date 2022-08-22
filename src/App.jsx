import React, { useEffect, useState } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import Modal from './components/modal/Modal.jsx'
import { fetchEventsList } from './gateway/events.js';

import { getWeekStartDate, generateWeekRange } from '../src/utils/dateUtils.js';

import './common.scss';

const App = () => {
  const [weekStartDate, setWeekStartDate] = useState(new Date());
  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));
  const [showModal, setShowModal] = useState(false);
  const [eventsList, setEventsList] = useState([])

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
      setEventsList(updateEventsList)
    })
  }

  useEffect(() => {
    updateEvents()
  }, []);

  return (
      <>
        {showModal && (
          <Modal 
            updateEvents={updateEvents}
            showModal={showModal}
            setShowModal={setShowModal}
          />
        )}
        <Header weekDates={weekDates} 
          weekStartDate={weekStartDate}
          setWeekStartDate={setWeekStartDate}
          showModal={showModal}
          setShowModal={setShowModal}
        />
         <Calendar 
          weekDates={weekDates} 
          events={eventsList} 
          updateEvents={updateEvents}
         />
      </>
  )
}

export default App;
