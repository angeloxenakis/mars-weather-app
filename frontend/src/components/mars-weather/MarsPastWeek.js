import React from 'react'
import temp from "../../assets/red-temp.svg"

export function MarsPastWeek(props) {

    let marsWeatherWeek = props.marsWeatherWeek
    marsWeatherWeek.pop()
    let priorSixSols = marsWeatherWeek

    return (
        <div className="small-card-container">
            {priorSixSols.map(sol => 
                <div className="small-card">
                    <h4>SOL: {sol.sol}</h4>
                    <img width="32px" height="32px" src={temp}/>
                    <p className="small-text">{sol.temperature}°C</p>
                </div>
            )}
        </div>
    )
}