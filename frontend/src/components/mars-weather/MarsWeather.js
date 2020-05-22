import React, { useEffect, useState } from 'react';
import { MarsTemperature } from './MarsTemperature'
import { MarsWindSpeed} from './MarsWindSpeed'
import { MarsAirPressure } from './MarsAirPressure'
import { MarsPastWeek } from './MarsPastWeek'

let useComponentDidMount = (callback) => {
    useEffect(callback, [])
}

export function MarsWeather() {
    let [ marsWeather, setMarsWeather ] = useState(null)
    console.log(marsWeather)

    useComponentDidMount( () => {
        fetch('https://api.nasa.gov/insight_weather/?api_key=i9gqXdEKqhWTTCLhNwoJdWmzLyYXQUF96t3bVmfA&feedtype=json&ver=1.0')
            .then( resp => resp.json() )
            .then( MarsWeatherData => setMarsWeather(MarsWeatherData) ) 
    })

    let currentDate = new Date().toDateString();

    if (marsWeather === null) {
        return (
            <h3>Recieving Weather Data from Planet Mars...</h3>
        )
    }
        
    return (
        <div className="weather-div">
            <div className="weather-header">
                <h1>Mars Weather</h1>
                <p className="day-info"><strong>Earth Date: </strong> {currentDate} | <strong>Mars SOL: </strong>527</p>
            </div>
            <div className="weather-info">
                <div className="main-info">
                    <MarsTemperature marsWeather={marsWeather}/>
                </div>
                <div className="side-info">
                    <MarsAirPressure marsWeather={marsWeather}/>
                    <MarsWindSpeed marsWeather={marsWeather}/>
                </div>
            </div>
            <div className="bottom-info">
                    <MarsPastWeek marsWeather={marsWeather}/>
            </div>
        </div>
    )
}