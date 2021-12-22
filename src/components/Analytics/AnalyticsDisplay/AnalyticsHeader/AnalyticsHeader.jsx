import React from 'react'

// images
import addIcon from '../../../../images/Analytics/plusIcon.svg';
import downloadIcon from '../../../../images/Analytics/downloadIcon.svg';

const AnalyticsHeader = () => {
  return (
    <div className="comparison">
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
            <div className="picker">
                Date picker goes here
            </div>
            <div className="download">
                <img src={downloadIcon} alt="download icon" />
            </div>
        </div>
    </div>
  )
}

export default AnalyticsHeader
