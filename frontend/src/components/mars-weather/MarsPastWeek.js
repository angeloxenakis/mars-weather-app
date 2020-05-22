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
            {/* <div className="small-card">
                <h4>SOL: 526</h4>
                <img src="https://img.icons8.com/ios/30/000000/thermometer.png"/>
                <p className="small-text">{JSON.stringify(props.marsWeather['526']['AT']['av'])}°C</p>
            </div>
            <div className="small-card">
                <h4>SOL: 525</h4>
                <img src="https://img.icons8.com/ios/30/000000/thermometer.png"/>
                <p className="small-text">{JSON.stringify(props.marsWeather['525']['AT']['av'])}°C</p>
            </div>
            <div className="small-card">
                <h4>SOL: 524</h4>
                <img src="https://img.icons8.com/ios/30/000000/thermometer.png"/>
                <p className="small-text">{JSON.stringify(props.marsWeather['524']['AT']['av'])}°C</p>
            </div>
            <div className="small-card">
                <h4>SOL: 523</h4>
                <img src="https://img.icons8.com/ios/30/000000/thermometer.png"/>
                <p className="small-text">{JSON.stringify(props.marsWeather['523']['AT']['av'])}°C</p>
            </div>
            <div className="small-card">
                <h4>SOL: 522</h4>
                <img src="https://img.icons8.com/ios/30/000000/thermometer.png"/>
                <p className="small-text">{JSON.stringify(props.marsWeather['522']['AT']['av'])}°C</p>
            </div>
            <div className="small-card">
                <h4>SOL: 521</h4>
                <img src="https://img.icons8.com/ios/30/000000/thermometer.png"/>
                <p className="small-text">{JSON.stringify(props.marsWeather['521']['AT']['av'])}°C</p>
            </div> */}
        </div>
    )
}