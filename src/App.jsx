import React, { useState } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import Modal from './components/modal/Modal.jsx'

import { getWeekStartDate, generateWeekRange } from '../src/utils/dateUtils.js';

import './common.scss';

const App = () => {
  const [weekStartDate, setWeekDate] = useState(new Date());
  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));
  const [showModal, setShowModal] = useState(false);

  const displayModal = () => {
    setShowModal(!showModal);
  }

  return (
      <>
        {showModal && (
          <Modal displayModal={displayModal} />
        )}
         <Header weekDates={weekDates} 
          weekStartDate={weekStartDate}
          setWeekDate={setWeekDate}
          displayModal={displayModal}
      />
         <Calendar weekDates={weekDates} />
      </>
  )
}

export default App;
