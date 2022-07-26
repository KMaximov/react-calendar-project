import React, { useState } from 'react';

import './event.scss';

const Event = ({ height, marginTop, title, time, description }) => {
  const eventStyle = {
    height,
    marginTop,
  };

  const [eventVisibility, setEventVisibility] = useState({
    showDeleteBtn: false,
    showEvent: true,
  })

  const showEvent = () => {
    setEventVisibility({
      showDeleteBtn: !eventVisibility.showDeleteBtn,
      showEvent: true,
    })
  }

  const deleteEvent = (e) => {
    e.stopPropagation();
    setEventVisibility({
      showDeleteBtn: false,
      showEvent: false,
    })
  }

  return (
    <>
      {eventVisibility.showEvent && (
        <>
          <div style={eventStyle} className="event" onClick={showEvent}>
            <div className="event__title">{title}</div>
            <div className="event__time">{time}</div>
            {eventVisibility.showDeleteBtn && (
              <>
              <div className="event__description">{description}</div>
              <button className="delete__event-btn">
                <i className="fas fa-trash-alt" onClick={deleteEvent}>Delete</i>
              </button>
              </>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Event;