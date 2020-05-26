import React, { useEffect, useState } from 'react';
import { MarsPastWeek } from './MarsPastWeek'
import { MarsWeatherInfo } from './MarsWeatherInfo'
import { MarsCountdown } from './MarsCountdown'

let useComponentDidMount = (callback) => {
    useEffect(callback, [])
}

let currentDate = new Date().toDateString();

export function MarsWeatherPanel() {
    let [ marsWeatherWeek, setMarsWeatherWeek ] = useState(null)

    useComponentDidMount( () => {
        fetch('http://localhost:3000/mars_weather_records')
            .then( resp => resp.json() )
            .then( MarsData => setMarsWeatherWeek(MarsData) ) 
    })

    if (marsWeatherWeek === null) {
        return (
            <h3>Receiving Weather Data from Planet Mars...</h3>
        )
    }
        
    return (
        <div>
            <div className="weather-div">
                <div className="weather-header">
                    <h1>Mars Weather</h1>
                    <p className="day-info"><strong>Earth Date: </strong> {currentDate} | <strong>Mars SOL: </strong>527</p>
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