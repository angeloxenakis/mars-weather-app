import React from 'react'

export function MarsTemperature(props) {
    return (
        <div>
            <h3>Temperature: {JSON.stringify(props.marsWeather['526']['AT']['av'])}°C</h3>
        </div>
    )
}