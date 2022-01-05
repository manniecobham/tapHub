import React, { useState } from 'react';

//styles
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { Container } from './DatePicker.styled';

// components
import { DateRangePicker } from  'react-date-range';

const DatePicker = ({ startDate, endDate, setStartDate, setEndDate, showDatePicker, setShowDatePicker }) => {

  //min and max dates set here
  const minDate = new Date();
  minDate.setDate(minDate.getDate() - 10)
  const maxDate = new Date();

  //selectionRange and handleSelect in documentation of react-date-range
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  };
  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  //just using to print selected in console after submitted
  //also sets picker to hide again on submit
  const handleClick = () => {
    console.log("start date = " + startDate)
    console.log("end date = " + endDate)
    setShowDatePicker(!showDatePicker)
  }

  return (
    <Container className="datepicker">
      <DateRangePicker 
      ranges={[selectionRange]}
      onChange={handleSelect}
      minDate={minDate}
      maxDate={maxDate}
      staticRanges={[]}
      inputRanges={[]}
      showDateDisplay={true}
      />
      <div className="submit" onClick={handleClick}>Submit</div>
    </Container>
  )
}

export default DatePicker
