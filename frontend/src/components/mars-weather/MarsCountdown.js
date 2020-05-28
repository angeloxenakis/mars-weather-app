import React, { useEffect, useState } from 'react';

let useComponentDidMount = (callback) => {
    useEffect(callback, [])
}

export function MarsCountdown() {
    let [ currentDate, setCurrentDate ] = useState(new Date().getTime())

    useComponentDidMount( () => {
        setCurrentDate(new Date().getTime())
    })

    setInterval(() => {
        setCurrentDate(new Date().getTime())
    }, 1000)

    let countDownDate = new Date("Jan 1, 2030 12:00:00").getTime();
    let distance = countDownDate - currentDate;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return (
        <div className="mars-countdown">
            <h4>Countdown to Human Contact on Mars:</h4> 
            <p><strong>Days:</strong> {days} | <strong>Hours:</strong> {hours} | <strong>Minutes:</strong> {minutes} | <strong>Seconds:</strong> {seconds}</p>
            <p className="small-countdown">Countdown based on esitmates made by Nasa</p>
        </div>
    )
}