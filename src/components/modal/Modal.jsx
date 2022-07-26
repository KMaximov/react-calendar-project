import React, { useState } from 'react';
import './modal.scss';
import moment from 'moment';
import events from '../../gateway/events';

const Modal = ( { displayModal }) => {

  const [title, setTitle] = useState('');
  const [desctiption, setDescription] = useState('');
  const [date, setDate] = useState(moment(new Date()).format('YYYY-MM-DD'));
  const [startTime, setStartTime] = useState(moment(new Date()).format(`HH:MM`));
  const [endTime, setEndTime] = useState(moment(new Date()).format('HH:MM'))

  const changeHandler = event => {
    if(event.target.name === 'title') {
      setTitle(event.target.value);
      return;
    }
    setDescription(event.target.value);
  }

  const changeDate = event => {
    setDate(event.target.value)
  }

  const changeStartTime = event => {
    setStartTime(event.target.value)
  }

  const changeEndTime = event => {
    setEndTime(event.target.value)
  }

  const createEvent = event => {
    event.preventDefault()

    const [year, month, day] = date.split('-')
    const [startHours, startMinutes] = startTime.split(':')
    const [endHours, endMinutes] = endTime.split(':')

    const eventData = {
      id: events.length + 1,
      title,
      desctiption,
      dateFrom: new Date(year, month - 1, day, startHours, startMinutes),
      dateTo: new Date(year, month - 1, day, endHours, endMinutes)
    }

    events.push(eventData)
    displayModal();
  }

  return (
      <div className="modal overlay">
        <div className="modal__content">
          <div className="create-event">
            <button className="create-event__close-btn" onClick={displayModal}>+</button>
            <form className="event-form">
              <input
                type="text"
                name="title"
                placeholder="Add title"
                className="event-form__field"
                value={title}
                onChange={changeHandler}
              />
              <div className="event-form__time">
                <input
                  type="date"
                  name="date"
                  className="event-form__field" 
                  value={date}
                  onChange={changeDate}
                  />
                <input
                  type="time"
                  name="startTime"
                  className="event-form__field"
                  value={startTime}
                  onChange={changeStartTime}
                />
                <span>-</span>
                <input
                  type="time"
                  name="endTime"
                  className="event-form__field"
                  value={endTime}
                  onChange={changeEndTime}
                />
              </div>
              <textarea
                name="description"
                placeholder="Add description"
                className="event-form__field"
                value={desctiption}
                onChange={changeHandler}
              />
              <button type="submit" className="event-form__submit-btn" onClick={createEvent}>
                Create
              </button>
            </form>
          </div>
        </div>
      </div>   
  )
}

export default Modal;
