// import SingleDatePicker from 'react-dates/lib/components/SingleDatePicker';
// import DateSelect from './DateSelect';
import React from "react";

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookedDates: [new Date("2022-01-01"), new Date("2022-01-05")],
    };
  }

  isDateBlocked = (date) => {
    const { bookedDates } = this.state;
    return bookedDates.some((bookedDate) => {
      return (
        bookedDate.getDate() === date.getDate() &&
        bookedDate.getMonth() === date.getMonth() &&
        bookedDate.getFullYear() === date.getFullYear()
      );
    });
  }

  render() {
    return (
      <SingleDatePicker
        isDayBlocked={this.isDateBlocked}
      />
    );
  }
}