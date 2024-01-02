import React, { useState } from 'react';

const WeeklySchedule = () => {
    const [schedule, setSchedule] = useState({
        Mon: { '08:00 AM': false, '08:30 AM': false, '09:00 AM': false, '09:30 AM': false, '10:00 AM': false, '10:30 AM': false, '11:00 AM': false, '11:30 AM': false, '12:00 PM': false, '12:30 PM': false, '01:00 PM': false, '01:30 PM': false, '02:00 PM': false, '02:30 PM': false, '03:00 PM': false, '03:30 PM': false, '04:00 PM': false, '04:30 PM': false, '05:00 PM': false, '05:30 PM': false, '06:00 PM': false, '06:30 PM': false, '07:00 PM': false, '07:30 PM': false, '08:00 PM': false, '08:30 PM': false, '09:00 PM': false, '09:30 PM': false, '10:00 PM': false, '10:30 PM': false, '11:00 PM': false, },
        Tue: { '08:00 AM': false, '08:30 AM': false, '09:00 AM': false, '09:30 AM': false, '10:00 AM': false, '10:30 AM': false, '11:00 AM': false, '11:30 AM': false, '12:00 PM': false, '12:30 PM': false, '01:00 PM': false, '01:30 PM': false, '02:00 PM': false, '02:30 PM': false, '03:00 PM': false, '03:30 PM': false, '04:00 PM': false, '04:30 PM': false, '05:00 PM': false, '05:30 PM': false, '06:00 PM': false, '06:30 PM': false, '07:00 PM': false, '07:30 PM': false, '08:00 PM': false, '08:30 PM': false, '09:00 PM': false, '09:30 PM': false, '10:00 PM': false, '10:30 PM': false, '11:00 PM': false, },
        Wed: { '08:00 AM': false, '08:30 AM': false, '09:00 AM': false, '09:30 AM': false, '10:00 AM': false, '10:30 AM': false, '11:00 AM': false, '11:30 AM': false, '12:00 PM': false, '12:30 PM': false, '01:00 PM': false, '01:30 PM': false, '02:00 PM': false, '02:30 PM': false, '03:00 PM': false, '03:30 PM': false, '04:00 PM': false, '04:30 PM': false, '05:00 PM': false, '05:30 PM': false, '06:00 PM': false, '06:30 PM': false, '07:00 PM': false, '07:30 PM': false, '08:00 PM': false, '08:30 PM': false, '09:00 PM': false, '09:30 PM': false, '10:00 PM': false, '10:30 PM': false, '11:00 PM': false, },
        Thu: { '08:00 AM': false, '08:30 AM': false, '09:00 AM': false, '09:30 AM': false, '10:00 AM': false, '10:30 AM': false, '11:00 AM': false, '11:30 AM': false, '12:00 PM': false, '12:30 PM': false, '01:00 PM': false, '01:30 PM': false, '02:00 PM': false, '02:30 PM': false, '03:00 PM': false, '03:30 PM': false, '04:00 PM': false, '04:30 PM': false, '05:00 PM': false, '05:30 PM': false, '06:00 PM': false, '06:30 PM': false, '07:00 PM': false, '07:30 PM': false, '08:00 PM': false, '08:30 PM': false, '09:00 PM': false, '09:30 PM': false, '10:00 PM': false, '10:30 PM': false, '11:00 PM': false, },
        Friday: { '08:00 AM': false, '08:30 AM': false, '09:00 AM': false, '09:30 AM': false, '10:00 AM': false, '10:30 AM': false, '11:00 AM': false, '11:30 AM': false, '12:00 PM': false, '12:30 PM': false, '01:00 PM': false, '01:30 PM': false, '02:00 PM': false, '02:30 PM': false, '03:00 PM': false, '03:30 PM': false, '04:00 PM': false, '04:30 PM': false, '05:00 PM': false, '05:30 PM': false, '06:00 PM': false, '06:30 PM': false, '07:00 PM': false, '07:30 PM': false, '08:00 PM': false, '08:30 PM': false, '09:00 PM': false, '09:30 PM': false, '10:00 PM': false, '10:30 PM': false, '11:00 PM': false, },
    });

    const handleCheckboxChange = (day, time) => {
        setSchedule((prevSchedule) => ({
            ...prevSchedule,
            [day]: {...prevSchedule[day], [time]: !prevSchedule[day][time] },
        }));
    };

    return ( <
        div >
        <
        table >
        <
        thead >
        <
        tr >

        {
            Object.keys(schedule['Mon']).map((time) => ( <
                th key = { time } > < /th>
            ))
        } <
        /tr> <
        /thead> <
        tbody > {
            Object.keys(schedule).map((day) => ( <
                tr key = { day } >
                <
                td > { day } < /td> {
                    Object.keys(schedule[day]).map((time) => ( <
                        td key = { `${day}-${time}` } >
                        <
                        input type = "checkbox"
                        checked = { schedule[day][time] }
                        onChange = {
                            () => handleCheckboxChange(day, time) }
                        /> <
                        span > { time } < /span> <
                        /td>
                    ))
                } <
                /tr>
            ))
        } <
        /tbody> <
        /table> <
        /div>
    );
};

export default WeeklySchedule;