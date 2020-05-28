import React, { useEffect, useState } from 'react';
import { CompareMars } from './CompareMars'
import { CompareEarth } from './CompareEarth'
import { MarsCountdown } from '../mars-weather/MarsCountdown'
import insight from "../../assets/blue-insight.svg"

let useComponentDidMount = (callback) => {
    useEffect(callback, [])
}

let currentDate = new Date().toDateString();

export function CompareWeather(props) {
    let [ marsWeatherWeek, setMarsWeatherWeek ] = useState(null)

    useComponentDidMount( () => {
        fetch('http://localhost:3000/mars_weather_records')
            .then( resp => resp.json() )
            .then( marsData => setMarsWeatherWeek(marsData) ) 
    })

    if (marsWeatherWeek === null) {
        return (
            <h3>Receiving Weather Data from Planet Mars...</h3>
        )
    }

    if (props.canView) {
        return (
            <div>
                <div className="compare-container">
                    <div className="compare-title"><img width="56px" height="56px" src={insight}/><h1>Compare Weather</h1></div>
                    <p className="day-info"><strong>Earth Date: </strong> {currentDate} | <strong>Mars SOL: </strong>{marsWeatherWeek[marsWeatherWeek.length - 1].sol}</p>
                    <div className="compare-panels">
                        <div>
                            <CompareMars marsWeatherWeek={marsWeatherWeek}/>
                        </div>
                        <div>
                            <CompareEarth zipcode = {props.zipcode}/>
                        </div>
                    </div>
                </div>
                <MarsCountdown/>
            </div>
        )
    }
    
    if (!props.canView) {
        return (
            <div className="login-panel">Please login and set your weather location to compare it with Mars.</div>
        )
    }

}