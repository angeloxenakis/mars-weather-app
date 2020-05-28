import React from 'react'
import pressure from "../../assets/green-air-pressure.svg"


export function EarthAirPressure(props) {
    return (
        <div className="green-pressure-panel">
            <h4>Air Pressure</h4>
            <img width="48px" height="48px" src={pressure}/>
            <p>{props.pressure} Pa</p>
        </div>
    )
}