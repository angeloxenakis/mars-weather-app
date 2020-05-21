import React from 'react'

export function MarsAirPressure(props) {
    return (
        <div>
            <h3>Air Pressure: {JSON.stringify(props.marsWeather['526']['PRE']['av'])} Pa</h3>
        </div>
    )
}