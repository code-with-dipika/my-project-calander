import React, { useState } from 'react';
import { format, addWeeks, subWeeks } from 'date-fns';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import WeeklySchedule from './WeeklySchedule';
import TimezoneSelect from 'react-timezone-select';
import YourComponent from './TimeZone';
import TimeZone from './TimeZone';


const WeeklyDateDisplay = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    const displayDate = (date) => {
        return format(date, 'yyyy-MM-dd');
    };

    const moveWeeks = (weeks) => {
        setCurrentDate((prevDate) => (weeks >= 0 ? addWeeks(prevDate, weeks) : subWeeks(prevDate, Math.abs(weeks))));
    };

    return ( <
        div style = {
            { marginTop: 20 } } >


        <
        button style = {
            { width: "200px", height: "30px" } }
        onClick = {
            () => moveWeeks(-1) } > < FaArrowLeft / > Previous Week < /button>&nbsp; <
        button style = {
            { width: "1000px", height: "30px" } } > { displayDate(currentDate) } < /button>&nbsp; <
        button style = {
            { width: "200px", height: "30px" } }
        onClick = {
            () => moveWeeks(1) } > Next Week < FaArrowRight / > < /button>  { /* <TimezoneSelect/> */ } <
        div style = {
            { marginTop: 50 } } >
        <
        TimeZone / >
        <
        /div> <
        div style = {
            { marginTop: 50, height: "30px" } } >

        <
        WeeklySchedule / >
        <
        /div> <
        /div>
    );
};

export default WeeklyDateDisplay;