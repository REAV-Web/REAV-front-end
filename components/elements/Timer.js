import React, { useEffect, useState } from "react";

const msInSecond = 1000;
const msInMinute = 60 * 1000;
const msInAHour = 60 * msInMinute;
const msInADay = 24 * msInAHour;

const getPartsofTimeDuration = (duration) => {
    const days = Math.floor(duration / msInADay);
    const hours = Math.floor((duration % msInADay) / msInAHour);
    const minutes = Math.floor((duration % msInAHour) / msInMinute);
    const seconds = Math.floor((duration % msInMinute) / msInSecond);

    return { days, hours, minutes, seconds };
};

const Timer = (endDateTime) => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const timeout = setTimeout(() => {
            const date = new Date();
            setTime(date.toLocaleTimeString());
        }, 1000);
        return () => {
            clearTimeout(timeout);
        };
    }, [time]);

    const now = Date.now(); // Number of milliseconds from begining of time

    const future = new Date(endDateTime.endDateTime); // The day we leave for Japan

    const timeDif = future.getTime() - now;
    const timeParts = getPartsofTimeDuration(timeDif);
    return (
        <>
            <div className="deals-countdown">
                <span className="countdown-section">
                    <span className="countdown-amount hover-up" suppressHydrationWarning>
                        {timeParts.days}
                    </span>
                    <span className="countdown-period"> days </span>
                </span>
                <span className="countdown-section">
                    <span className="countdown-amount hover-up" suppressHydrationWarning>
                        {timeParts.hours}
                    </span>
                    <span className="countdown-period"> hours </span>
                </span>
                <span className="countdown-section">
                    <span className="countdown-amount hover-up" suppressHydrationWarning>
                        {timeParts.minutes}
                    </span>
                    <span className="countdown-period"> mins </span>
                </span>
                <span className="countdown-section">
                    <span className="countdown-amount hover-up" suppressHydrationWarning>
                        {timeParts.seconds}
                    </span>
                    <span className="countdown-period"> sec </span>
                </span>
            </div>
        </>
    );
};

export default Timer;
