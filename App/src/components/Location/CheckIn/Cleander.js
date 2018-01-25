import React from 'react';
import moment from 'moment';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import DayPicker from 'react-day-picker';

import styled from 'styled-components';
import 'react-day-picker/lib/style.css';

export default class Example extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedDay: undefined,
      isDisabled: false,
    };
    this.DAY_FORMAT = 'DD/MM/YYYY';
    this.handleDayChange = this.handleDayChange.bind(this);
    this.handleDayChange1 = this.handleDayChange1.bind(this);
  }

  handleDayChange(selectedDay, modifiers) {
    const formattedDay = selectedDay ? moment(selectedDay).format(this.DAY_FORMAT) : '';
    this.props.handleFailedChange(formattedDay, "checkIn")
    this.setState({
      selectedDay,
      isDisabled: modifiers.disabled,
    });
  };

  handleDayChange1(selectedDay, modifiers) {
    if (this.state.selectedDay) {
      const formattedDay = selectedDay ? moment(selectedDay).format(this.DAY_FORMAT) : '';
      this.props.handleFailedChange(formattedDay, "checkOut");
    }
    else{
      document.getElementById("notLogIn").innerHTML = "please chose first check in date"
    }

  }
  getCheckInCheckOut() {
    let dates = [];

    for (let date of this.props.checkInCheckOut) {
      let checkOutRes = date.checkout.split("/").reverse()
      let checkInRes = date.checkin.split("/").reverse()
      dates.push({ after: new Date(checkInRes), before: new Date(checkOutRes) })
    }
    return dates;
  }



  render() {
    const { selectedDay, isDisabled } = this.state;
    const formattedDay = selectedDay ? moment(selectedDay).format(this.DAY_FORMAT) : '';
    const dayPickerPropsCheckIn = {
      disabledDays: [...this.getCheckInCheckOut(), { before: new Date(), },]
    }
    const dayPickerPropsCheckOut = {
      disabledDays: [...this.getCheckInCheckOut(), { before: new Date() },
      {
        before: new Date(this.state.selectedDay)
      }
      ]
    }
    return (
      <div>
        <Label>Check In </Label >
        <DayPickerInput
          value={formattedDay}
          onDayChange={this.handleDayChange}
          format={this.DAY_FORMAT}
          placeholder={`E.g. ${moment().locale('en').format(this.DAY_FORMAT)}`}
          dayPickerProps={dayPickerPropsCheckIn}
        />
        <Label>   Check Out </Label >
        <DayPickerInput
          value={formattedDay}
          onDayChange={this.handleDayChange1}
          format={this.DAY_FORMAT}
          placeholder={`E.g. ${moment().locale('en').format(this.DAY_FORMAT)}`}
          dayPickerProps={dayPickerPropsCheckOut}

        />
      </div >
    );
  }
}
const Label = styled.label`
color: #333;
height: 5%;
width: 25%;
margin-top: 2%;
margin-left: 36%;
text-align: right;
float:left;
font-weight: bold;
`
