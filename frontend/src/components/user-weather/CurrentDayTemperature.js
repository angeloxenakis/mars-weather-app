import React from 'react'
import temp from "../../assets/green-temp.svg"

export function CurrentDayTemperature(props) {
    return (
        <div className="earth-temp-panel">
            <h2>Temperature</h2>
            <div className="temp-contents">
                <img width="104px" height="104px" src={temp}/>  
                <p><strong>{props.temperature}°F</strong></p>
            </div>
        </div>
    )
}