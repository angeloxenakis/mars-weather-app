import React from 'react'

export function MarsPastWeek(props) {

    let marsWeatherWeek = props.marsWeatherWeek
    marsWeatherWeek.pop()
    let priorSixSols = marsWeatherWeek

    return (
        <div className="small-card-container">
            {priorSixSols.map(sol => 
                <div className="small-card">
                    <h4>SOL: {sol.sol}</h4>
                    <img src="https://img.icons8.com/ios/30/000000/thermometer.png"/>
                    <p className="small-text">{sol.temperature}°C</p>
                </div>
            )}
        </div>
    )
}