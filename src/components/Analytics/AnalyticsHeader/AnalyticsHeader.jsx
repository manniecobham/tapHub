import React, { useState } from 'react'

// style
import { Container } from './AnalyticsHeader.styled';

// images
import addIcon from '../../../images/Analytics/plusIcon.svg';
import downloadIcon from '../../../images/Analytics/downloadIcon.svg';

// components
import DatePicker from './DatePicker/DatePicker';

const AnalyticsHeader = () => {
    const [showDatePicker, setShowDatePicker] = useState(false);
        
    //entered start and end dates stored here
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    return (
        <Container className="comparison">
            <div className="comparison__rooms">
                <div className="room">
                    Room 117
                </div>
                <div className="add-room">
                    <img src={addIcon} alt="add icon" />
                    Add Comparison
                </div>
            </div>

            <div className="comparison__datepicker-download">
                {/* <div className="daterange">
                    {startDate.toLocaleDateString()} - {endDate.toLocaleDateString()}
                </div> */}
                <div className="picker">
                    {showDatePicker && 
                        <DatePicker 
                            startDate={startDate} 
                            endDate={endDate} 
                            setStartDate={setStartDate} 
                            setEndDate={setEndDate}
                            showDatePicker={showDatePicker} 
                            setShowDatePicker={setShowDatePicker}
                        />}
                    <div onClick={() => setShowDatePicker(!showDatePicker)}>{startDate.toLocaleDateString()} - {endDate.toLocaleDateString()}</div>
                </div>
                <div className="download">
                    <img src={downloadIcon} alt="download icon" />
                </div>
            </div>
        </Container>
    )
}

export default AnalyticsHeader
