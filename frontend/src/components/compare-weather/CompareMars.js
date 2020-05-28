import React from 'react'
import mars from "../../assets/red-mars.svg"

export function CompareMars(props) {
    let currentSol = props.marsWeatherWeek[props.marsWeatherWeek.length - 1]
    return (
        <div className="compare-mars-container">
            <div className="weather-title"><img className="compare-icon" width="32px" height="32px" src={mars}/><h3> Mars Weather</h3></div>
            <br></br><br></br>
            <div className="compare-mars-info">
                <h4>Temperature:</h4>
                <p>{currentSol.temperature}°C</p>
                <hr></hr><br></br>
                <h4>Wind:</h4>
                <p>Speed: {currentSol.wind_speed} mph</p>
                <p>Direction: {currentSol.wind_direction}</p>
                <hr></hr><br></br>
                <h4>Air Pressure:</h4>
                <p>{currentSol.air_pressure} Pa</p>
                <hr></hr><br></br>
                <h4>Season:</h4>
                <p>{currentSol.season}</p>
                <hr></hr><br></br>
            </div>
        </div>
    )
}