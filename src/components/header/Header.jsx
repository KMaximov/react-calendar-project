import React from 'react';
import moment from 'moment';
import './header.scss';

const Header = ({ weekDates, setWeekDate, weekStartDate }) => {

  const changeWeek = (event) => {
    if (event.target.className === "navigation__today-btn button") {
      setWeekDate(new Date())
    } else if (event.target.className === "fas fa-chevron-left") {
      setWeekDate(new Date(weekStartDate.setDate(weekStartDate.getDate() - 7)))
    } else if (event.target.className === "fas fa-chevron-right") {
      setWeekDate(new Date(weekStartDate.setDate(weekStartDate.getDate() + 7)))
    }
  }

  const getMonth = () => {
    if(weekDates[0].getMonth() !== weekDates[6].getMonth()) {
    return `${moment(weekDates[0]).format("MMM")} - ${moment(weekDates[6]).format("MMM")}`  
  } return `${moment(weekDates[0]).format("MMM")}`
  }

  return (
    <header className="header">
      <button className="button create-event-btn">
        <i className="fas fa-plus create-event-btn__icon"></i>Create
      </button>
      <div className="navigation">
        <button className="navigation__today-btn button" onClick={changeWeek}>Today</button>
        <button className="icon-button navigation__nav-icon">
          <i className="fas fa-chevron-left" onClick={changeWeek}></i>
        </button>
        <button className="icon-button navigation__nav-icon">
          <i className="fas fa-chevron-right" onClick={changeWeek}></i>
        </button>
        <span className="navigation__displayed-month">
          {getMonth()}
        </span>
      </div>
    </header>
  );
};

export default Header;