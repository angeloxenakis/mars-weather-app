import React from 'react'
import temp from "../../assets/red-temp.svg"


export function MarsAirPressure(props) {
    return (
        <div className="pressure-panel">
            <h4>Air Pressure</h4>
            <img width="48px" height="48px" src={temp}/>
            <p>{props.currentSol.air_pressure} Pa</p>
        </div>
    )
}