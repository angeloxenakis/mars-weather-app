import React from 'react'

export function MarsAirPressure(props) {
    return (
        <div className="pressure-panel">
            <h3>Air Pressure</h3>
            <img src="https://img.icons8.com/ios/50/000000/pressure-vessel.png"/>
            <p>{JSON.stringify(props.marsWeather['526']['PRE']['av'])} Pa</p>
        </div>
    )
}