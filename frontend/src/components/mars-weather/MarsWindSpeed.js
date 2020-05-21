import React from 'react'

export function MarsWindSpeed(props) {
    return (
        <div>
            <h3>Wind</h3>
            <h5>Speed: {JSON.stringify(props.marsWeather['526']['HWS']['av'])} mps</h5>
            <h5>Direction: {JSON.stringify(props.marsWeather['526']['WD']['most_common']['compass_point'])}</h5>
        </div>
    )
}