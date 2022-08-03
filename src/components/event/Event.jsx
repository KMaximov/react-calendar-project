import React, { useState } from 'react';
import { fetchDeleteEvent } from '../../gateway/events';
import './event.scss';

const Event = ({ height, marginTop, title, time, description, updateEvents, id }) => {
  const eventStyle = {
    height,
    marginTop,
  };

  const [eventVisibility, setEventVisibility] = useState({
    showDeleteBtn: false,
    showEventData: true,
  })

  const showEvent = () => {
    setEventVisibility({
      showDeleteBtn: !eventVisibility.showDeleteBtn,
      showEventData: true,
    })
  }

  const deleteEvent = e => {
    e.stopPropagation();

    setEventVisibility({
      showDeleteBtn: false,
      showEventData: false,
    })

    fetchDeleteEvent(id);
    updateEvents();
  }

  return (
    <>
      {eventVisibility.showEventData && (
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