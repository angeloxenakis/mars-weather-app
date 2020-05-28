import React, { useEffect, useState } from 'react';
import { MarsPastWeek } from './MarsPastWeek'
import { MarsWeatherInfo } from './MarsWeatherInfo'
import { MarsCountdown } from './MarsCountdown'
import mars from "../../assets/red-mars.svg"

let useComponentDidMount = (callback) => {
    useEffect(callback, [])
}

let currentDate = new Date().toDateString();

export function MarsWeatherPanel() {
    let [ marsWeatherWeek, setMarsWeatherWeek ] = useState(null)

    useComponentDidMount( () => {
        fetch('http://localhost:3000/mars_weather_records')
            .then( resp => resp.json() )
            .then( marsData => setMarsWeatherWeek(marsData) ) 
    })

    if (marsWeatherWeek === null) {
        return (
            <div className="login-panel">Please login and set your weather location to compare it with Mars.</div>
        )
    }
        
    return (
        <div>
            <div className="weather-div">
                <div className="weather-header">
                    <div className="weather-title"><img width="48px" height="48px" src={mars}/><h1>Mars Weather</h1></div>
                    <p className="day-info"><strong>Mars Solar Day: </strong>{marsWeatherWeek[marsWeatherWeek.length - 1].sol} | <strong>Location: </strong>Elysium Planitia</p>
                </div>
                <MarsWeatherInfo marsWeatherWeek={marsWeatherWeek}/>
                <div className="bottom-info">
                    <MarsPastWeek marsWeatherWeek={marsWeatherWeek}/>
                </div>
            </div>
            <MarsCountdown/>
        </div>

    )
}