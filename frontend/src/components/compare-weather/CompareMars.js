import React from 'react'
import mars from "../../assets/red-mars.svg"

export function CompareMars() {
    return (
        <div className="compare-mars-container">
            <div className="weather-title"><img className="compare-icon" width="32px" height="32px" src={mars}/><h3> Mars Weather</h3></div>
            <br></br><br></br>
            <div className="compare-mars-info">
                <h4>Temperature:</h4>
                <p>-64°C</p>
                <hr></hr><br></br>
                <h4>Wind:</h4>
                <p>Speed: 4 mph</p>
                <p>Direction: NW</p>
                <hr></hr><br></br>
                <h4>Air Pressure:</h4>
                <p>-64°C</p>
                <hr></hr><br></br>
                <h4>Season:</h4>
                <p>Summer</p>
                <hr></hr><br></br>
            </div>
        </div>
    )
}