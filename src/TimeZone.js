import React, { useState } from 'react';
import TimezoneSelect from 'react-timezone-select';

const TimeZone = () => {
    const [selectedTimezone, setSelectedTimezone] = useState('');

    const handleTimezoneChange = (timezone) => {
        setSelectedTimezone(timezone);
        // You can perform additional actions when the timezone changes if needed
    };

    return ( <
        div >
        <
        label > Select Timezone: < /label> <
        TimezoneSelect value = { selectedTimezone }
        onChange = { handleTimezoneChange }
        name = "timezone"
        id = "timezone"
        label = "Timezone"
        placeholder = "Select timezone" /
        >

        <
        /div>
    );
};

export default TimeZone;