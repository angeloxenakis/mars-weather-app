import React from 'react'
import temp from "../../assets/red-temp.svg"

export function MarsTemperature(props) {
    return (
        <div className="main-panel">
            <div className="temp-panel">
                <h3>Temperature</h3>
                <div className="temp-contents">
                    <img width="104px" height="104px" src={temp}/>
                    <p>{props.currentSol.temperature}°C</p>
                </div>
            </div>
        </div>
    )
}