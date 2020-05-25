import React from 'react'

export function MarsAirPressure(props) {
    return (
        <div className="pressure-panel">
            <h4>Air Pressure</h4>
            <img src="https://img.icons8.com/ios/50/000000/pressure-vessel.png"/>
            <p>{props.currentSol.air_pressure} Pa</p>
        </div>
    )
}