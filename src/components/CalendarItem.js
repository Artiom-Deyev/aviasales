import { Calendar } from "antd";
import React from 'react';

const CalendarItem = () => {
    const onPanelChange = (value, mode) => {
        console.log(value.format('YYYY-MM-DD'), mode)
    };

    return (
        <div className="site-calendar-demo-card">
            <Calendar fullscreen={false} onPanelChange={onPanelChange} />
        </div>
    );
};

export default CalendarItem;
