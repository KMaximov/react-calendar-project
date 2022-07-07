import React from 'react';
import moment from 'moment';
import './header.scss';

const Header = ({ weekDates }) => {
  // const onToday = (event) => {
  //   if (event.target.className === "navigation__today-btn button") {

  //   }
  // }

  const getMonth = () => {
    if(weekDates[0].getMonth() !== weekDates[6].getMonth()) {
      `${moment(weekDates[0]).format("MMM")} - ${moment(weekDates[6]).format("MMM")}`  
  } return `${moment(weekDates[0]).format("MMM")}`
  }

  return (
    <header className="header">
      <button className="button create-event-btn">
        <i className="fas fa-plus create-event-btn__icon"></i>Create
      </button>
      <div className="navigation">
        <button className="navigation__today-btn button">Today</button>
        <button className="icon-button navigation__nav-icon">
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className="icon-button navigation__nav-icon">
          <i className="fas fa-chevron-right"></i>
        </button>
        <span className="navigation__displayed-month">
          {getMonth()}
        </span>
      </div>
    </header>
  );
};

export default Header;