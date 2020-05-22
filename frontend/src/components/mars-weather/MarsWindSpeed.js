import React from 'react'

export function MarsWindSpeed(props) {
    return (
        <div className="wind-panel">
            <h3>Wind</h3>
            <img src="https://img.icons8.com/ios/50/000000/wind.png"/>
            <p>Speed: {(Math.round(props.currentSol.wind_speed * 2.3))} mph</p>
            <img src="https://img.icons8.com/ios/50/000000/barometer-gauge.png"/>
            <p>Direction: {props.currentSol.wind_direction}</p>
        </div>
    )
}