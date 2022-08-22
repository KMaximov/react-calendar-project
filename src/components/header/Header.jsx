import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import './header.scss';

const Header = ({ weekDates, setWeekStartDate, weekStartDate, showModal, setShowModal }) => {
  const changeWeek = (event) => {
    if (event.target.className === "navigation__today-btn button") {
      setWeekStartDate(new Date())
    } else if (event.target.className === "fas fa-chevron-left") {
      setWeekStartDate(new Date(weekStartDate.setDate(weekStartDate.getDate() - 7)))
    } else if (event.target.className === "fas fa-chevron-right") {
      setWeekStartDate(new Date(weekStartDate.setDate(weekStartDate.getDate() + 7)))
    }
  }

  const getMonth = () => {
    if(weekDates[0].getMonth() !== weekDates[6].getMonth()) {
    return `${moment(weekDates[0]).format("MMM")} - ${moment(weekDates[6]).format("MMM")}`  
  } return `${moment(weekDates[0]).format("MMM")}`
  }

  return (
    <header className="header">
      <button className="button create-event-btn" onClick={() => {setShowModal(!showModal)}}>
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

Header.propTypes = {
  weekDates: PropTypes.array,
  setWeekStartDate: PropTypes.func,
  weekStartDate: PropTypes.object,
  showModal: PropTypes.bool,
  setShowModal: PropTypes.func,
}

export default Header;