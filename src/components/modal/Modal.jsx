import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './modal.scss';
import moment from 'moment';
import { createEvent } from '../../gateway/events';

class Modal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      description: '',
      date: moment(new Date()).format('YYYY-MM-DD'),
      startTime: moment(new Date()).format(`HH:MM`),
      endTime: moment(new Date()).format(`HH:MM`),
    }
  }

  changeEventHandler = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    })
  }
  
  submitEventHandler = async e => {
    e.preventDefault();
    const { title, description, date, startTime, endTime } = this.state;

    const [year, month, day] = date.split('-')
    const [startHours, startMinutes] = startTime.split(':')
    const [endHours, endMinutes] = endTime.split(':')

    const eventData = {
      title,
      description,
      dateFrom: new Date(year, month - 1, day, startHours, startMinutes),
      dateTo: new Date(year, month - 1, day, endHours, endMinutes)
    }

    this.props.setShowModal(!this.props.showModal);
    await createEvent(eventData);
    await this.props.updateEvents();
  }

  render() {
    console.log(this.state)
    return (
      <div className="modal overlay">
        <div className="modal__content">
          <div className="create-event">
            <button className="create-event__close-btn" onClick={() => {this.props.setShowModal(!this.props.showModal)}}>+</button>
            <form className="event-form">
              <input
                type="text"
                name="title"
                placeholder="Add title"
                className="event-form__field"
                value={this.state.title}
                onChange={this.changeEventHandler}
              />
              <div className="event-form__time">
                <input
                  type="date"
                  name="date"
                  className="event-form__field" 
                  value={this.state.date}
                  onChange={this.changeEventHandler}
                  />
                <input
                  type="time"
                  name="startTime"
                  className="event-form__field"
                  value={this.state.startTime}
                  onChange={this.changeEventHandler}
                />
                <span>-</span>
                <input
                  type="time"
                  name="endTime"
                  className="event-form__field"
                  value={this.state.endTime}
                  onChange={this.changeEventHandler}
                />
              </div>
              <textarea
                name="description"
                placeholder="Add description"
                className="event-form__field"
                value={this.state.desctiption}
                onChange={this.changeEventHandler}
              />
              <button type="submit" className="event-form__submit-btn" onClick={this.submitEventHandler}>
                Create
              </button>
            </form>
          </div>
        </div>
      </div>   
  )
  }

}

Modal.propTypes = {
  showModal: PropTypes.bool,
  setShowModal: PropTypes.func,
  updateEvents: PropTypes.func,
}

export default Modal;
