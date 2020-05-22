import React from 'react'

export function MarsWindSpeed(props) {
    return (
        <div className="wind-panel">
            <h3>Wind</h3>
            <img src="https://img.icons8.com/ios/50/000000/wind.png"/>
            <p>Speed: {JSON.stringify(props.marsWeather['526']['HWS']['av'])} mps</p>
            <img src="https://img.icons8.com/ios/50/000000/barometer-gauge.png"/>
            <p>Direction: {JSON.stringify(props.marsWeather['526']['WD']['most_common']['compass_point'])}</p>
        </div>
    )
}