import React from 'react'

export function CurrentDayTemperature(props) {
    return (
        <div className="temp-panel">
            <h2>Temperature</h2>
            <div className="temp-contents">
                <img src="https://img.icons8.com/ios/100/000000/thermometer.png"/>
                <p><strong>{props.temperature}°F</strong></p>
            </div>
        </div>
    )
}