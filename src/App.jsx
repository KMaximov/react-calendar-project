import React, { useState } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';

import { getWeekStartDate, generateWeekRange } from '../src/utils/dateUtils.js';

import './common.scss';

const App = () => {
  const [weekStartDate, setWeekDate] = useState(new Date());
  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

  return (
      <>
         <Header weekDates={weekDates} 
          weekStartDate={weekStartDate}
          setWeekDate={setWeekDate}
      />
         <Calendar weekDates={weekDates} />
      </>
  )
}

export default App;
